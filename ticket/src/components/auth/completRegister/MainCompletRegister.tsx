"use client";

import Link from "next/link";
import SociaBtn from "../SociaBtn";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as val from "@/utils/validationGe";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Input = {
  email: string;
  checkbox: boolean;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

export default function MainCompletRegister() {
  const [visibility, setVisibility] = useState(false);

  const [confirmVisibility, setConfirmVisibility] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const route = useRouter();

  function onSubmit(data: Input) {
    console.log(data);
  }
  function funcEye() {
    setVisibility(!visibility);
  }

  function confirmFuncEye() {
    setConfirmVisibility(!confirmVisibility);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-semibold text-[16px]">რეგისტრაცია</h1>

      <form
        className=" flex flex-col gap-[16px] mt-[30px] sm:mt-[37px] w-[300px] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <h2 className="text-[14px] font-medium ml-[8px]">ელ.ფოსტა</h2>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="შეიყვანეთ თქვენი ელ.ფოსტა"
            type="email"
            {...register("email", {
              required: val.requiredMsg,
              pattern: {
                value: val.emailPattern,
                message: val.emailErrorMsg,
              },
              maxLength: {
                value: 254,
                message: val.emailMaxLengthMsg,
              },
            })}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </label>
        <label>
          <h2 className="text-[14px] font-medium ml-[8px]">სახელი</h2>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="შეიყვანეთ თქვენი სახელი"
            type="text"
            {...register("firstName", {
              required: val.requiredMsg,

              maxLength: {
                value: 254,
                message: val.firstNameMaxLengthMsg,
              },
            })}
          />
          {errors.firstName && (
            <span className="text-red-600">{errors.firstName.message}</span>
          )}
        </label>
        <label>
          <h2 className="text-[14px] font-medium ml-[8px]">გვარი</h2>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="შეიყვანეთ თქვენი გვარი"
            type="text"
            {...register("lastName", {
              required: val.requiredMsg,

              maxLength: {
                value: 254,
                message: val.firstNameMaxLengthMsg,
              },
            })}
          />
          {errors.lastName && (
            <span className="text-red-600">{errors.lastName.message}</span>
          )}
        </label>
        <label className="relative">
          <h2 className="text-[14px] font-medium ml-[8px]">ახალი პაროლი</h2>
          <input
            {...register("password", {
              required: val.requiredMsg,
              pattern: {
                value: val.passwordPattern,
                message: val.passwordMsg,
              },
              maxLength: {
                value: 20,
                message: val.passwordMaxLengthMsg,
              },

              minLength: {
                value: 8,
                message: val.passwordMinLengthMsg,
              },
            })}
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="შეიყვანეთ თქვენი ახალი პაროლი"
            type={visibility ? "text" : "password"}
          />
          <div className="absolute top-[42px] right-[11px] text-[20px]">
            {visibility ? (
              <FaRegEye onClick={funcEye} />
            ) : (
              <FaRegEyeSlash onClick={funcEye} />
            )}
          </div>
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </label>
        <label className="relative">
          <h2 className="text-[14px] font-medium ml-[8px]">გაიმეორეთ პაროლი</h2>
          <input
            {...register("confirmPassword", {
              required: val.requiredMsg,
            })}
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="გაიმეორეთ პაროლი"
            type={confirmVisibility ? "text" : "password"}
          />
          <div className="absolute top-[42px] right-[11px] text-[20px]">
            {confirmVisibility ? (
              <FaRegEye onClick={confirmFuncEye} />
            ) : (
              <FaRegEyeSlash onClick={confirmFuncEye} />
            )}
          </div>
          {errors.confirmPassword && (
            <span className="text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>

        <label className="flex mt-[10px] items-center ">
          <input
            className="w-[20px] h-[20px] rounded-[6px]"
            type="checkbox"
            {...register("checkbox", {
              required: val.requiredMsg,
            })}
          />
          {errors.checkbox && (
            <span className="text-red-600 ">{errors.checkbox.message}</span>
          )}

          <p className="text-[13px] font-medium ml-[8px] opacity-70">
            ვეთანხმები
            <Link className="text-[#007AFF] underline mx-1" href={"#"}>
              წესებს / პირობებს
            </Link>
            და
            <br />
            <Link className="text-[#007AFF] underline" href={"#"}>
              კონფიდენციალურობის პოლიტიკას
            </Link>
          </p>
        </label>
        <button
          className="h-[45px] rounded-full bg-[#3880E1] text-white font-semibold text-[15px] mt-[20px] btn-shadow"
          type="submit"
        >
          რეგისტრაცია
        </button>
      </form>
      <div className="text-[13px] font-medium mt-[25px] ">
        <span className="text-[#79747E] underline ">უკვე გაქვთ ანგარიში? </span>
        <Link className="text-[#007AFF] underline " href={"#"}>
          შედით აქ
        </Link>
      </div>
    </div>
  );
}
