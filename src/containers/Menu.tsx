/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactElement, useState } from "react";
import { Tab } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { switchModel } from "../features/reducers/modelSlice";
import { bots as botsCategories } from "../data/models/models";

interface Props {
  children: ReactElement | ReactElement[];
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const MenuComponent = ({ children }: Props) => {
  const [tabs] = useState(botsCategories);
  const dispatch = useDispatch();

  const arrayOfModels = Object.entries(tabs).map(([key, value]) => ({
    ...value,
    key,
  }));

  return (
    <div className='w-full  px-2 py-16 sm:px-0  '>
      <Tab.Group
        onChange={index => {
          dispatch(switchModel(arrayOfModels[index]));
        }}>
        <Tab.List className='flex space-x-1 rounded-xl bg-darkSky_950 p-1'>
          {tabs.map(category => (
            <Tab
              key={category.id}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-darkSlate_900",
                  selected
                    ? "bg-lightSky_400 shadow"
                    : "text-lightSlate_100 hover:bg-lightSlate_100/[0.12] hover:text-lightSlate_100"
                )
              }>
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(tabs).map(idx => (
            <Tab.Panel className='flex flex-col items-center' key={idx.id}>
              {children}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
