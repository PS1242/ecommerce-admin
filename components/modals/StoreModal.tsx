"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModalStore = useStoreModal();

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModalStore?.isOpen}
      onClose={storeModalStore?.onClose}
    >
      Future Create store Form
    </Modal>
  );
};
