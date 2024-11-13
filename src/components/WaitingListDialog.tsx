"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WaitingListDialog = ({ open }: { open: boolean }) => {
  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-[525px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        hideCloseButton={true}
      >
        <DialogHeader>
          <DialogTitle>Welcome Elektrik</DialogTitle>
          <DialogDescription className="text-base">
            We're thrill that you want to be part of the elektrik future.
            Currently ALL of our motorcycles are sold out.
          </DialogDescription>
        </DialogHeader>

        <p>
          We will reach out to you as soon as we have more motorcycles
          available.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default WaitingListDialog;
