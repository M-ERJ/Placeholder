import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
                        bg-pi-offwhite-main/5
                        backdrop-blur-sm
                        fixed
                        inset-0
                        z-40
                    "
        />
        <Dialog.Content
          className="
                        fixed
                        drop-shadow-md
                        border
                        border-pi-offwhite-shadow
                        top-[50%]
                        left-[50%]
                        max-h-full
                        h-full
                        md:h-auto
                        md:max-h-[85vh]
                        w-full
                        md:w-[90vw]
                        md:max-w-[450px]
                        translate-x-[-50%]
                        translate-y-[-50%]
                        rounded-md
                        bg-pi-offwhite-main
                        p-8
                        focus:outline-none
                        z-50
                    "
        >
          <Dialog.Title
            className="
                            text-xl
                            font-bold
                            text-center
                            mb-4
                        "
          >
            {title}
          </Dialog.Title>
          <Dialog.Description
            className="
                            text-sm
                            text-center
                            leading-normal
                            mb-5
                        "
          >
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button
              className="
                                absolute
                                top-4
                                right-4
                                text-2xl
                                text-pi-grey-main/80
                                hover:text-pi-grey-main/100
                                inline-flex
                                appearance-none
                                items-center
                                justify-center
                                rounded-full
                                focus:outline-none
                                transition-colors
                            "
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
