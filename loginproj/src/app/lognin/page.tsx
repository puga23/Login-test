import React from "react";
import Login from "../../components/login/Login";
import Images from "@/components/Images";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className=" flex h-screen  ">
      <div className="w-screen  md:w-1/2 h-[90%] flex flex-col bottom-0 absolute md:static  bg-white p-3 rounded-t-[31px]">
        <div className="flex-none ">
          <Header />
        </div>
        <div className="flex-grow flex justify-center items-center ">
          <Login />
        </div>
        <div className="flex-none">
          <Footer />
        </div>
      </div>

      <Images />
    </div>
  );
}
