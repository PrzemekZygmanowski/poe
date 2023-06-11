import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { bigDialog } from "./interfaces";
import { SmallTitle } from "./typography/SmallTitle";
import { ButtonIcon } from "./ButtonIcon";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const BigDialog = ({
  isModalActive,
  handleCloseDialog,
  title,
  children,
}: bigDialog) => {
  return (
    <>
      <Transition show={isModalActive} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleCloseDialog}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-[90%] transform overflow-hidden rounded-2xl bg-darkSlate_900 p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='flex justify-between'>
                    {title && (
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900'>
                        <SmallTitle smallTitleText={title} />
                      </Dialog.Title>
                    )}
                    <ButtonIcon
                      handleClick={handleCloseDialog}
                      iconText={faCircleXmark}
                    />
                  </div>
                  <div className='mt-4'>{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
