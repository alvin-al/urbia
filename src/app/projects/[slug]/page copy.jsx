"use client";
import Header from "@/components/header";
import * as styles from "@/components/styles";
import Image from "next/image";
import giorno from "@/../public/images/Giorno.png";
import Footer from "@/components/footer";
import client from "../../../lib/contentful";
import { useEffect, useState } from "react";

const contentInside = [
  {
    projectTitle: "Giorno Pizzeria",
    projectLocation: "Yogyakarta",
    projectClient: "Person",
    projectArea: "20m²",
    projectBuildingArea: "14m²",
    projectIntroduction:
      "Ndalem Kulon merupakan project hunian yang didesain oleh Urbia Studio. Klien memiliki keinginan dan catatan di awal proses konsultasi dimulai. Lokasi yang terletak di area yang cukup jauh dari perkotaan, memiliki lingkungan yang masih asri dan persawahan disekitarnya. Lokasi site berada di lahan yang sama dengan bangunan eksisting berupa rumah joglo limasan yang sudah lama berada di site. Klien memiliki pandangan bahwa rumah yang akan didesain baru harus menyesuaikan dengan bangunan eksisting yang sudah secara arsitektur. Hal ini menjadi menarik karena tidak banyak klien yang memperhatikan konteks dan latar belakang site. Hal ini menjadi nilai yang sangat menarik bagi Urbia.",
    projectContextApproach:
      "Project Ndalem Kulon dimulai dari konteks yang unik yaitu berada di lahan yang sama dengan bangunan eksisting yang sudah. Rumah eksisting tersebut berupa bangunan joglo limasan yang digunakan oleh keluarga besar dari klien untuk berkumpul pada acara-acara keluarga. Rumah tersebut memiliki nilai yang besar dan fundamental bagi keluarga klien. Sehingga dalam proses penyesuaian konteks, desain baru dengan bangunan eksisting sangat dijaga agar tidak terlalu kontras. Selain itu klien memiliki persediaan kayu yang melimpah dan direncanakan akan digunakan sebagai bahan material utama rangka atap. Klien juga memiliki beberapa set kusen pintu dan jendela bekas berbahan kayu jati. Bahan kusen tersebut telah dimiliki oleh keluarga klien bekas dari rumah yang lama. Keinginan klien untuk menggunakan kembali material tersebut juga sebagai upaya adaptasi klien dikemudian hari dengan rumah yang baru.",
    projectArchitecturalApproach: (
      <>
        Kebutuhan ruang desain disesuaikan dengan kebutuhan jumlah anggota
        keluarga klien. Program ruang disusun berdasarkan kebutuhan kegiatan
        dari keluarga klien. Desain perencanaan terdiri dari teras, garasi,
        ruang tamu, ruang keluarga, 3 kamar tidur dengan 1 kamar tidur master
        bedroom dengan kamar mandi dalam, dapur, dan juga musholla. Dari  jumlah
        luasan lahan, cukup diperlukan bangunan dengan satu lantai. Massa
        bangunan berada di Tengah site yang ditentukan dengan perimeter lahan di
        tiap-tiap sisi bangunan. Urbia menekankan perimeter sebagai akses dan
        desain yang maksimal dari sirkulasi udara maupun udara. <br></br>
        <br></br> Massa bangunan dirancang dengan mengikuti aksis dari rumah
        eksisting. Sehingga pada rancangan memiliki pintu akses khusus di Tengah
        massa bangunan untuk sirkulasi yang sesuai dengan lingkungan.
        Konfigurasi ruang dan akses tersebut disesuaikan agar privasi pada
        masing-masing ruang tidak terganggu. Akses tersebut sekaligus
        memeberikan penekanan inklusif terhadap sifat kegiatan klien yang sering
        menerima tamu pada acara-acara tertentu. Akses dan sirkulasi sangat
        berpengaruh pada konteks pemanfaatan ruang yang sifatnya informal,
        dengan kondisi beberapa ruang yang memang direncanakan sebagai ruang
        privat sejak awal.
      </>
    ),
  },
];

// Sticky

