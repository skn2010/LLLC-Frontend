"use client";

import { ReactNode } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import cn from "@/app/utils/class-names";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  dialogTile?: string;
  children: ReactNode;
  className?: string;
};

export default function Modal({
  isOpen,
  setIsOpen,
  dialogTile,
  children,
  className,
}: Props) {
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full shadow-2xl max-w-md rounded-xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {dialogTile ? (
                <DialogTitle
                  as="h3"
                  className="text-md font-semibold text-gray-800"
                >
                  {dialogTile}
                </DialogTitle>
              ) : null}

              <div className={cn("mt-2", className)}>{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
