import React, { FC, useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import { classNames } from "../../utils";
import Card from "./Card";
import { experinces } from "../data";

const Tabs: FC = () => {
  return (
    <>
      <Tab.Group>
        <div className="flex flex-col flex-wrap ">
          <Tab.List className="flex flex-row items-center justify-center w-10/12 mx-auto md:w-8/12 md:mx-auto md:p-2 lg:w-8/12 lg:mx-auto ">
            {Object.keys(experinces).map((item, idx) => {
              return (
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "flex flex-col mb-2  p-2 dark:text-dark-bg md:text-md w-12/12 md:p-2 lg:p-3 text-sm lg:text-[14px] text-light-bg3 focus:outline-none",
                      selected
                        ? "bg-white dark:bg-dark-bg dark:text-white   backdrop-blur-lg backdrop-filter bg-opacity-20 font-semibold shadow-lg rounded-2xl "
                        : " hover:bg-white/[0.11] hover:text-white hover:shadow-lg hover:rounded-2xl"
                    )
                  }
                  key={idx}
                >
                  {item}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="w-full mx-auto lg:w-8/12">
            {Object.values(experinces)
              .flat()
              .map((item: any, idx: number) => {
                return (
                  <Tab.Panel className="py-4 mx-0 lg:mx-2" key={idx}>
                    <Card
                      title={item.title}
                      duration={item.duration}
                      duties={item.duties}
                    />
                  </Tab.Panel>
                );
              })}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
};

export default Tabs;
