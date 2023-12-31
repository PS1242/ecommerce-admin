"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";

interface ModelProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export function Modal(props: ModelProps) {
  const { title, description, isOpen, onClose, children } = props;
  const [mount, setMount] = useState(false);

  const onChange = (isOpen: boolean) => {
    if (!isOpen) {
      onClose();
    }
  };

  // Bypass shadcn ui hydration error - currently active github issue.
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Dialog open={mount ? isOpen : false} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
