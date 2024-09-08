import React from "react";
import Link from "next/link";
import * as styles from "@/components/styles";

const NavbarSidebar = () => {
  return (
    <nav className={`text-3xl font-semibold gap-4`}>
      <ul className='gap-6 flex flex-col '>
        <li
          className={`hover:border-b-2 hover:border-[#da1212] hover:text-[#da1212] border-b-2 border-transparent text-white w-max`}
        >
          <Link href='/'>Home</Link>
        </li>
        <li
          className={`hover:border-b-2 hover:border-[#da1212] hover:text-[#da1212] border-b-2 border-transparent text-white w-max`}
        >
          <Link href='/projects'>Our Projects</Link>
        </li>
        <li
          className={`hover:border-b-2 hover:border-[#da1212] hover:text-[#da1212] border-b-2 border-transparent text-white w-max`}
        >
          <Link href='/services'>Service We Provide</Link>
        </li>
        <li
          className={`hover:border-b-2 hover:border-[#da1212] hover:text-[#da1212] border-b-2 border-transparent text-white w-max`}
        >
          <Link href='/build-the-community'>Build The Community</Link>
        </li>
        <li
          className={`hover:border-b-2 hover:border-[#da1212] hover:text-[#da1212] border-b-2 border-transparent text-white w-max`}
        >
          <Link href='/urbians'>We Are Urbians!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSidebar;
