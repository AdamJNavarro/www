import Header from "./Header";
import React from "react";

export default function Page({ children }: any) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto p-5">{children}</div>
    </div>
  );
}
