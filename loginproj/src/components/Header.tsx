"use client";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function backTo() {
    router.back();
  }
  return (
    <div>
      {" "}
      <div className="flex items-center p-[10px] ">
        <h2
          className="ml-[5px] text-black flex items-center gap-2 cursor-pointer "
          onClick={backTo}
        >
          {" "}
          <GoArrowLeft /> უკან დაბრუნება
        </h2>
      </div>
    </div>
  );
}
