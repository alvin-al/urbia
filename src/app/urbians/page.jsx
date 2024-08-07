import Header from "@/components/header";
import React from "react";
import * as styles from "@/components/styles";
import Image from "next/image";
import bayu from "@/../public/images/members/bayu.webp";
import irfan from "@/../public/images/members/irfan.webp";
import yusuf from "@/../public/images/members/yusuf.webp";
import MemberCard from "@/components/memberCard";
import Footer from "@/components/footer";
import chambali from "@/../../public/images/partners-logo/chambali.svg";
import devDep from "@/../../public/images/partners-logo/dev-dep.svg";
import urbLiving from "@/../../public/images/partners-logo/urb-living.svg";
import urbiaLogo from "@/../../public/images/partners-logo/urbia.svg";
import Affordability from "@/components/affordability";
import {
  FaInstagram,
  FaWhatsapp,
  FaWpforms,
  FaLinkedinIn,
  FaHandshake,
  FaMedium,
} from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";
import ContactDescription from "@/components/ContactDescription";

const Urbians = () => {
  const members = [
    {
      name: "Yusuf Sy",
      src: yusuf,
      position: "ARCHITECT",
    },
    {
      name: "Irfan Zaky",
      src: irfan,
      position: "LEAD  ARCHITECT",
    },
    {
      name: "Bayu Aji",
      src: bayu,
      position: "LEAD  ARCHITECT",
    },
  ];
  const keterjangkauan = [
    {
      title: "People",
      content:
        "Memulai dari tahun 2020, Urbia telah berkontribusi dengan klien, vendor, kontraktor, studio, workshop, partner, dan pihak lain yang bersama-sama mewujudkan berbagai project, ide dan gagasan, bisnis, hingga project terbangun. Berbagai jenis klien dengan berbagai kebutuhannya telah terakomodasi.",
      number: "+47",
    },
    {
      title: "Locations",
      content:
        "Urbia telah mengerjakan project di berbagai lokasi. Masing-masing memiliki konteks dan masalah yang berbeda. Urbia memperhatikan kondisi lokasi dimulai dari mikro site hingga makro kawasan/daerah dimana lokasi project berada.",
      number: "+16",
    },
    {
      title: "Project",
      content:
        "Urbia telah mengerjakan berbagai jenis project dan pekerjaan yang berkaitan dengan keruangan hingga properti. Tentunya adanya klien yang sangat partisipatif juga merupakan aspek yang ikut mendorong Urbia untuk terus meningkatkan kualitas desain.",
      number: "+28",
    },
  ];
  const partners = [
    {
      name: "urbiaLogo",
      src: urbiaLogo,
    },
    {
      name: "chambali",
      src: chambali,
    },
    {
      name: "devDep",
      src: devDep,
    },
    {
      name: "urbLiving",
      src: urbLiving,
    },
  ];
  const contactDescContent = [
    {
      title: "Hubungi kami langsung melalui nomor WA",
      desc: "Kami akan segera membalas pesan Anda untuk diskusi maupun konsultasi lebih lanjut",
      icon: FaWhatsapp,
    },
    {
      title: "Follow kami di Instagram",
      desc: "Terhubung dengan kami, lihat aktivitas, dan dapatkan informasi terbaru kami di Instagram",
      icon: FaInstagram,
    },
    {
      title: "Langsung isi form penilaian kami",
      desc: "Dengan mengisi form penilaian dari kami, Anda membantu kami untuk mengidentifikasi kebutuhan project Anda",
      icon: FaWpforms,
    },
    {
      title: "Silakan lihat halaman profil kami di LinkedIn",
      desc: "Anda dapat terhubung dan melihat halaman profil Urbia studio",
      icon: FaLinkedinIn,
    },
    {
      title: "Dapatkan Profil Perusahaan kami",
      desc: "Anda dapat melihat profil perusahaan Urbia untuk keperluan bisnis maupun kerjasama",
      icon: FaHandshake,
    },
    {
      title: "Baca tulisan kami juga melalui Medium",
      desc: "Dukung kami untuk terus mengembangkan berbagai keterjangkauan literasi dengan membaca berbagai ulasan dan artikel terkait arsitektur oleh Urbia",
      icon: FaMedium,
    },
  ];

  return (
    <div className={`${styles.pageSize} flex border`}>
      <div>
        <Header title='Urbians' />
      </div>

      <div className='pt-[50vh] flex flex-col justify-between md:px-12'>
        <div className='w-fit '>
          <h1 className={`${styles.mainHead} ${styles.blueText}`}>
            Hello
            <br />
            We Are
            <br />
            Urbians!
          </h1>
        </div>
      </div>

      <div className='flex flex-col mt-48 gap-12 lg:gap-20 xl:gap-16 justify-center flex-wrap md:justify-between md:flex-nowrap md:flex-row pb-32 xl:px-24 lg:pb-64 lg:px-12'>
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={members[index].name}
            src={members[index].src}
            position={members[index].position}
          />
        ))}
      </div>

      <div className='flex urbians-bg mb-40 rounded-md'>
        <div className='text-overlay flex flex-wrap items-center justify-center text-5xl text-white bg-black bg-opacity-80 w-full h-full gap-20 py-20 rounded-md xl:py-52 xl:gap-28'>
          {partners.map((partner, index) => (
            <Image
              src={partners[index].src}
              width={200}
              height={100}
              alt={partners[index].name}
              key={index}
            />
          ))}
        </div>
      </div>

      <div id='urbians-data' className='mb-20  md:px-12'>
        <div className='border-t border-black pt-8 pb-24 flex gap-4 flex-col'>
          <h1 className={`${styles.headpoints5xl}`}>A team made of experts</h1>
          <p className='md:w-1/2'>
            Urbia tidak bekerja sendiri, klien, vendor, kontraktor, studio,
            workshop, partner, dan pihak lain juga berpartisipasi dalam
            keberhasilan project. Tentu saja, Urbia memiliki partner dan relasi
            dengan latar belakang profesional dan terpercaya. Keterbukaan
            menjadi kunci dalam proses Urbia mengakomodasi kebutuhan klien.{" "}
          </p>
        </div>
        <div>
          {keterjangkauan.map((content, index) => (
            <Affordability
              title={keterjangkauan[index].title}
              content={keterjangkauan[index].content}
              number={keterjangkauan[index].number}
              key={index}
            />
          ))}
        </div>
        <div></div>
      </div>

      <div id='contact-us' className=' md:px-12'>
        <h1 className={`${styles.headpoints5xl} mb-4`}>
          This is how we start the party
        </h1>
        <p className='md:w-1/2'>Feel free to ask everything to us!</p>
        <div className='py-4 flex gap-12 mb-8'>
          <div className='flex flex-col gap-4 md:w-1/2 pr-32'>
            <ContactForm />
          </div>
          <div className='h-fit md:w-1/2 flex gap-6 flex-col'>
            {contactDescContent.map((content, index) => (
              <ContactDescription
                title={contactDescContent[index].title}
                icon={contactDescContent[index].icon}
                desc={contactDescContent[index].desc}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer className='items-end' />
    </div>
  );
};

export default Urbians;
