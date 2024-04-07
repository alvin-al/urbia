import React from "react";
import Image from "next/image";
import * as styles from '@/components/styles'

const MemberCard = ({src, name, position}) => {
  return (
    <div className="">
        <Image src={src} alt={name} width={1000} className="mb-2 w-[320px]"/>
        <div className="gap-1">
            <h3 className={`${styles.display} m-0 p-0 w-fit`}>{name}</h3>
            <p className={`${styles.subheader}  m-0 p-0 w-fit text-gray-400`}>{position}</p>
        </div>
    </div>
  )
};

export default MemberCard;
