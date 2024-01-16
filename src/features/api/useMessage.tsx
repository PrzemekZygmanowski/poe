import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { IMessageContent } from "../../interfaces/interfaces";

export const useMessage = () => {
  const queryClient = useQueryClient();

  const postMessage = async (messageContent: IMessageContent) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/messages`,
      messageContent
    );
    return data;
  };

  const { mutate, isLoading } = useMutation(postMessage, {
    onSuccess: data => {
      console.log(data);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  return { mutate, isLoading };
};
