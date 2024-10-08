import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function SociaBtn() {
  return (
    <div className=" flex gap-2">
      <button className="px-[30px] py-[5px] border-[2px] rounded-full text-[25px]">
        <FaApple />
      </button>
      <button className="px-[30px] py-[5px] border-[2px] rounded-full text-[25px]">
        <FaFacebook className="text-blue-700" />
      </button>
      <button className="px-[30px] py-[5px] border-[2px] rounded-full text-[25px]">
        <FcGoogle />
      </button>
    </div>
  );
}
