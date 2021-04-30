import * as React from "react";

import Link from "next/link";

const SmartLink = ({ href, children }: any) => {
  const isInternal = /^\/(?!\/)/.test(href);

  if (isInternal) {
    return <Link href={href}>{children}</Link>;
  }

  return <a href={href}>{children}</a>;
};

export default SmartLink;
