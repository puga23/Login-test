"use client";
import { useForm } from "react-hook-form";
import * as val from "@/utils/validationGe";
import Link from "next/link";
import React, { useState } from "react";
import {} from "react-icons";
import { GoArrowLeft } from "react-icons/go";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export default function Login() {
  const [visibility, setVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function onSubmit(data: any) {
    console.log(data);
  }

  function funcEye() {
    setVisibility(!visibility);
    console.log("test");
  }

  return (
    <div className="   bg-white text-[16px]">
      <div className="flex justify-center items-center   flex-col gap-3 ">
        <h1>შესვლა</h1>

        <p>შედით თქვენს ანგარიშზე</p>

        <form
          className="flex flex-col justify-centers gap-4 px-[5px] w-[350px] sm:w-[399px]  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="w-full">
            <h2 className="p-[3px]">ელ.ფოსტა</h2>
            <input
              className="w-full h-[67px] rounded-[12px] border-[1px] p-[15px] "
              type="email"
              placeholder="ელ.ფოსტა"
              {...register("email", {
                required: val.requiredMsg,
                maxLength: {
                  value: 100,
                  message: val.emailMaxLengthMsg,
                },
                pattern: {
                  value: val.emailPattern,
                  message: val.emailErrorMsg,
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>

          <label className="relative   ">
            <h2 className="p-[3px]">პაროლი</h2>
            <input
              className="w-full h-[67px] rounded-[12px] border-[1px] p-[15px]  "
              type={visibility ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password", {
                required: val.requiredMsg,
                maxLength: {
                  value: 20,
                  message: val.passwordMaxLengthMsg,
                },
                minLength: {
                  value: 8,
                  message: val.passwordMinLengthMsg,
                },
                pattern: {
                  value: val.passwordPattern,
                  message: val.passwordMsg,
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}

            <div className="absolute top-[55px] right-[17px] text-[20px]">
              {/* <FaRegEye />  */}

              {visibility ? (
                <FaRegEye onClick={funcEye} />
              ) : (
                <FaRegEyeSlash onClick={funcEye} />
              )}
            </div>
          </label>

          <label className="flex gap-2 items-center ">
            <input
              className="cursor-pointer"
              {...register("saveLogin")}
              type="checkbox"
            />{" "}
            <p className="">დაიმახსოვრე შესვლა</p>
          </label>

          <p className=" text-[15px]">
            დაგავიწყდა პაროლი?
            <Link href={"#"} className="text-blue-600">
              პაროლის აღდგენა
            </Link>
          </p>
          <button
            type="submit"
            className=" rounded-[10px] w-full h-[56px] bg-red-600 text-white"
          >
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
