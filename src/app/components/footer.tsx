"use client";
import React from "react";
import Image from "next/image";
import pic from "@/app/Images/desktop-footer-6.png";



const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] py-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
          <div className="w-[1440px] h-[488pxpx] left-[195px]">
            <Image src={pic} alt=""></Image>
          </div>          
        </div>          
      </div>
    </footer>
  );
};

export default Footer;
