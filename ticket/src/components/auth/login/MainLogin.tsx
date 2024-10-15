"use client";
import Link from "next/link";
import SociaBtn from "../SociaBtn";
import { useForm } from "react-hook-form";
import * as val from "@/utils/validationGe";

type Login = {
  email: string;
  password: string | number;
  checkbox: boolean;
};

export default function MainLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  function onSubmit(data: Login) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-semibold text-[16px]">შესვლა</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-[16px] mt-[30px] sm:mt-[37px] w-[295px]"
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
          <h2 className="text-[14px] font-medium ml-[8px]">პაროლი</h2>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="შეიყვანეთ თქვენი პაროლი"
            type="password"
            {...register("password", {
              required: val.requiredMsg,
              pattern: {
                value: val.passwordPattern,
                message: val.passwordMsg,
              },
              maxLength: {
                value: 254,
                message: val.passwordMaxLengthMsg,
              },
              minLength: {
                value: 8,
                message: val.passwordMinLengthMsg,
              },
            })}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
        </label>

        <label className="flex mt-[10px] ">
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

          <h2 className="text-[14px] font-medium ml-[8px] ">
            დაიმახსოვრე შესვლა
          </h2>
        </label>
        <button
          className="h-[45px] rounded-full bg-[#3880E1] text-white font-semibold text-[15px] mt-[20px] btn-shadow"
          type="submit"
        >
          შესვლა
        </button>
      </form>
      <div className="mt-[25px]">
        <Link href={"#"} className="font-medium text-[13px] underline ">
          დაგავიწყდა პაროლი?
        </Link>
      </div>
      <div className="flex items-center gap-2 w-[90%] sm:w-[70%] justify-center mt-[30px] sm:mt-[50px] ">
        <hr className="w-[30%] border-1 border-black" />
        <span>ან გააგრძელე</span>{" "}
        <hr className="w-[30%] border-1 border-black" />
      </div>
      <div className=" flex justify-center mt-[50px]">
        <SociaBtn />
      </div>
      <div className="text-[13px] font-medium mt-[25px] ">
        <span className="text-[#79747E]">ჯერ არ გაქვთ ანგარიში? </span>
        <Link className="text-[#5A50D3]" href={"#"}>
          შექმენით აქ
        </Link>
      </div>
    </div>
  );
}
