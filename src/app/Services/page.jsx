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
    const serviceCaption = `Explore Urbia's unparalleled services, where sophistication meets simplicity. Elevate your lifestyle with our curated range of offerings designed to exceed your expectations. From bespoke design consultations to seamless property management, Urbia ensures every aspect of your experience is marked by elegance and ease. Step into a world of refined living with Urbia's premier services.`;

    const itemsContent = [
        {
            no: 1,
            title: 'Architectural Consultation',
            caption: 'adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. '
        },
        {
            no: 2,
            title: 'Construction & Renovation',
            caption: 'adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. '
        },
        {
            no: 3,
            title: 'Property Business Development',
            caption: 'adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. '
        },
        {
            no: 4,
            title: 'Interior & Furniture',
            caption: 'adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. '
        },
        {
            no: 5,
            title: 'Research & Development',
            caption: 'adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. adalah produk konsultan desain interior untuk berkarya, dengan mengutamakan detail dan kebaharuan desain produk pun selaras dengan kontekstual desain arsitektur yang diterapkan. '
        },
    ];

    const Items = ({no, title, caption}) => {
        return (
            <AccordionItem value={no} className="lg:pb-12 border-b-2 border-black">
                <AccordionTrigger className="text-xl font-semibold md:text-2xl text-left no-underline pb-8">{title}</AccordionTrigger>
                    <AccordionContent className={`pb-8 lg:pl-[50%] ${styles.paragraph}`}>
                        {caption}
                    </AccordionContent>
            </AccordionItem>
        )
    }


    return (
        <div>
            <div className={`${styles.pageSize} bg-[#11468F] bg-contain max-w-full lg:content-center`} style={{ backgroundImage: "url('/images/services-background/line.svg')" }}>
                <Header title="services" />
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
