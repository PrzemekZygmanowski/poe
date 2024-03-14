// import { useQueryClient } from "@tanstack/react-query";
import { ShortcutList as ShortcutListComponent } from "../components/ShortcutList";
import { IShortCuts } from "../../../interfaces/interfaces";
import { SpinnerLoader } from "../../../components/SpinnerLoader";
import { useAppSelector } from "../../../features/hooks/redux";
import { selectShortcutListState } from "../../../features/reducers/shortcutListStateSlice";
import { Button } from "../../../components/Button";

export const ShortcutList = () => {
  const shortcutList: IShortCuts = useAppSelector(selectShortcutListState);
  const addSomething = (): void => {
    console.log("Add");
  };
  const resetSomething = (): void => {
    console.log("Reset");
  };
  // const queryClient = useQueryClient();
  // const shortcutsList: IShortCuts | undefined = queryClient.getQueryData([
  //   "shortcuts",
  // ]);

  if (!shortcutList) {
    return <SpinnerLoader />; // or handle the case when shortcutsList is undefined
  }

  return (
    <>
      <div className='mb-8 grid  grid-cols-5 gap-x-2 content-stretch	'>
        <div className='col-start-4'>
          <Button text='Add' handleClick={addSomething} />{" "}
        </div>
        <div className='col-start-5'>
          <Button text='Reset' handleClick={resetSomething} />{" "}
        </div>
      </div>
      <ShortcutListComponent shortCutElementList={shortcutList} />
    </>
  );
};
