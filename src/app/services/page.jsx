import React from "react";
import Image from "next/image";
import Header from "@/components/header";
import * as styles from '@/components/styles'
import buildingLineart from '@/../public/images/services-background/building-lineart.svg'


const Services = () => {
    const serviceCaption = `Explore Urbia's unparalleled services, where sophistication meets simplicity. Elevate your lifestyle with our curated range of offerings designed to exceed your expectations. From bespoke design consultations to seamless property management, Urbia ensures every aspect of your experience is marked by elegance and ease. Step into a world of refined living with Urbia's premier services.`;



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
        </div>
    );
};

export default Services;
