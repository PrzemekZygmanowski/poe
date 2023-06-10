import { Shortcut } from "../components/Shortcut";
import { SmallTitle } from "../components/typography/SmallTitle";
import { shortcuts } from "../data/models/shortcuts";

export const ShortCuts = () => {
  return (
    <>
      <div className='mb-6 flex justify-center'>
        <SmallTitle smallTitleText='Shortcuts' />
      </div>
      <div className='grid gap-y-4 grid-cols-5 auto-cols-max'>
        {shortcuts.map(shortcut => (
          <Shortcut
            key={shortcut.id}
            shortcutText={shortcut.title}
            iconText={shortcut.icon}
          />
        ))}
      </div>
    </>
  );
};
