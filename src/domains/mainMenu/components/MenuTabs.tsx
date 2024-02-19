import React from "react";
import { Tab } from "@headlessui/react";
import { IMenuTabs } from "../helpers/interfaces";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const MenuTabs = ({ tabsCategory }: IMenuTabs) => {
  return (
    <div className='w-full  px-2 py-4 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-blue-900/20 p-1'>
          {tabsCategory.map(category => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-lightSky_400 text-darkSky_950 shadow"
                    : "text-lightSlate_400 hover:bg-white/[0.12] hover:text-white"
                )
              }>
              {category.tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {tabsCategory.map(category => (
            <Tab.Panel key={category.id} className='p-3'>
              <category.component />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
