import React from "react";
import Link from "next/link";
import * as styles from "@/components/styles";

const Navbar = () => {
  return (
    <nav className={`${styles.displayPhone}`}>
      <ul className='flex gap-6 h-full'>
        <li className='hover:border-b-2 hover:border-black border-b-2 border-transparent'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:border-b-2 hover:border-black border-b-2 border-transparent'>
          <Link href='/projects'>Our Projects</Link>
        </li>
        <li className='hover:border-b-2 hover:border-black border-b-2 border-transparent'>
          <Link href='/services'>Service</Link>
        </li>
        <li className='hover:border-b-2 hover:border-black border-b-2 border-transparent'>
          <Link href='/build-the-community'>Build The Community</Link>
        </li>
        <li className='hover:border-b-2 hover:border-black border-b-2 border-transparent'>
          <Link href='/urbians'>We Are Urbians!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;