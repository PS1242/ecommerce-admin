import prismadb from "@/lib/prismadb";

interface DashboardProps {
  params: {
    storeId: string;
  };
}

export default async function DashboardPage(props: DashboardProps) {
  const store = await prismadb.store.findFirst({
    where: {
      id: props?.params.storeId,
    },
  });

  return <div>This is a dashboard {store?.name}</div>;
}
