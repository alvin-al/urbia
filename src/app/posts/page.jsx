import Header from "@/components/header";
import React from "react";
import * as styles from '@/components/styles'
import Image from "next/image";
import giorno from "@/../public/images/Giorno.png"

const posts = () => {
  return (
    <div className={`${styles.pageSize} flex`}>
        <Header />
        <Image src={giorno} className="relative w-full md:h-[70vh] object-cover rounded-b-[36px]" alt="giorno"/>
        <div className="mt-4">
            <h1 className={`${styles.headpoints5xl} uppercase`}>
                Giorno Pizzeria
            </h1>
            <p className={`${styles.subheader} uppercase text-gray-400`}>Yogyakarta</p>
        </div>
    </div>
  );
};

export default posts;
