import { type NextComponentType } from "next";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

const Content: NextComponentType = () => {
  const { data: sessionData } = useSession();
  const { data: topics } = api.topic.getAll.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });
  return (
    <div>
      <h1>Content</h1>
    </div>
  );
};

export default Content;
