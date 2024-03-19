import { useOrigin } from "@/hooks/useOrigin";
import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";

type ApiListProps = {
  entityName: string;
  entityId: string;
};

export default function ApiList(props: ApiListProps) {
  const { entityName, entityId } = props;

  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/{${entityId}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityId}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/{${entityId}}`}
      />
    </>
  );
}
