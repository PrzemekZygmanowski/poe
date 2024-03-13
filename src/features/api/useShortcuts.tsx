import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { shortcuts } from "../../data/models/shortcuts";
import { useAppDispatch } from "../hooks/redux";
import { setShortcutList } from "../reducers/shortcutListStateSlice";

export const useShortcuts = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ["shortcuts"],
    queryFn: async () => {
      if (import.meta.env.VITE_ENV_NAME === "test") {
        dispatch(setShortcutList(shortcuts));
        return shortcuts;
      } else if (import.meta.env.VITE_ENV_NAME === "production") {
        const { data } = await axios.get(import.meta.env.VITE_BACKEND_URL);
        return data;
      }
    },
  });
};
