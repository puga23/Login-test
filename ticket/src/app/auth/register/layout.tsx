import React from "react";

export default function layout({
  children,
  confirmemail,
}: {
  children: React.ReactNode;
  confirmemail: React.ReactNode;
}) {
  return (
    <div>
      {children}

      {confirmemail}
    </div>
  );
}
