import React from "react";

export default function MainResetPassword() {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-center font-semibold text-[16px]">პაროლის აღდგენა</h1>
      <p className="w-[314px] text-center font-medium mt-[27px]">
        გთხოვთ, შეიყვანოთ ახალი პაროლი და დაადასტუროთ იგი ქვემოთ.
      </p>
      <form className=" flex flex-col gap-[16px] mt-[30px] sm:mt-[37px] w-[295px]">
        <label>
          <h2 className="text-[14px] font-medium ml-[8px]">ახალი პაროლი</h2>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="შეიყვანეთ თქვენი ახალი პაროლი"
            type="email"
          />
        </label>
        <label>
          <h2 className="text-[14px] font-medium ml-[8px]">გაიმეორეთ პაროლი</h2>
          <input
            className="h-[45px] w-full border-[1px] rounded-[12px] input-shadow pl-[18px] mt-[8px] placeholder:text-[14px] "
            placeholder="გაიმეორეთ პაროლი"
            type="password"
          />
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
