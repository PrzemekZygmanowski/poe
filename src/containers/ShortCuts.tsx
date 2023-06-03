import { Shortcut } from "../components/Shortcut";
import { shortcuts } from "../data/models/shortcuts";

export const ShortCuts = () => {
  return (
    <div className='grid gap-y-4 grid-cols-4 auto-cols-max'>
      {shortcuts.map(shortcut => (
        <Shortcut shortcutText={shortcut.title} />
      ))}
    </div>
  );
};
