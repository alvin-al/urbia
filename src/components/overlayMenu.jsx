import React from "react";
import Link from "next/link";
import * as styles from "@/components/styles";
import NavbarSidebar from "./ui/NavbarSidebar";
import Footer from "./footer";

const OverlayMenu = ({ isOpen }) => {
  return (
    // <div
    //   className={`h-full w-full fixed z-20 left-0 top-0 bg-black overflow-x-hidden flex items-center justify-center pt-[15%] sm:pt-[5%] lg:pt-0 transition-opacity duration-200 ${
    //     isOpen ? "fadein" : "opacity-0 fadeout"
    //   } `}
    // >
    //   <nav className='flex flex-col text-white h-full w-full lg:flex-row lg:align-middle'>
    //     <Link
    //       href='/'
    //       className='w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full iframe-home  hover:ease-in-out hover:underline'
    //     >
    //       Home
    //     </Link>

    //     <Link
    //       href='/projects'
    //       className='hover:underline w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full hover:ease-in-out iframe-projects'
    //     >
    //       Projects
    //     </Link>

    //     <Link
    //       href='/services'
    //       className='hover:underline w-full h-1/4 flex justify-center items-center text-center text-4xl border-b lg:border-b-0 lg:border-r lg:h-full iframe-services'
    //     >
    //       Services
    //     </Link>

    //     <Link
    //       href='/urbians'
    //       className='hover:underline w-full h-1/4 flex justify-center items-center text-center text-4xl lg:h-full iframe-about-us'
    //     >
    //       About Us
    //     </Link>
    //   </nav>
    // </div>

    <div
      className={`h-full w-screen fixed z-20 left-0 top-0 backdrop-blur-sm overflow-y-hidden transition ease-in-out duration-500 ${
        isOpen
          ? "translate-x-0 slide-in-from-right"
          : "-translate-x-full slide-out-to-right"
      } `}
    >
      <div className='lg:w-1/3 xl:w-4/6 fixed z-20 right-0 top-0'>
        <div
          className={`hidden z-0 backdrop-blur-md w-full h-full ${
            isOpen
              ? "opacity-100 bg-white pointer-events-none transition-opacity duration-500"
              : "opacity-0"
          }`}
        ></div>

        <div
          className={`h-full lg:w-2/5 xl:w-2/6 fixed z-20 left-0 top-0 ${
            styles.bluePallete
          } overflow-x-hidden transition ease-in-out duration-500 ${
            isOpen
              ? "translate-x-0 slide-in-from-right"
              : "-translate-x-full slide-out-to-right"
          } pl-8 pt-32 flex flex-col justify-between`}
        >
          <div className={``}>
            <NavbarSidebar />
          </div>
          <div>
            <p className={`font-medium text-lg text-white pr-16`}>
              Manifesting vision space into reality through nature, materials,
              ambience, and contextual methods to gain long last investing and
              value
            </p>
          </div>
          <div>
            <Footer color='white' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu;
