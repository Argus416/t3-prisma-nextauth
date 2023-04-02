import { type NextComponentType } from "next";
import { useSession } from "next-auth/react";
import { FormEvent } from "react";
import { api } from "~/utils/api";

const AddTopic: NextComponentType = () => {
  const { data: sessionData } = useSession();
  const { refetch: refetchTopics } = api.topic.getAll.useQuery(undefined, {
    enabled: sessionData.user !== undefined,
  });

  const createTopic = api.topic.create.useMutation({
    onSuccess: () => {
      void refetchTopics();
    },
  });
  const keyDownHandler = (e: FormEvent<HTMLInputElement>) => {
    const title = e.currentTarget.value;
    if (e.key === "Enter") {
      createTopic.mutate({
        title,
      });

      e.currentTarget.value = "";
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Note"
        className="input-bordered input w-full max-w-xs"
        onKeyDown={(e) => keyDownHandler(e)}
      />
    </div>
  );
};

export default AddTopic;
