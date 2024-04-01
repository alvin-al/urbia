import Header from "@/components/header";
import React from "react";
import * as styles from '@/components/styles'
import Image from "next/image";
import bayu from "@/../public/images/members/bayu.webp";
import irfan from "@/../public/images/members/irfan.webp";
import yusuf from "@/../public/images/members/yusuf.webp";
import MemberCard from "@/components/memberCard";
import Footer from "@/components/footer";


const Urbians = () => {
  const members = [
    {
      name: 'Yusuf Sy',
      src : yusuf,
      position : 'ARCHITECT'
    },
    {
      name: 'Irfan Zaky',
      src : irfan,
      position : 'LEAD  ARCHITECT'
    },
    {
      name: 'Bayu Aji',
      src : bayu,
      position : 'LEAD  ARCHITECT'
    }];


  return (
    <div className={`${styles.pageSize} flex border`}>
        <div className="h-[98vh] flex flex-col justify-between">
          <div>
            <Header title='Urbians' />
          </div>
          <div className="w-fit ">
            <h1 className={`${styles.mainHead} ${styles.blueText}`}>
              Hello<br/>We Are<br/>Urbians!
            </h1>
          </div>
        </div>

        <div className="flex flex-col mt-48 gap-12 text-center md:justify-between md:flex-row pb-64">
          {members.map((member, index) => (
            <MemberCard key={index} name={members[index].name} src={members[index].src} position={members[index].position} />
          ))
          }
        </div>

        <Footer className='items-end' />
    </div>
  );
};

export default Urbians;
