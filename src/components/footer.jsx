import React from "react";
import Image from "next/image";
import logo from "@/../public/images/logo.svg";
import logoWhite from "@/../public/images/logo-white.svg";

const Footer = ({ color }) => {
  return (
    <div className='flex py-2 justify-between max-w-fit gap-2'>
      <Image
        src={color === "white" ? logoWhite : logo}
        alt='logo'
        sizes='(max-width : 375px) 300vw'
      />
      <p
        className={`text-xs font-semibold self-end ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        Spatial Manifesto
      </p>
    </div>
  );
};

export default Footer;
