"use client";

import Link from "next/link";
import SociaBtn from "../SociaBtn";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import * as val from "@/utils/validationGe";
type Input = {
  email: string;
  checkbox: boolean;
};

export default function MainRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const route = useRouter();

  function onSubmit(data: Input) {
    console.log(data);
    route.push("/auth/confirmEmail");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-semibold text-[16px]">რეგისტრაცია</h1>
      <div className=" flex justify-center mt-[50px]">
        <SociaBtn />
      </div>
      <div className="flex items-center gap-2 w-[90%] sm:w-[70%] justify-center mt-[30px] sm:mt-[50px] ">
        <hr className="w-[30%] border-1 border-black" />
        <span>ან გააგრძელე</span>{" "}
        <hr className="w-[30%] border-1 border-black" />
      </div>
      <form
        className=" flex flex-col gap-[16px] mt-[30px] sm:mt-[37px] w-[295px] "
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

          <h2 className="text-[14px] font-medium ml-[8px] opacity-70">
            ვეთანხმები
            <Link className="text-[#007AFF] underline" href={"#"}>
              წესებს / პირობებს
            </Link>
            და
            <Link className="text-[#007AFF] underline" href={"#"}>
              კონფიდენციალურობის პოლიტიკას{" "}
            </Link>
          </h2>
        </label>
        <button
          className="h-[45px] rounded-full bg-[#3880E1] text-white font-semibold text-[15px] mt-[20px] btn-shadow"
          type="submit"
        >
          ელ.ფოსტის დადასტურება
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
