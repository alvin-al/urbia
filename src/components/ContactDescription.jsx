import React from "react";
import * as styles from "@/components/styles";
import Link from "next/link";

const ContactDescription = ({ title, icon: Icon, desc, nameLink, link }) => {
  return (
    <div className='flex w-full h-full xl:gap-2 2xl:gap-0'>
      <div className='w-1/6'>
        <Icon className='w-14 h-14' />
      </div>
      <div className='w-5/6'>
        <h2 className={`${styles.display}`}>{title}</h2>
        <p>{desc}</p>
        <Link href={link} className="mt-2">
            <button className="text-[#11468F] text-md font-semibold">{nameLink}</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDescription;
