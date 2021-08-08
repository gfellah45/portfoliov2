import React, { FC, useState } from "react";
import { Tab, Transition } from "@headlessui/react";
import { classNames } from "../../utils";
import Card from "./Card";
const Tabs: FC = () => {
  const [experience] = useState<object>({
    Everyfarmer: [
      {
        id: "1",
        title: "Frontend Engineer @ Everyfarmer",
        duration: "January 2021 - Date",
        duties: [
          "Write modern, performant, and maintainable codes for internal projects.",
          "Work with languages, frameworks, and technologies such as JavaScript, React, Nextjs, Chakra Ui, Redux, Html5 and Css3.",
          "Interfaced with managment, providing technological expertise.",
        ],
      },
    ],
    Livrite: [
      {
        id: "1",
        title: "Frontend Engineer @ Livrite healthcare",
        duration: "January 2021 - Date",
        duties: [
          "Write modern, performant, and maintainable codes for internal projects.",
          "Work with languages, frameworks, and technologies such as JavaScript, React, Nextjs, Chakra Ui, Redux, Html5 and Css3.",
          "Interfaced with managment, providing technological expertise.",
        ],
      },
    ],
  });

  return (
    <>
      <Tab.Group>
        <div className="flex flex-col flex-wrap lg:flex-row">
          <Tab.List className="flex flex-row w-2/12 lg:flex-col">
            {Object.keys(experience).map((item, idx) => {
              return (
                <Tab
                  className={({ selected }) =>
                    classNames(
                      "flex flex-col mb-2 p-2 dark:text-dark-bg md:text-md w-12/12 md:p-4 lg:p-3 text-xs lg:text-[14px] text-light-bg3 focus:outline-none",
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
          <Tab.Panels className="w-full lg:w-10/12">
            {Object.values(experience)
              .flat()
              .map((item: any, idx: number) => {
                return (
                  <Tab.Panel className="mx-0 lg:mx-2" key={idx}>
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
