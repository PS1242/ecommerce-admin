import prismadb from "@/lib/prismadb";
import BillBoardClient from "./components/BillBoardClient";
import { format } from "date-fns";

type BillboardProps = {
  params: {
    storeId: string;
  };
};

export default async function Billboards(props: BillboardProps) {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: props?.params?.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillBoardClient billboards={formattedBillboards} />
      </div>
    </div>
  );
}
