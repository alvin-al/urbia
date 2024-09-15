"use client";
import { useState, useRef, useEffect } from "react";
import arrow from "@/../public/icons/arrow-icon.svg";
import Image from "next/image";
import { ChevronDownIcon, ArrowBottomRightIcon } from "@radix-ui/react-icons";

const BuildCommunityContent = () => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div className='w-full text-white flex h-fit'>
        {/* Judul */}
        <div className='w-1/3 py-8 pr-12 flex flex-col gap-2 sticky top-[5%] h-full'>
          <h2 className='text-2xl font-bold'>
            Upaya Perkembangan Kota : Tidak Adanya Keterlibatan Masyarakat
            Secara Utuh dan Berkelanjutan
          </h2>
          <p>3 min. read | Oct 13, 2021</p>
        </div>
        {/* Konten */}
        <div
          className={`cursor-pointer w-2/3 border-t-2 border-b-2 p-8 gap-12 flex text-ellipsis text-wrap overflow-hidden ${
            click ? "h-full" : "h-72"
          }`}
          onClick={() => setClick(!click)}
        >
          {/* teks */}
          <div
            className={`h-full w-fit`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <p className={`text-justify ${click ? "" : "line-clamp-[8]"}`}>
              Silau dengan pesona dan imaji hidup yang lebih baik, orang-orang
              tergoda meninggalkan kampungnya dan pergi ke kota, berharap
              mendapatkan hidup yang lebih sejahtera. Sayang, ruang fisik tidak
              tumbuh semudah & secepat kedatangan para pengadu nasib, kebutuhan
              ruang bagi warga kota pun semakin mendesak.
              <br />
              <br />
              Umumnya, kepentingan sosial dan ekonomi menjadi pemicu utama
              terjadinya perubahan kota. Dua faktor ini, ditambah daya tarik
              kota yang menawarkan modernitas peradaban, juga selalu menggoda
              orang untuk pergi dan menetap di sana. Meningkatnya populasi dan
              guyuran arus modal yang jauh melebihi daya tampung kota
              menyebabkan suatu wilayah menjadi semakin padat atau malah meluber
              ke sekitarnya. Bagian kota yang tak tersentuh dan terurus kemudian
              berubah menjadi kawasan kumuh.
              <br />
              <br />
              Pengelola, pemerintah, arsitek, perancang, tokoh masyarakat dan
              segenap stakeholder pun harus memutar otak untuk menangani masalah
              ini. Rancangan vertikal, seperti rumah susun, pasar susun, hingga
              kampung susun telah diusulkan berulang kali sebagai jawaban atas
              kota yang pertumbuhannya kalah cepat dengan pertumbuhan
              populasinya. Akan tetapi, layaknya sebuah pertaruhan, tidak ada
              yang dapat memastikan keberhasilannya dengan sempurna.
              <br />
              <br />
              Beberapa waktu lalu, proyek “Kampung Susun Produktif Tumbuh
              Cakung” (selanjutnya disebut Kampung Susun Cakung) diresmikan oleh
              Gubernur DKI, Anies Baswedan di Jakarta Timur. Perancangnya adalah
              Yu Sing, arsitek yang banyak berbicara soal arsitektur mikro.
              Sepak terjangnya termasuk kritik atas pembangunan masif di tengah
              keterbatasan lahan yang tujuannya tak tentu. Yu Sing mencoba
              merubah paradigma “sempit-luas” dan “cukup-kurang ” dalam sebuah
              ruang, terkhusus hunian. Kampung susun rancangannya ini, tema
              besarnya tentu berangkat dari isu efisiensi lahan kota, namun
              persoalan kultur dirasa patut untuk ikut diperbincangkan di sini,
              terkhusus kultur kampung.
              <br />
              <br />
              Menurut Yu Sing, masing-masing unit kampung susun ini berukuran
              36m2 dengan pembagian fungsi ruang privat dan ekonomi bagi para
              calon penghuninya. Kampung Susun Cakung menarik dibahas karena
              rancangannya yang fokus pada dikotomi ruang privat dan ekonomi.
              Dari sini, kita kemudian sah untuk bertanya-tanya: “Apa yang
              sejatinya membuat kampung disebut ‘kampung’?” atau setidaknya
              “Bagaimana ‘kampung’ dimaknai oleh sang perancang?” Jawabannya
              tentu akan sangat variatif, tergantung dari arah mana kita
              melihatnya, yang jelas pertanyaan ini penting karena akan
              berkaitan pula dengan bagaimana standar-standar ruang kampung akan
              dimanifestasikan.
              <br />
              <br />
              Kita tentu paham bahwa kampung dan kota memiliki kompleksitasnya
              masing-masing, maka selain pendekatan ekonomi, dimensi sosial dan
              aktivitas kebudayaan kampung juga perlu diperhitungkan. Belum lagi
              polemik spasial seperti batas-batas privasi, lingkungan yang sehat
              bagi anak, kebersihan, kesehatan, akses informasi, dan lain
              sebagainya. Alih-alih menghadirkan kultur kampung di tengah kota,
              yang justru dikhawatirkan adalah memperlakukan kampung dengan
              kacamata orang kota.
              <br />
              <br />
              Kedua, berbicara tentang sosio-kultur kampung akan diawali dengan
              premis bahwa pada kondisi tertentu, perilaku pengguna tidak selalu
              dapat diatur sedemikian rupa melalui rekayasa desain dan
              mantra-mantra akademik. Dengan mengasumsikan bahwa premis ini
              benar, maka pendekatan atas “standar kelaziman” warga sebelum
              relokasi bakal lebih memungkinkan kita memikirkan solusi yang
              lebih cair, ketimbang mengimpor begitu saja tolok ukur yang sudah
              mapan.
              <br />
              <br />
              Dengan pola pikir seperti ini, kita seharusnya sudah mulai insaf
              dan berpikir bahwa memperdebatkan solusi atas persoalan
              kesejahteraan masyarakat akan terdengar seperti ilusi ketika
              pemenuhan kebutuhan dasar saja masih belum dipikirkan secara
              tuntas. Mulai dari hal-hal yang telah disebut sebelumnya, ditambah
              dengan kualitas air, udara, makanan, hingga taraf pendidikan,
              akses informasi, dan kesehatan. Mengingat bagaimana “kawasan
              kumuh” dicirikan, maka seharusnya pilihan yang muncul tidak
              terbatas pada relokasi saja, melainkan juga opsi pemenuhan semua
              kebutuhan dasar di lahan yang sudah ada.
              <br />
              <br />
              Maka, selain solusi teknis, penyelesaian masalah kota juga perlu
              mengikutsertakan perubahan sosio-kultur warganya. Maksudnya adalah
              membuat warga tersadar bahwa infrastruktur dan tata kelola ruang
              hidup yang layak memang benar-benar dibutuhkan. Lebih spesifik,
              tuntutan atas pemenuhan kebutuhan dasar harus diartikulasikan dari
              kesadaran warga sendiri, alih-alih didikte. Kebersihan lingkungan,
              misalnya, dapat terwujud ketika warga memang memiliki kultur yang
              bersih sehat dengan didukung infrastruktur dan tata kelola sampah
              yang baik. Dengan pendekatan teknis dan terlebih aspek humanis
              yang seimbang, kita kemudian akan dapat mempertanyakan kembali,
              benarkah relokasi dan aktivitas susun-menyusun adalah jaminan atas
              selesainya problem kawasan kumuh?
            </p>
          </div>
          <div className={`w-fit ${click ? "" : ""}`}>
            <ArrowBottomRightIcon
              className={`h-16 w-16 shrink-0 text-white text-muted-foreground transition-transform duration-200 border-2 border-white rounded-full inline-block p-3 ${
                hover ? "bg-white text-blue-800" : "bg-transparent"
              } ${click ? "-rotate-90 " : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCommunityContent;
