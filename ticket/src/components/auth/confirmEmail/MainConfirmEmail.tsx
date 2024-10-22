"use client";
import { Span } from "next/dist/trace";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as val from "@/utils/validationGe";
type Input = {
  confirmEmail: string;
};

export default function MainConfirmEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  function onSubmit(data: Input) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center mb-[100px] h-full  ">
      <h1 className="text-center font-semibold text-[16px]">
        კოდის დადასტურება
      </h1>

      <p className=" text-center font-medium text-[16px]   w-[326px] mt-[28px] ">
        შეიყვანეთ ელ.ფოსტაზე მიღებული კოდი
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-[16px] mt-[30px] sm:mt-[37px] w-[295px]  "
      >
        <label>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="დამადასტურებელი კოდი"
            type="text"
            {...register("confirmEmail", {
              required: val.requiredMsg,
              pattern: {
                value: val.emailPattern,
                message: val.emailErrorMsg,
              },
              maxLength: {
                value: 254,
                message: val.textMaxLengthMsg,
              },
            })}
          />
          {errors.confirmEmail && (
            <span className="text-red-600">{errors.confirmEmail.message}</span>
          )}
        </label>
        <button
          className="h-[45px] rounded-full bg-[#3880E1] text-white font-semibold text-[15px] mt-[20px] btn-shadow"
          type="submit"
        >
          კოდის დადასტურება
        </button>
      </form>
    </div>
  );
}
