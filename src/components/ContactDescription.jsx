import React from "react";
import * as styles from "@/components/styles";
import Link from "next/link";

const ContactDescription = ({ title, icon: Icon, desc, nameLink, link }) => {
  return (
    <div className='flex h-full w-full gap-4'>
      <div className='w-fit'>
        <Icon className='w-12 h-12' />
      </div>
      <div className='w-auto'>
        <h2 className={`${styles.display}`}>{title}</h2>
        <p>{desc}</p>
        <Link
          href={link}
          className={`mt-2 text-[#11468F] hover:text-[#DA1212]`}
        >
          <button className={`text-left text-md font-semibold`}>{nameLink}</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDescription;
