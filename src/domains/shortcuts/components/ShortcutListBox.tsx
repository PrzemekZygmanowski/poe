import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { SmallTitle } from "../../../components/typography/SmallTitle";
import { Shortcut } from "./Shortcut";
import { IShortCut } from "../../../interfaces/interfaces";
import { IShortcutListBox } from "../helpers/interfaces";

export const ShortcutListBox = ({
  shortcuts,
  selectShortcut,
  activeShortcut,
}: IShortcutListBox) => {
  return (
    <div className=' w-full max-w-sm'>
      <Popover className='relative'>
        {({ open }) => (
          <>
            <Popover.Button className='flex justify-center items-center  content-center w-[90vw]'>
              <div className='flex justify-center content-center'>
                <SmallTitle smallTitleText={activeShortcut.title} />
              </div>
              <ChevronDownIcon
                className={`${
                  open ? "text-lightSky_400" : "text-lightSlate_400"
                }
                  ml-2 h-5 w-5 transition duration-150 ease-in-out`}
                aria-hidden='true'
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'>
              <Popover.Panel className='absolute  z-10 mt-3 w-[90vw]  transform'>
                <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5'>
                  <div className='relative  bg-darkSky_950 p-7 grid gap-y-4 grid-cols-5 auto-cols-max'>
                    {shortcuts.map((shortcut: IShortCut) => (
                      <div
                        onClick={() => selectShortcut(shortcut)}
                        key={shortcut.id}>
                        <Shortcut
                          shortcutText={shortcut.title}
                          iconText={shortcut.icon}
                          status={
                            activeShortcut.id === shortcut.id
                              ? "active"
                              : "inactive"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};
