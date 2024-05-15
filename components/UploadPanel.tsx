"use client";

import { createClient } from "@/utils/supabase/component";
import useSWR from "swr";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import UploadForm from "./UploadPanel/UploadForm";

const supabase = createClient();

const fetchUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

const UploadPanel = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { data: user, error } = useSWR("user", fetchUser);

  const handleClick = () => {
    if (!user) {
      return authModal.onOpen();
    } else {
      return uploadModal.onOpen();
    }
  };

  if (error) {
    return <div>Error loading user data.</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload your song</h2>
      <button onClick={handleClick}>Upload Track</button>
    </div>
  );
};

export default UploadPanel;
