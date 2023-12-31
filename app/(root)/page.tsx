"use client";

import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <>
      <div className="p-2">
        <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
          Children
        </Modal>
      </div>
    </>
  );
}
