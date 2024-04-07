import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from '@/components/styles'
import buildingLineart from '@/../public/images/services-background/building-lineart.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Footer from "@/components/footer";



const Services = () => {
    const serviceCaption = `Urbia mengedepankan manifestasi ruang yang berfokus pada integrasi dari konteks dan kebutuhan pengguna ruang. Dalam mengolah kebutuhan desain, Urbia memandang klien sebagai kolaborator, Urbia mendorong aktivasi yang paritisipatif dalam pengambilan keputusan, memastikan bahwa kebutuhan dan preferensi klien diakomodasi dengan baik dalam desain akhir. Membangun bersama Urbia tidak hanya mendapatkan produk perencanaan yang baik, namun juga pengalaman konsultasi tersebut memberikan nilai tambah yang signifikan. `;

    const itemsContent = [
        {
            no: 1,
            title: 'Architectural Consultation',
            caption: <>Layanan konsultasi arsitektural yang diberikan oleh Urbia mengedepankan bagaimana perencanaan properti yang dibutuhkan klien. Klien akan dilibatkan dalam proses pengambilan keputusan pada perencanaan. Adalah tanggung jawab Urbia, klien dapat memahami secara baik apa yang sedang ia rencanakan, aspek penting apa saja yang perlu diketahui dalam proses perencanaan, konsekuensi dan keuntungan apa saja yang akan didapatkan, hingga potensi dari konteks yang dimiliki oleh klien.  Urbia bersama dengan klien akan mengeksplorasi apa saja yang menjadi prioritas perencanaan, tujuan perencanaan, pengguna dan aktivitas pada properti yang direncanakan, daya tampung yang akan diakomodasi dalam perencanaan, bahkan nilai komersial yang melekat pada properti. <br /><br />Dalam beberapa kasus, Urbia membantu klien dalam mencari dan menentukan alternatif financial ability yang perlu dipersiapkan klien dalam mewujudkan properti yang direncanakan. Hal ini sangat diperlukan pada prinsip keberlanjutan dan valuasi properti yang dimiliki oleh klien nantinya. Membangun bersama Urbia tidak hanya mendapatkan produk perencanaan yang baik, namun juga pengalaman konsultasi tersebut memberikan nilai tambah yang signifikan. 
            </>
        },
        {
            no: 2,
            title: 'Construction & Renovation',
            caption: <>
                Urbia memiliki lebih dari ____ mitra dalam melaksanakan konstruksi. Konstruksi merupakan hal yang berbeda dari perencanaan. Namun, konstruksi yang baik dapat dilaksanakan apabila telah melalui perencanaan yang baik juga. Kami memahami bahwa proses konstruksi bukan hal mudah untuk dipahami, pun juga kami memahami keinginan klien terhadap proses yang cepat dan sesuai dengan keinginan. Namun, Urbia hadir untuk mendukung klien dalam memahami proses konstruksi yang sesuai dengan perencanaan sehingga menghasilkan produk desain yang memiliki performa dan nilai sesuai yang direncanakan.
                <br /><br />
                Konstruksi dan renovasi melibatkan banyak sekali pihak. Mulai dari penyedia bahan dan material, penyedia tenaga kerja tukang, vendor-vendor, maupun penyedia jasa konstruksi itu sendiri. Terdapat beberapa aspek yang akan diperhatikan sebelum memulai proses konstruksi, yaitu:
                <br />
                • gambar/dokumen perencanaan.
                <br />
                • kelengkapan surat izin dan administrasi bangunan.
                <br />
                • ketersediaan bahan material.
                <br />
                • timeline/waktu yang dibutuhkan untuk mengerjakan proses konstruksi dari awal sampai dengan selesai seluruhnya.
                <br />
                • ketersediaan dana dan pembiayaan.
                <br />
                • kesepakatan dalam melaksanakan pekerjaan konstruksi antara pemilik, pengawas, arsitek, hingga kontraktor, dan vendor.
                <br /><br />
                Konstruksi dilakukan setidaknya setelah proses perencanaan selesai. Urbia merekomendasikan proses konstruksi dilakukan setelah proses perencanaan selesai. Artinya baik Urbia maupun klien telah menyepakati segala proses desain dan juga dokumen diserahkan kepada klien secara menyeluruh. Kemudian hal-hal yang berkaitan dengan mencari material terkait ataupun menggunakan kembali material yang sudah dimiliki dan memungkinkan untuk digunakan kembali dapat dilakukan bersamaan dengan proses perencanaan. Hal tersebut merupakan konteks yang dimiliki oleh klien dan menjadi concern bagi Urbia dalam proses perencanaan. Proses konstruksi yang dapat diakomodasi oleh Urbia.
                <br /><br />
                Renovasi merupakan proses mengkondisikan kembali bangunan atau properti yang sudah ada, dengan tujuan meningkatkan kemampuan bangunan (performa) seperti kualitas cahaya, sirkulasi udara, utilitas, kapasitas bangunan, kualitas struktur, maupun kualitas finishing. Renovasi juga dilakukan karena ingin mengubah fungsi dari sebagian atau seluruh ruangan bangunan. Selain itu juga dilakukan untuk mempercantik muka/tampilan dari bangunan.
            </>

        },
        {
            no: 3,
            title: 'Property Business Development',
            caption: <>Dalam beberapa kasus, Urbia membantu klien dalam mencari dan menentukan alternatif financial ability yang perlu dipersiapkan klien dalam mewujudkan properti yang direncanakan. Hal ini sangat diperlukan pada prinsip keberlanjutan dan valuasi properti yang dimiliki oleh klien nantinya. Membangun bersama Urbia tidak hanya mendapatkan produk perencanaan yang baik, namun juga pengalaman konsultasi tersebut memberikan nilai tambah yang signifikan. 
            </>
        },
        {
            no: 4,
            title: 'Interior & Furniture',
            caption: 'adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. '
        },
        {
            no: 5,
            title: 'Research & Development',
            caption: <>Layanan konsultasi arsitektural yang diberikan oleh Urbia mengedepankan bagaimana perencanaan properti yang dibutuhkan klien. Klien akan dilibatkan dalam proses pengambilan keputusan pada perencanaan. Adalah tanggung jawab Urbia, klien dapat memahami secara baik apa yang sedang ia rencanakan, aspek penting apa saja yang perlu diketahui dalam proses perencanaan, konsekuensi dan keuntungan apa saja yang akan didapatkan, hingga potensi dari konteks yang dimiliki oleh klien.  Urbia bersama dengan klien akan mengeksplorasi apa saja yang menjadi prioritas perencanaan, tujuan perencanaan, pengguna dan aktivitas pada properti yang direncanakan, daya tampung yang akan diakomodasi dalam perencanaan, bahkan nilai komersial yang melekat pada properti. <br /> <br />Dalam beberapa kasus, Urbia membantu klien dalam mencari dan menentukan alternatif financial ability yang perlu dipersiapkan klien dalam mewujudkan properti yang direncanakan. Hal ini sangat diperlukan pada prinsip keberlanjutan dan valuasi properti yang dimiliki oleh klien nantinya. Membangun bersama Urbia tidak hanya mendapatkan produk perencanaan yang baik, namun juga pengalaman konsultasi tersebut memberikan nilai tambah yang signifikan.
            </>
        },
    ];

    const Items = ({no, title, caption}) => {
        return (
            <AccordionItem value={no} className="lg:pb-12 border-b-2 border-black">
                <AccordionTrigger className={`${styles.headpoints} md:text-2xl text-left no-underline pb-8`}>{title}</AccordionTrigger>
                    <AccordionContent className={`pb-8 lg:pl-[50%] ${styles.paragraph}`}>
                        {caption}
                    </AccordionContent>
            </AccordionItem>
        )
    }


    return (
        <div>
            <div className={`${styles.pageSize} bg-[#11468F] bg-contain max-w-full lg:content-center`} style={{ backgroundImage: "url('/images/services-background/line.svg')" }}>
                <Header title="Services" />
                <div className="flex flex-col lg:flex-row mb-24 lg:mt-8 w-full gap-8 lg:justify-between">
                    <div className="lg:order-2">
                        <Image className="m-auto self-center lg:max-w-none my-8 lg:w-full" src={buildingLineart} alt="" width={400} height={400}/>
                    </div>
                    <div className="lg:order-1 lg:content-center lg:w-[800px]">
                        <h1 className={`text-5xl text-white font-semibold mb-8 md:text-6xl xl:text-8xl`}>Service <br/> We Provide</h1>
                        <p className={`${styles.paragraph} text-white lg:pr-12 xl:pr-12`}>{serviceCaption}</p>
                    </div>
                </div>
            </div>


            <div className={`${styles.pageSize} mt-6 mb-24`}>
                <Accordion type="single" collapsible>                    
                    {itemsContent.map((item, index) => (
                        <Items key={index} no={itemsContent[index].no} title={itemsContent[index].title} caption={itemsContent[index].caption} />
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
