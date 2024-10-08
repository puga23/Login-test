import Footer from "@/components/auth/Footer";
import Header from "@/components/auth/Header";
import Images from "@/components/Images";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen">
      <div className="flex flex-col min-h-[100vh] w-1/2">
        <header className="flex-none mt-5">
          <Header />
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="flex-none mb-5">
          <Footer />
        </footer>
      </div>
      <div className="w-1/2 ">
        {" "}
        <Images />
      </div>
    </div>
  );
}
