import { Shortcut } from "../components/Shortcut";
import { SmallTitle } from "../../../components/typography/SmallTitle";
import { shortcuts } from "../../../data/models/shortcuts";
import { useState } from "react";

export const ShortCuts = () => {
  const [activeShortcut, setActiveShortcut] = useState<number | null>(0);

  const toggleActiveShortcut = (id: number) => {
    setActiveShortcut(prevId => (prevId === id ? null : id));
  };

  return (
    <>
      <div className='mb-6 flex justify-center'>
        <SmallTitle smallTitleText='Shortcuts' />
      </div>
      <div className='grid gap-y-4 grid-cols-5 auto-cols-max'>
        {shortcuts.map(shortcut => (
          <div
            onClick={() => toggleActiveShortcut(shortcut.id)}
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
