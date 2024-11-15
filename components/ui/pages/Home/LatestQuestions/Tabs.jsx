"use client";
import classNames from "classnames";
import React, { useState } from "react";

const tabsOpts = [
  {
    id: crypto.randomUUID(),
    title: "برای شما",
  },
  {
    id: crypto.randomUUID(),
    title: "دنبال شده ها",
  },
  {
    id: crypto.randomUUID(),
    title: "درحال ترند",
  },
  {
    id: crypto.randomUUID(),
    title: "جدیدترین ها",
  },
];

const Tabs = () => {
  const [current, setCurrent] = useState({
    id: crypto.randomUUID(),
    title: "برای شما",
  });
  const [tabs, setTabs] = useState(tabsOpts);

  const selectTab = (tab) => () => {
    setCurrent(tab);
    console.log(current);
  };

  const tabStyles = classNames(
    "px-2 py-1.5 pb-2 cursor-pointer text-zinc-600 dark:text-zinc-400 select-none"
  );

  return (
    <div>
      <div className="w-full font-YekanBakh-Bold dark:border-white/10 border-b flex items-center gap-1">
        {tabs.map((tab) => (
          <div
            onClick={selectTab(tab)}
            className={`${tabStyles} ${
              current?.title == tab.title &&
              "!text-black border-b dark:!text-white dark:!border-white border-black"
            }`}
            key={tab.id}
          >
            {tab.title}
          </div>
        ))}
      </div>
        <p className="my-2 tracking-tight dark:text-white/80 text-zinc-600 font-YekanBakh-Medium">
          گروه‌هایی از افرادی که به چیزهایی مشابه شما علاقه دارند را کشف کنید و
          به آن‌ها بپیوندید.
        </p>
    </div>
  );
};

export default Tabs;
