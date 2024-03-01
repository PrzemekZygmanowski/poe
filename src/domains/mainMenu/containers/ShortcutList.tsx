import { useQueryClient } from "@tanstack/react-query";
import { ShortcutList as ShortcutListComponent } from "../components/ShortcutList";
import { IShortCuts } from "../../../interfaces/interfaces";
import { SpinnerLoader } from "../../../components/SpinnerLoader";

export const ShortcutList = () => {
  const queryClient = useQueryClient();
  const shortcutsList: IShortCuts | undefined =
    queryClient.getQueryData(["shortcuts"]);

  if (!shortcutsList) {
    return <SpinnerLoader />; // or handle the case when shortcutsList is undefined
  }

  return <ShortcutListComponent {...shortcutsList} />;
};
