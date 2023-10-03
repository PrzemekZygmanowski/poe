import { Shortcut } from "../components/Shortcut";
import { SmallTitle } from "../../../components/typography/SmallTitle";
import { useState } from "react";
import { IShortCut } from "../../../interfaces/interfaces";
import { useAppDispatch } from "../../../features/hooks/redux";
import { setShortcutState } from "../features/reducers/shortcutStateSlice";
import { useShortcuts } from "../../../features/api/useShortcuts";

export const ShortCuts = () => {
  const [activeShortcut, setActiveShortcut] = useState<number | null>(0);
  const dispatch = useAppDispatch();
  const { status, data } = useShortcuts();

  const toggleActiveShortcut = (shortcut: IShortCut) => {
    if (activeShortcut !== shortcut.id) {
      setActiveShortcut(shortcut.id);
      dispatch(setShortcutState(shortcut));
    }
  };

  return (
    <>
      <div className='mb-6 flex justify-center'>
        <SmallTitle smallTitleText='Shortcuts' />
      </div>
      <div className='grid gap-y-4 grid-cols-5 auto-cols-max'>
        {status === "loading" && <div>Loading...</div>}
        {status === "error" && <div>Error</div>}
        {data &&
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
          ))}
      </div>
    </>
  );
};
