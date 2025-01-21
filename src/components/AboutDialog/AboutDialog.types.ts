import { Dispatch, SetStateAction } from "react";

export type AboutDialogProps = {
  isOpen: boolean;
  handleOpenChange: Dispatch<SetStateAction<boolean>>;
  selection: "accelerate" | "gsk" | "pydata";
};
