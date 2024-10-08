import React from "react";
import Image from "next/image";
import * as styles from "@/components/styles";

const MemberCard = ({ src, name, position }) => {
  return (
    <div className=''>
      <div className='xl:w-[25vw] relative rounded-lg'>
        <div className='relative overflow-hidden h-full mb-2'>
          <Image
            src={src}
            alt={name}
            width={1000}
            className='hover:-translate-y-32 transition-transform duration-300'
          />
          <div className='absolute top-0 left-0 w-full h-full flex items-center bg-white opacity-0 rounded-lg hover:opacity-100 hover:bg-opacity-85 transition-opacity transition ease-in-out duration-300'>
            <p className='text-black text-sm px-10'>
              Yusuf tertarik dalam mengamati dan berkecimpung pada pelestarian
              dan pemanfaatan bangunan heritage hingga saat ini. Studi yang
              dilakukan Yusuf menemukan bahwa pemanfaatan bangunan cagar budaya
              dapat menghasilkan nilai komersil dan pelestarian secara
              bersamaan. Konsentrasi Yusuf pada urban governance, menurutnya
              dapat memberikan dampak yang baik pada pelestarian dan
              perkembangan arsitektur dan kota.
            </p>
          </div>
        </div>
      </div>
      <div className='gap-1'>
        <h3 className={`${styles.display} m-0 p-0 w-fit text-white`}>{name}</h3>
        <p className={`${styles.subheader}  m-0 p-0 w-fit text-white`}>
          {position}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
