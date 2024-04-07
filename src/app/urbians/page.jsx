import Header from "@/components/header";
import React from "react";
import * as styles from '@/components/styles'
import Image from "next/image";
import bayu from "@/../public/images/members/bayu.webp";
import irfan from "@/../public/images/members/irfan.webp";
import yusuf from "@/../public/images/members/yusuf.webp";
import MemberCard from "@/components/memberCard";
import Footer from "@/components/footer";
import chambali from '@/../../public/images/partners-logo/chambali.svg'
import devDep from '@/../../public/images/partners-logo/dev-dep.svg'
import urbLiving from '@/../../public/images/partners-logo/urb-living.svg'
import urbiaLogo from '@/../../public/images/partners-logo/urbia.svg'
import Affordability from "@/components/affordability";


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

  const keterjangkauan = [
    {
      title: 'People',
      content: 'Urbia mengedepankan manifestasi ruang yang berfokus pada integrasi dari konteks dan kebutuhan pengguna ruang. Dalam mengolah kebutuhan desain, Urbia memandang klien sebagai kolaborator',
      number: '+365'
    },
    {
      title: 'Locations',
      content: 'Urbia mengedepankan manifestasi ruang yang berfokus pada integrasi dari konteks dan kebutuhan pengguna ruang. Dalam mengolah kebutuhan desain, Urbia memandang klien sebagai kolaborator',
      number: '+5'
    },
    {
      title: 'Project',
      content: 'Urbia mengedepankan manifestasi ruang yang berfokus pada integrasi dari konteks dan kebutuhan pengguna ruang. Dalam mengolah kebutuhan desain, Urbia memandang klien sebagai kolaborator',
      number: '+40'
    }
  ];

  const partners = [
    {
      name: 'urbiaLogo',
      src: urbiaLogo,
    },
    {
      name: 'chambali',
      src: chambali,
    },
    {
      name: 'devDep',
      src: devDep,
    },
    {
      name: 'urbLiving',
      src: urbLiving,
    }
  ]

  return (
    <div className={`${styles.pageSize} flex border`}>
        <div className="h-[90vh] flex flex-col justify-between">
          <div>
            <Header title='Urbians' />
          </div>
          <div className="w-fit ">
            <h1 className={`${styles.mainHead} ${styles.blueText}`}>
              Hello<br/>We Are<br/>Urbians!
            </h1>
          </div>
        </div>

        <div className="flex flex-col mt-48 gap-12 lg:gap-20 xl:gap-32 justify-center flex-wrap md:justify-between md:flex-nowrap md:flex-row pb-32 xl:px-24 lg:pb-64 lg:px-12">
          {members.map((member, index) => (
            <MemberCard key={index} name={members[index].name} src={members[index].src} position={members[index].position} />
          ))
          }
        </div>

        <div className="flex urbians-bg mb-40 rounded-md">
          <div className="text-overlay flex flex-wrap items-center justify-center text-5xl text-white bg-black bg-opacity-80 w-full h-full gap-20 py-20 rounded-md xl:py-52 xl:gap-28">
            {
              partners.map((partner, index) => (
                <Image src={partners[index].src} width={200} height={100} alt={partners[index].name} key={index}/>
              ))
            }
          </div>
        </div>

        <div id="urbians-data" className="mb-20">
          <div className="border-t border-black pt-8 pb-24 flex gap-4 flex-col">
            <h1 className={`${styles.headpoints5xl}`}>A team made of experts</h1>
            <p className="md:w-1/2">Urbia mengedepankan manifestasi ruang yang berfokus pada integrasi dari konteks dan kebutuhan pengguna ruang.</p>
          </div>
          <div>
            {keterjangkauan.map((content, index) => (
              <Affordability title={keterjangkauan[index].title} content={keterjangkauan[index].content} number={keterjangkauan[index].number} key={index}/>
            ))
            }
          </div>
          <div>

          </div>
        </div>

        <Footer className='items-end' />
    </div>
  );
};

export default Urbians;
