import SociaBtn from "../SociaBtn";

export default function MainRegister() {
  return (
    <div>
      <h1 className="text-center font-semibold text-[16px]">რეგისტრაცია</h1>
      <div className=" flex justify-center mt-[50px]">
        <SociaBtn />
      </div>
      <div className="flex items-center gap-2 justify-center mt-[50px] ">
        <hr className="w-[20%] border-1 border-black" />
        <span>ან გააგრძელე</span>{" "}
        <hr className="w-[20%] border-1 border-black" />
      </div>
      <form action=""></form>
    </div>
  );
}
