import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex  justify-center flex-col gap-3 text-[15px]">
      <ul className="flex  justify-center flex-wrap sm:gap-4  gap-2   ">
        <li>
          <Link className="underline" href={""}>
            წესები და პირობები
          </Link>
        </li>
        <li>
          <Link className="underline" href={""}>
            მონაცემთა დაცვა
          </Link>
        </li>
        <li>
          <Link className="underline" href={""}>
            იმპრეზიუმი
          </Link>
        </li>
      </ul>
      <span className=" text-center ">
        © 2024 LLC Vaperi. Alle Rechte vorbehalten.
      </span>
    </div>
  );
}
