import React from "react";
import { GoArrowLeft } from "react-icons/go";
export default function Header() {
  return (
    <div>
      <div className="flex items-center p-[10px] px-[30px] ">
        <GoArrowLeft className="font-bold text-[20px] " />{" "}
        <h2 className="ml-[5px] text-black ">უკან დაბრუნება</h2>
      </div>
    </div>
  );
}
