// import { useQueryClient } from "@tanstack/react-query";
import { ShortcutList as ShortcutListComponent } from "../components/ShortcutList";
import { IShortCuts } from "../../../interfaces/interfaces";
import { SpinnerLoader } from "../../../components/SpinnerLoader";
import { useAppSelector } from "../../../features/hooks/redux";
import { selectShortcutListState } from "../../../features/reducers/shortcutListStateSlice";

export const ShortcutList = () => {
  const shortcutList: IShortCuts = useAppSelector(selectShortcutListState);
  // const queryClient = useQueryClient();
  // const shortcutsList: IShortCuts | undefined = queryClient.getQueryData([
  //   "shortcuts",
  // ]);

  if (!shortcutList) {
    return <SpinnerLoader />; // or handle the case when shortcutsList is undefined
  }

  return <ShortcutListComponent shortCutElementList={shortcutList} />;
};
