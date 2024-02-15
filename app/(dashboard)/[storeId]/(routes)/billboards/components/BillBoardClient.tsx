"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";

export default function BillBoardClient() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboards(0)"
          description="Manage billboard for your store"
        />
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
    </>
  );
}
