import Image from "next/image";
import React from "react";

const SiteIcon = () => {
  return (
    <Image
      src={"/electric-white.svg"}
      alt="Electric Logo"
      height={100}
      width={100}
    ></Image>
  );
};

export default SiteIcon;
