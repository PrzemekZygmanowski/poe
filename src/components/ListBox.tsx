import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { models } from "../data/models/models";
import { IListBox } from "../interfaces/interfaces";

export const ListBox = (listBoxProps: IListBox) => {
  const [selected, setSelected] = useState(models[0]);
  const [position, setPosition] = useState("above");
  const listBoxPosition = {
    above: "mb-1 bottom-full",
    below: "mt-1 top-full",
  };
  return (
    <div className='w-72'>
      <Listbox value={selected} onChange={setSelected} horizontal>
        <div className='relative mt-1'>
          <Listbox.Button className='relative w-3/4 cursor-default pb-2 pl-3 pr-10 text-left'>
            <span className='block truncate text-lightSlate_400 focus:text-lightSky_400 '>
              {selected.name}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Listbox.Options
              className={`${
                listBoxPosition[position as keyof typeof listBoxPosition]
              }  absolute max-h-60 w-full overflow-auto rounded-md bg-darkSky_950 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none `}>
              {models.map((model, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-lightSky_400 text-darkSky_950"
                        : "text-lightSlate_400"
                    }`
                  }
                  value={model}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}>
                        {model.name}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-darkSky_950'>
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
