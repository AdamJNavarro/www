import Header from "./Header";
import React from "react";

export default function Page({ children }: any) {
  return (
    <>
      <Header />
      <div className="px-4 py-24 md:py-32 lg:px-0">{children}</div>
    </>
  );
}
