import Image from "next/image";
import React from "react";

const Logo = ({
  height,
  width,
  fill,
}: {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
}) => {
  return (
    <Image
      width={width}
      height={height}
      fill={fill}
      alt="Elektrik logo"
      src={"/electric-logo.svg"}
    />
  );
};

export default Logo;
