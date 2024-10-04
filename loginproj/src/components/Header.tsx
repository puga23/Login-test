import React from "react";
import { GoArrowLeft } from "react-icons/go";

export default function Header() {
  return (
    <div>
      {" "}
      <div className="flex items-center p-[10px] ">
        <GoArrowLeft /> <h2 className="ml-[5px] text-black ">უკან დაბრუნება</h2>
      </div>
    </div>
  );
}
