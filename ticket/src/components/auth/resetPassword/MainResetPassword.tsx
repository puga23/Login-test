"use client";
import { useForm } from "react-hook-form";
import * as val from "@/utils/validationGe";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Input = {
  password: string;
  confirmPassword: string;
};

export default function MainResetPassword() {
  const [visibility, setVisibility] = useState(false);

  const [confirmVisibility, setConfirmVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Input>();

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
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-center font-semibold text-[16px]">პაროლის აღდგენა</h1>
      <p className="w-[314px] text-center font-medium mt-[27px]">
        გთხოვთ, შეიყვანოთ ახალი პაროლი და დაადასტუროთ იგი ქვემოთ.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-[16px] mt-[30px] sm:mt-[37px] w-[295px]"
      >
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

        <button
          className="h-[45px] rounded-full bg-[#3880E1] text-white font-semibold text-[15px] mt-[5px] btn-shadow"
          type="submit"
        >
          შესვლა
        </button>
      </form>
    </div>
  );
}