const Page = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await client.getEntries({
        content_type: "projects",
      });

      setPosts(response.items);
    };

    fetchData();
  }, []);

  return (
    <div className={`${styles.pageSize} flex`}>
      <Header title={posts.title} />
      <meta name='description' content={contentInside[0].projectTitle}></meta>
      <Image
        src={giorno}
        className='relative w-full md:h-[75vh] object-cover rounded-b-[36px]'
        alt='giorno'
      />
      {/* Judul */}
      <div className='mt-4 mb-12'>
        <h1 className={`${styles.headpoints5xl} uppercase`}>
          {contentInside[0].projectTitle}
        </h1>
        <p className={`${styles.subheader} uppercase text-gray-400`}>
          {contentInside[0].projectLocation}
        </p>
      </div>
      {/* Bawah judul */}
      <div className='flex flex-row w-full mb-8 mt-4 relative'>
        {/* Kiri */}
        <div className='w-1/2 h-full sticky top-[60%] z-10 pr-96'>
          <div className='flex justify-between border-b-2 py-4 border-gray-500 px-4'>
            <p className={`text-xl`}>LOCATION</p>
            <p className='font-bold text-xl'>
              {contentInside[0].projectLocation}
            </p>
          </div>
          <div className='flex justify-between border-b-2 py-4 border-gray-500 px-4'>
            <p className={`text-xl`}>CLIENT</p>
            <p className='font-bold text-xl'>
              {contentInside[0].projectClient}
            </p>
          </div>
          <div className='flex justify-between border-b-2 py-4 border-gray-500 px-4'>
            <p className={`text-xl`}>SITE AREA</p>
            <p className='font-bold text-xl'>{contentInside[0].projectArea} </p>
          </div>
          <div className='flex justify-between py-4 border-gray-500 px-4'>
            <p className={`text-xl`}>BUILDING AREA</p>
            <p className='font-bold text-xl'>
              {contentInside[0].projectBuildingArea}
            </p>
          </div>
        </div>
        {/* Kanan */}
        <div className='w-1/2 pr-36 flex flex-col gap-12'>
          <div id='projectIntroduction'>
            <h2 className='font-bold mb-2'>Pengantar</h2>
            <p>{contentInside[0].projectIntroduction}</p>
          </div>
          <div id='projectContextApproach'>
            <h2 className='font-bold mb-2'>Context Approach</h2>
            <p>{contentInside[0].projectContextApproach}</p>
          </div>
          <div className='relative'>
            <Image
              src={giorno}
              className='relative w-full h-full object-cover z-0'
              alt='giorno'
            />
          </div>
          <div id='projectIntroduction'>
            <h2 className='font-bold mb-2'>Architectural Approach</h2>
            <p>{contentInside[0].projectArchitecturalApproach}</p>
          </div>
        </div>
      </div>
      {/* Gambar besar */}

      <div className='flex flex-row w-full mb-24'>
        {/* Kiri */}
        <div className='w-1/2 h-full'></div>
        {/* Kanan */}
        <div className='w-1/2 pr-36 pl-12 pt-12 flex flex-col gap-12'></div>
      </div>
      {/* Galeri */}
      <div className='w-1/2 h-fit mb-8'>
        <Image src={giorno} alt='giorno' className='object-cover h-96' />
      </div>
      <div className='flex h-fit w-full gap-4 mb-8'>
        <div>
          <Image src={giorno} alt='giorno' className='h-64 object-cover' />
        </div>
        <div>
          <Image src={giorno} alt='giorno' className='h-64 object-cover' />
        </div>
        <div>
          <Image src={giorno} alt='giorno' className='h-64 object-cover' />
        </div>
      </div>
      <div className='w-full h-fit mb-8 flex flex-row gap-4'>
        <Image src={giorno} alt='giorno' className='object-cover h-96' />
        <Image src={giorno} alt='giorno' className='object-cover h-96' />
      </div>
      <div className='w-full h-fit mb-8 flex gap-4  '>
        <div className='w-1/2'></div>
        <Image src={giorno} alt='giorno' className='object-cover h-96 w-1/2' />
      </div>
      {/* Footer */}
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
