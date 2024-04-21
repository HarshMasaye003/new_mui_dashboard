import React, { useState } from "react";
import { BsHeptagonFill, BsMoon, BsSun } from "react-icons/bs";
import useDark from "../hooks/useDark";

const Topbar = () => {
  const { dark, toggledark } = useDark();

  return (
    <div
      className={`flex bg-bkg text-txt justify-between items-center h-full`}
    >
      <div>
        <button
          className="flex bg-accent-1 relative left-4 items-center h-full"
          onClick={() => {
            toggledark();
          }}
        >
          {dark ? <BsSun /> : <BsMoon />}
        </button>
      </div>
      <div className=" text-accent-1" >Topbar</div>
      <div>
        <button className="flex relative right-4 items-center h-full">
          <BsHeptagonFill />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
