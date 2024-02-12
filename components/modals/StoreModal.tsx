"use client";

import { useState } from "react";
import { useStoreModal } from "@/hooks/useStoreModal";
import { Modal } from "@/components/ui/modal";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModal = () => {
  const [loading, setLoading] = useState(false);
  const storeModalStore = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const formSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const resp = await axios.post("/api/stores", values);
      window.location.assign(`/${resp.data.id}`);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModalStore?.isOpen}
      onClose={storeModalStore?.onClose}
    >
      <div>
        <div className="space-y-4 pt-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(formSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={loading}
                        placeholder="E-commerce"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end">
                <Button
                  type="button"
                  onClick={storeModalStore.onClose}
                  disabled={loading}
                  variant={"outline"}
                >
                  Cancel
                </Button>
                <Button disabled={loading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
