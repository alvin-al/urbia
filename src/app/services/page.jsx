import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from "@/components/styles";
import buildingLineart from "@/../public/images/services-background/building-lineart.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/footer";

const Services = () => {
  const serviceCaption = `Urbia mengedepankan manifestasi ruang yang berfokus pada integrasi dari konteks dan kebutuhan pengguna ruang. Dalam mengolah kebutuhan desain, kami memandang klien sebagai kolaborator. Urbia mendorong aktivasi yang paritisipatif dalam pengambilan keputusan, memastikan bahwa kebutuhan dan preferensi Anda diakomodasi dengan baik dalam desain akhir. Membangun bersama Urbia tidak hanya mendapatkan produk perencanaan yang baik, namun juga pengalaman konsultasi tersebut memberikan nilai tambah yang signifikan. `;

  const itemsContent = [
    {
      no: 1,
      title: "Architectural Consultation",
      caption: (
        <>
          Layanan konsultasi arsitektural yang diberikan oleh Urbia
          mengedepankan bagaimana perencanaan properti yang dibutuhkan klien.
          Klien akan dilibatkan dalam proses pengambilan keputusan pada
          perencanaan. Adalah tanggung jawab Urbia, klien dapat memahami secara
          baik apa yang sedang ia rencanakan. Terlebih pada kebutuhan komersial,
          Urbia memberikan prioritas pada identifikasi alternatif desain yang
          mempertimbangkan berbagai aspek, seperti efisiensi ruang,
          keberlanjutan, dan valuasi properti. Urbia bersama dengan klien akan
          mengeksplorasi apa saja yang menjadi prioritas perencanaan, tujuan
          perencanaan, pengguna dan aktivitas pada properti yang direncanakan,
          daya tampung yang akan diakomodasi dalam perencanaan, bahkan nilai
          komersial yang melekat pada properti. <br />
          <br />
          <b>
            Kami berusaha menggali dan memahami apa yang sebenarnya Anda
            butuhkan dalam perencanaan.
          </b>{" "}
          Dalam perencanaan, terdapat beberapa langkah yang akan dilakukan.
          Secara umum perencanaan merupakan proses konsultasi oleh klien
          terhadap kebutuhan dan keinginan dalam memiliki dan/atau membangun
          sebuah properti. Tentunya, Urbia akan mendalami materi yang
          disesuaikan dengan konteks kebutuhan klien. Properti merupakan
          item/unit yang memiliki nilai investasi dan kapital yang tidak
          sedikit, maka Urbia berupaya untuk memberikan rekomendasi dan arahan
          terhadap klien sehingga dapat mendapatkan perencanaan properti yang
          efektif dan efisien.
        </>
      ),
    },
    {
      no: 2,
      title: "Construction & Renovation",
      caption: (
        <>
          Urbia memiliki beberapa partner dalam melaksanakan konstruksi.
          Konstruksi yang baik dapat dilaksanakan apabila telah melalui
          perencanaan yang baik juga. Kami memahami bahwa proses konstruksi
          bukan hal mudah untuk dipahami, pun juga kami memahami keinginan klien
          terhadap proses yang cepat dan sesuai dengan keinginan. Namun, Urbia
          hadir untuk mendukung klien dalam melihat proses kontruksi yang sesuai
          dengan perencanaan sehingga menghasilkan produk desain yang memiliki
          performa dan nilai sesuai yang direncanakan. <br />
          <br />
          <b>
            Kami bertujuan bekerja secara efektif dan efisien, namun tidak
            tergesa-gesa.{" "}
          </b>
          <br />
          Konstruksi dilakukan setidaknya setelah proses perencanaan selesai.
          Hal ini dikarenakan proses konstruksi maupun renovasi melibatkan
          banyak sekali pihak. Mulai dari penyedia bahan dan material, penyedia
          tenaga kerja tukang, vendor-vendor, maupun penyedia jasa konstruksi
          itu sendiri. Terdapat beberapa aspek yang akan diperhatikan sebelum
          akan memulai proses konstruksi, yaitu :
          <br /> • Gambar/dokumen perencanaan.
          <br /> • Kelengkapan surat izin dan administrasi bangunan.
          <br /> • Ketersediaan bahan material.
          <br /> • Timeline/waktu yang dibutuhkan untuk mengerjakan proses
          konstruksi dari awal sampai dengan selesai seluruhnya.
          <br /> • Ketersediaan anggaran dan pembiayaan.
          <br /> • Kesepakatan dalam melaksanakan pekerjaan konstruksi antara
          owner, pengawas, arsitek perencana, kontraktor pelaksana, dan vendor.
          <br />
          <br />
          Urbia merekomendasikan proses konstruksi dilakukan setelah proses
          perencanaan selesai. Artinya baik Urbia maupun klien telah menyepakati
          segala proses desain dan juga dokumen diserahkan kepada klien secara
          menyeluruh. Kemudian hal-hal yang berkaitan dengan mencari material
          terkait ataupun menggunakan kembali material yang sudah dimiliki dan
          memungkinkan untuk digunakan kembali dapat dilakukan bersamaan dengan
          proses perencanaan. Hal tersebut merupakan konteks yang dimiliki oleh
          klien dan menjadi concern bagi Urbia dalam proses perencanaan.
        </>
      ),
    },
    {
      no: 3,
      title: "Property Business Development",
      caption: (
        <>
          Properti merupakan sesuatu yang memiliki nilai investasi yang tinggi.
          Membangun properti memerlukan kapital yang tidak sedikit. Sehingga,
          Urbia berusaha untuk meyakinkan klien dalam menggunakan kemampuannya
          dalam membelanjakan properti secara efektif dan tepat sasaran. Urbia
          tidak hanya membantu klien yang akan membangun properti hunian saja,
          terdapat beberapa project yang memiliki nilai bisnis dalam
          perencanaannya. Artinya, beberapa klien ikut melibatkan Urbia untuk
          memastikan bahwa bisnisnya berjalan sesuai dengan rencana, termasuk
          properti yang merupakan bagian dari bisnis yang dikerjakan. <br />{" "}
          <br />
          Terdapat pertanyaan umum{" "}
          <b>
            “bagaimana membuat properti yang dapat memberikan keuntungan ekonomi
            bagi saya?”
          </b>
          . Dalam beberapa project Urbia membantu klien dalam menemukan eksekusi
          yang tepat dalam merencanakan kebutuhan propertinya. Hal ini penting
          dan akan berkaitan dengan implementasi desain secara langsung.
          Misalnya luasan bangunan yang perlu direncanakan, masa pembangunan
          yang tepat, kapasitas dalam desain, hingga keterlibatan stakeholder
          apabila diperlukan. Bahkan pada sebagian project, branding dan target
          market menjadi salah satu variabel yang harus dieksplorasi sebagai
          materi dalam merencanakan properti.
          <br /> <br />
          Urbia juga siap dalam bekerjasama dengan kontraktor maupun pengembang
          dalam merencanakan projectnya. Terdapat beberapa pengembang yang
          pernah bekerjasama dengan Urbia dalam merencanakan kawasan,
          residensial, hingga fasilitas umum dan sosialnya.
        </>
      ),
    },
    {
      no: 4,
      title: "Interior & Furniture",
      caption:
        "Urbia bekerjasama dengan workshop interior yang dikerjakan langsung oleh tenaga berpengalaman dan profesional dalam mengakomodasi berbagai kebutuhan desain. Tidak hanya mengakomodasi furniture dan kebutuhan interior saja, namun Urbia bersama rekan juga menangani beberapa project yang berkaitan dengan eksibisi, booth, dan kebutuhan display lainnya. Interior dan furniture yang direncanakan secara detail membantu klien dalam memproyeksikan ruang dalam seperti apa yang diinginkan. ",
    },
    {
      no: 5,
      title: "Research & Development",
      caption: (
        <>
          Urbia memiliki pandangan bahwa dampak dari arsitektur berpengaruh
          dalam skala yang cukup besar. Disisin lain, arsitektur juga hadir
          dalam berbagai aspek keruangan. Berbagai isu dan juga fenomena yang
          berkaitan dengan keruangan ada di sekitar kita. Banyak yang belum
          mengetahui tentang bagaimana ruang yang baik itu dihadirkan. Tidak
          semua orang memperhatikan bagaimana ruang sebaiknya dimanfaatkan.
          Tidak semua kalangan mengetahui kondisi kelompok masyarakat tertentu
          yang sebenarnya memerlukan penanganan ruang yang lebih kondusif. Tidak
          semua masyarakat menyadari bahwa kepentingan umum itu harus
          didahulukan. <br />
          <br />
          Urbia memiliki kepentingan dalam menyebarluaskan awareness terkait
          ruang dan manusia yang memanfaatkannya. Harapannya, semakin banyak
          orang yang terbuka wawasannya. Terlebih lagi, kami memiliki tujuan
          dalam bertemu dengan pihak-pihak dan komunitas yang memiliki tujuan
          dan semangat yang berkaitan satu sama lain.
        </>
      ),
    },
    {
      no: 6,
      title: "Development and Deploy",
      caption: (
        <>
          Pandangan ini perlunya untuk juga diketahui oleh kalangan yang lebih
          luas, tidak hanya berputar pada Urbia saja. Kedepannya, proses ini
          dapat disebarluaskan dengan memanfaatkan media cetak maupun digital
          yang disediakan oleh Urbia kepada khalayak umum.
        </>
      ),
    },
  ];

  const Items = ({ no, title, caption }) => {
    return (
      <AccordionItem value={no} className='lg:pb-12 border-b-2 border-black'>
        <AccordionTrigger
          className={`${styles.headpoints} md:text-2xl text-left no-underline pb-8`}
        >
          {title}
        </AccordionTrigger>
        <AccordionContent className={`pb-8 lg:pl-[50%] ${styles.paragraph}`}>
          {caption}
        </AccordionContent>
      </AccordionItem>
    );
  };

  return (
    <div>
      <div
        className={`${styles.pageSize} bg-[#11468F] bg-contain max-w-full lg:content-center  h-[45rem] rounded-b-[36px]`}
        style={{
          backgroundImage: "url('/images/services-background/line.svg')",
        }}
      >
        <Header title='Services' />
        <div className='flex flex-col lg:flex-row mb-24 lg:mt-8 w-full gap-8 lg:justify-between md:px-12'>
          <div className='lg:order-2'>
            <Image
              className='m-auto self-center lg:max-w-none my-8 lg:w-full'
              src={buildingLineart}
              alt=''
              width={400}
              height={400}
            />
          </div>
          <div className='lg:order-1 lg:content-center lg:w-[800px]'>
            <h1
              className={`text-5xl text-white font-semibold mb-8 md:text-6xl xl:text-8xl`}
            >
              Service <br /> We Provide
            </h1>
            <p className={`${styles.paragraph} text-white lg:pr-12 xl:pr-12`}>
              {serviceCaption}
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.pageSize} mt-6 mb-24 md:px-16`}>
        <Accordion type='single' collapsible>
          {itemsContent.map((item, index) => (
            <Items
              key={index}
              no={itemsContent[index].no}
              title={itemsContent[index].title}
              caption={itemsContent[index].caption}
            />
          ))}
        </Accordion>
      </div>

      <div className={`${styles.pageSize}`}>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
