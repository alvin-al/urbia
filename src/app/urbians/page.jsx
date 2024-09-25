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
import urbiansbg from "@/../../public/images/urbiansbg.webp";

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
    link: "/",
    nameLink: "Hubungi melalui WhatsApp",
  },
  {
    title: "Follow kami di Instagram",
    desc: "Terhubung dengan kami, lihat aktivitas, dan dapatkan informasi terbaru kami di Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/urbia.studio/",
    nameLink: "@urbia.studio",
  },
  {
    title: "Langsung isi form penilaian kami",
    desc: "Dengan mengisi form penilaian dari kami, Anda membantu kami untuk mengidentifikasi kebutuhan project Anda",
    icon: FaWpforms,
    link: "/",
    nameLink: "Isi form penilaian untuk Anda disini",
  },
  {
    title: "Silakan lihat halaman profil kami di LinkedIn",
    desc: "Anda dapat terhubung dan melihat halaman profil Urbia studio",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/urbia-studio",
    nameLink: "Urbia-Studio",
  },
  {
    title: "Dapatkan Profil Perusahaan kami",
    desc: "Anda dapat melihat profil perusahaan Urbia untuk keperluan bisnis maupun kerjasama",
    icon: FaHandshake,
    link: "https://drive.google.com/file/d/1UWa9Mtk-pYpFCHvvz8uy2kAIe4XTSXHP/view?usp=drive_link",
    nameLink: "Unduh profil perusahaan Urbia ",
  },
  // {
  //   title: "Baca tulisan kami juga melalui Medium",
  //   desc: "Dukung kami untuk terus mengembangkan berbagai keterjangkauan literasi dengan membaca berbagai ulasan dan artikel terkait arsitektur oleh Urbia",
  //   icon: FaMedium,
  //   link: "/",
  //   nameLink: "@Urbia.Studio",
  // },
];

const Urbians = () => {
  return (
    <div className={`${styles.pageSize} flex w-full`}>
      <div className='bg-[#11468F] w-full'>
        <div>
          <Header title='Urbians' />
        </div>
        {/* Container hero */}
        <div
          className={`flex flex-col lg:flex-row w-full justify-between lg:items-end h-dvh xl:pb-8`}
        >
          <div className='2xl:w-1/3 my-24 xl:mt-0'>
            <h1
              className={`${styles.mainHead} ${styles.pageContainer} lg:!${styles.mainHead} text-white`}
            >
              Hello
              <br />
              We Are
              <br />
              Urbians!
            </h1>
          </div>
          <div className='2xl:w-2/3 h-[80%] lg:ml-16 object-cover flex items-end'>
            <Image
              src={urbiansbg}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className='px-24'></div>
      </div>

      <div className='flex urbians-bg mb-40'>
        <div className='text-overlay flex flex-wrap flex-col lg:flex-row items-center justify-center text-5xl text-white bg-black bg-opacity-80 w-full h-full gap-20 py-20 xl:py-36 xl:gap-28'>
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

      <div id='urbians-data' className={`mb-20 ${styles.pageContainer}`}>
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

      <div id='contact-us' className={`${styles.pageContainer} flex `}>
        <div className='flex xl:flex-col lg:mb-8 '>
          <div>
            <h1 className={`${styles.headpoints5xl} mb-4`}>
              This is how we start the party
            </h1>
            <p className=''>Feel free to ask everything to us!</p>

            <div className='flex flex-col xl:flex-row'>
              <div className='py-4 w-full xl:w-1/2 xl:pr-40'>
                <ContactForm />
              </div>

              {/* Contact Description */}
              <div className='my-12 xl:my-0 xl:w-1/2 justify-center items-center md:grid-cols-2 md:grid flex xl:flex flex-col gap-6 text-overlay xl:px-12'>
                {contactDescContent.map((content, index) => (
                  <ContactDescription
                    scription
                    title={contactDescContent[index].title}
                    icon={contactDescContent[index].icon}
                    desc={contactDescContent[index].desc}
                    nameLink={contactDescContent[index].nameLink}
                    link={contactDescContent[index].link}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.pageContainer}`}>
        <Footer className='items-end' />
      </div>
    </div>
  );
};

export default Urbians;
