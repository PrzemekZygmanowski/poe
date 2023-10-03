import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { shortcuts } from "../../data/models/shortcuts";

export const useShortcuts = () => {
  return useQuery({
    queryKey: ["shortcuts"],
    queryFn: async () => {
      if (import.meta.env.VITE_ENV_NAME === "test") {
        return shortcuts;
      } else if (import.meta.env.VITE_ENV_NAME === "production") {
        const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL);
        return data;
      }
    },
  });
};
