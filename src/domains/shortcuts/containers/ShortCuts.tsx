import { useState } from "react";
import { IShortCut } from "../../../interfaces/interfaces";
import { useAppDispatch, useAppSelector } from "../../../features/hooks/redux";
import {
  selectShortcutIdAndTitle,
  setShortcutState,
} from "../features/reducers/shortcutStateSlice";
import { useShortcuts } from "../../../features/api/useShortcuts";
import { ShortcutError } from "../../../components/ShortcutError";
import { SpinnerLoader } from "../../../components/SpinnerLoader";
import { ShortcutListBox } from "../components/ShortcutListBox";

export const ShortCuts = () => {
  const [activeShortcutId, setActiveShortcutId] = useState<number | null>(0);
  const activeShortcut = useAppSelector(selectShortcutIdAndTitle);

  const dispatch = useAppDispatch();
  const { status, data } = useShortcuts();

  const toggleActiveShortcut = (shortcut: IShortCut) => {
    if (activeShortcut.id !== shortcut.id) {
      setActiveShortcutId(shortcut.id);
      dispatch(setShortcutState(shortcut));
    }
  };
  console.log(activeShortcut);

  return (
    <>
      <div className='grid gap-y-4 grid-cols-5 auto-cols-max'>
        {status === "loading" && <SpinnerLoader />}
        {status === "error" && <ShortcutError />}
        {data && (
          <ShortcutListBox
            shortcuts={data}
            selectShortcut={toggleActiveShortcut}
            activeShortcut={activeShortcut}
          />
        )}
        {/* {data &&
          data.map((shortcut: IShortCut) => (
            <div
              onClick={() => toggleActiveShortcut(shortcut)}
              key={shortcut.id}>
              <Shortcut
                shortcutText={shortcut.title}
                iconText={shortcut.icon}
                status={activeShortcut === shortcut.id ? "active" : "inactive"}
              />
            </div>
          ))} */}
      </div>
    </>
  );
};
