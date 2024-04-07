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
            caption: 'Urbia memiliki lebih dari +100 partner dalam melaksanakan konstruksipartner konstruksi pendekatan yang transparan apabila dibutuhkan'
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
                <div className="flex flex-col lg:flex-row lg:pb-20 lg:pt-8">
                    <div className="lg:order-2 lg:w-1/2">
                        <Image className="my-16 self-center mx-auto lg:content-center max-w-full xl:max-w-none  xl:w-[700px] lg:my-0" src={buildingLineart} alt="" />
                    </div>
                    <div className="lg:order-1 lg:w-1/2 lg:content-center lg:pr-8">
                        <h1 className={`text-5xl text-white font-semibold mb-8 md:text-6xl xl:text-8xl`}>Service <br/> We Provide</h1>
                        <p className={`${styles.paragraph} text-white mb-10 lg:pr-12 xl:pr-24`}>{serviceCaption}</p>
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
