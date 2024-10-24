import React from "react";

export default function layout({
  children,
  confirmEmail,
}: {
  children: React.ReactNode;
  confirmEmail: React.ReactNode;
}) {
  return (
    <div>
      {children}

      {confirmEmail}
    </div>
  );
}
