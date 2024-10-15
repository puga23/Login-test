import Link from "next/link";
import React from "react";

export default function MainForgotPassword() {
  return (
    <div className="flex flex-col items-center justify-center mb-[100px]   ">
      <h1 className="text-center font-semibold text-[16px]">პაროლის აღდგენა</h1>

      <p className=" text-center font-medium text-[16px]   w-[326px] mt-[28px] ">
        შეიყვანეთ თქვენი ელ.ფოსტა ქვემოთ და გამოგიგზავნით ბმულს პაროლის
        აღდგენისთვის.
      </p>

      <form className=" flex flex-col gap-[16px] mt-[30px] sm:mt-[37px] w-[295px]  ">
        <label>
          <h2 className="text-[14px] font-medium ml-[8px]">ელ.ფოსტა</h2>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="შეიყვანეთ თქვენი ელ.ფოსტა"
            type="email"
          />
        </label>
        <button
          className="h-[45px] rounded-full bg-[#3880E1] text-white font-semibold text-[15px] mt-[20px] btn-shadow"
          type="submit"
        >
          შესვლა
        </button>
      </form>

      <Link
        href={"#"}
        className="text-[#004AA9] text-center h-[86px] w-[326px] mt-[28px]"
      >
        თუ ელ.ფოსტა არ მიგიღიათ, გთხოვთ, შეამოწმეთ სპამის საქაღალდე ან სცადეთ
        ხელახლა.
      </Link>
    </div>
  );
}
