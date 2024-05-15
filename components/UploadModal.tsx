"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { createClient } from "@/utils/supabase/component";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import useSWR from "swr";

import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import Input from "./Input";
import Button from "./Button";

const supabase = createClient();
const fetchUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

const UploadModal = () => {
  const { data: user, error } = useSWR("user", fetchUser);
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        throw new Error("Missing required fields");
        return;
      }

      const uniqueID = uuidv4();

      const { data: songData, error: songError } = await supabase.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}.mp3`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        throw new Error("Error uploading song file");
      }

      const { data: imageData, error: imageError } = await supabase.storage
        .from("images")
        .upload(`image-${values.title}-${uniqueID}.jpg`, imageFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (imageError) {
        setIsLoading(false);
        throw new Error("Error uploading image file");
      }

      const { error: supabaseError } = await supabase.from("songs").insert({
        user_id: user.id,
        title: values.title,
        author: values.author,
        image_path: imageData.path,
        song_path: songData.path,
      });

      if (supabaseError) {
        setIsLoading(false);
        throw new Error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      console.log("Upload success");
      reset();
      uploadModal.onClose();
    } catch (error) {
      console.log("something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Upload your song"
      description="Upload mp3 file and song art"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
            flex flex-col gap-y-4
        "
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song Title"
        />
        <Input
          id="author"
          disabled={isLoading}
          {...register("author", { required: true })}
          placeholder="Song Author"
        />
        <div>
          <div className="pb-1">Select a Song File</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            accept=".mp3"
            {...register("song", { required: true })}
            placeholder="Song File"
            className="border-dashed"
          />
        </div>
        <div>
          <div className="pb-1">Select an Image File</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
            placeholder="Song File"
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Upload Song
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
