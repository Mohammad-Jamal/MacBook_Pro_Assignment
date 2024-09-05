import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Separator from "./Separater";

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [indicatorStyles, setIndicatorStyles] = useState({});
  const tabRefs = useRef([]);
  const tabs = ["about", "experiences", "recommended"];

  useEffect(() => {
    const activeTabIndex = tabs.indexOf(activeTab);
    if (tabRefs.current[activeTabIndex]) {
      const activeTabElement = tabRefs.current[activeTabIndex];
      const { offsetLeft, offsetWidth } = activeTabElement;
      setIndicatorStyles({
        left: offsetLeft,
        width: offsetWidth,
        boxShadow: "10px 20px 70px 5px rgba(0, 0, 0, 0.107)",
      });
    }
  }, [activeTab]);

  return (
    <>
      <div className="w-full md:w-[750px] h-[316px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_rgba(0,0,0,0.4)] px-9 sm:px-[3.5rem] md:px-16 py-3 z-1 ">
        <div className="w-full  flex items-center sm:mt-6 mt-4 h-11 sm:h-14 bg-[#171717] rounded-[23px] p-1 relative">
          {/* side-icons-div */}
          <div className="gap-20 bottom-[-4.7rem] md:gap-24 flex-col  items-center justify-center flex absolute z-10 left-[-1.9rem] sm:left-[-3.6rem] md:left-[-4rem] sm:bottom-[-4rem] md:bottom-[-5rem] w-5 sm:w-12">
            <img src="./info.png" alt="" width={24} />
            <img src="./boxes.png" alt="" width={24} className="ml-1" />
          </div>

          {/* navbar */}
          <nav className="w-full flex items-center justify-center gap-0 sm:gap-1 relative sm:flex-nowrap">
            {tabs.map((tab, index) => (
              <Button
                ref={(el) => (tabRefs.current[index] = el)}
                className={`focus:border-none relative z-10 text-[11px] px-2 sm:px-[2.95rem] md:px-[3rem] sm:h-[46px] h-9 rounded-[16px] ${
                  activeTab === tab
                    ? "bg-[#28292F] border-black border-2 hover:bg-[rgb(40,41,47)] text-[#fff] shadow-[10px_20px_70px_5px] shadow-black"
                    : "bg-transparent text-[#A3ADB2] hover:shadow-[inset_15rem_0_0_0] hover:shadow-[#28292fb0]  ease-in-out duration-1000 transition-[box-shadow]"
                }  sm:text-lg tracking-wide font-poppins `}
                key={tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
            <span
              className="absolute rounded-[16px] h-full top-0 bg-[#28292F] transition-all duration-500 ease-in-out"
              style={indicatorStyles}
            ></span>
            <span
              className="absolute px-6 sm:px-20 rounded-2xl sm:shadow-[12px_20px_45px_15px] sm:shadow-black py-3 sm:py-5 sm:blur-lg sm:top-0 sm:left-2 left-0
            shadow-[7px_7px_28px_8px] shadow-black
            "
            ></span>
          </nav>
        </div>
        <ScrollArea className="h-[13rem] scroll-smooth w-full rounded-md">
          <div className="text-[#969696] text-sm sm:text-[19px] font-plus flex flex-col gap-4 sm:gap-6 mt-7 sm:mt-8 sm:tracking-wide tracking-wide sm:leading-7 ">
            {activeTab === "about" && (
              <>
                <p>
                  Hello Jamal! I’m Dave, your sales rep here from Salesforce.
                  I’ve been working at this awesome company for 3 years now.
                </p>
                <p>
                  I was born and raised in Albany, NY& have been living in Santa
                  Carla for the past 10 years my wife Tiffany and my 4 year old
                  twin daughters- Emma and Ella. Both of them are just starting
                  school, so my calender is usually blocked between 9-10 AM.
                  This is a...
                </p>
              </>
            )}
            {activeTab === "experiences" && (
              <p>
                Experiences Content Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sed enim fugit in accusamus nesciunt qui
                asperiores ad amet ullam minima inventore ratione quam, dolorum
                perspiciatis eum delectus quos quod fuga?
              </p>
            )}
            {activeTab === "recommended" && (
              <p>
                Recommended Content Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates harum temporibus repellendus
                dignissimos reprehenderit deserunt aperiam consequuntur
                cupiditate nostrum non atque quis, consectetur ad delectus
                facere quo necessitatibus minus. Delectus.
              </p>
            )}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <div className=" pt-12 sm:pt-0 sm:mt-12">
          <Separator value="3" />
        </div>
      </div>
    </>
  );
};

export default TabsWidget;
