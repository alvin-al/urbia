import React from "react";
import * as styles from "@/components/styles";


const ContactDescription = ({ title, icon: Icon, desc }) => {
  return (
    <div className='flex gap-5'>
      <Icon className='w-12 h-12' />
      <div className='w-3/4'>
        <h2 className={`${styles.display}`}>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ContactDescription;
