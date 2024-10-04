import Link from "next/link";
import React from "react";
import {} from "react-icons";
import { GoArrowLeft } from "react-icons/go";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Login() {
  return (
    <div className="   bg-white text-[16px]">
      <div className="flex justify-center items-center   flex-col gap-3 ">
        <h1>შესვლა</h1>

        <p>შედით თქვენს ანგარიშზე</p>

        <form className="flex flex-col justify-centers gap-4 px-[5px] w-[350px] sm:w-[399px]  ">
          <label className="w-full">
            <h2 className="p-[3px]">ელ.ფოსტა</h2>
            <input
              className="w-full h-[67px] rounded-[12px] border-[1px] p-[15px] "
              type="email"
              placeholder="ელ.ფოსტა"
            />
          </label>

          <label className="relative   ">
            <h2 className="p-[3px]">პაროლი</h2>
            <input
              className="w-full h-[67px] rounded-[12px] border-[1px] p-[15px]  "
              type="password"
              placeholder="Enter your password"
            />

            <div className="absolute top-[55px] right-[17px] text-[20px]">
              {/* <FaRegEye />  */}
              <FaRegEyeSlash />
            </div>
          </label>

          <label className="flex gap-2 items-center ">
            <input type="checkbox" /> <p className="">დაიმახსოვრე შესვლა</p>
          </label>

          <p className=" text-[15px]">
            დაგავისწყდა პაროლი?
            <Link href={"#"} className="text-blue-600">
              პაროლის აღდგენა
            </Link>
          </p>
          <button className=" rounded-[10px] w-full h-[56px] bg-red-600 text-white">
            შესვლა
          </button>

          <p className=" text-[15px]">
            ჯერ არ გაქვთ ანგარიში?
            <Link href={"#"} className="text-blue-600">
              შექმენით ანგარიში
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}