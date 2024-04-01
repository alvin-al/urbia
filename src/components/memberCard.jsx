import React from "react";
import Image from "next/image";
import * as styles from '@/components/styles'

const MemberCard = ({src, name, position}) => {
  return (
    <div className="px-8 md:px-0">
        <Image src={src} alt={name} width={500} className="mb-2"/>
        <div className="gap-1">
            <h3 className={`${styles.display} m-0 p-0 w-fit`}>{name}</h3>
            <p className={`${styles.subheader}  m-0 p-0 w-fit text-gray-400`}>{position}</p>
        </div>
    </div>
  )
};

export default MemberCard;
