import React from "react";
import MainConfirmEmail from "@/components/auth/confirmEmail/MainConfirmEmail";
export default function page() {
  return (
    <div className=" bg-slate-500/50 absolute top-0 left-0 h-screen w-screen sm:w-1/2 flex justify-center items-center">
      <div className=" bg-white  px-[22px] pt-[40px] rounded-[10px]">
        <MainConfirmEmail />
      </div>
    </div>
  );
}
