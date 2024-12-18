"use client";

import React from "react";
import Image from "next/image";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "@/app/Images/btn-sm-20 (1).png";
import logo from "@/app/Images/btn-sm-20 (2).png";
import logo1 from "@/app/Images/Bandage.png";
import logo2 from "@/app/Images/icn settings icn-xs.png";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-[1439px]">
      <div className="bg-[#252B42] text-white py-2 text-sm flex justify-between px-8 items-center w-full">
        {/* {Right Section} */}
        <div className="items-center w-[415px] h-[46px] gap-[10px] grid grid-cols-1 md:grid-cols-4">
          <div>
            <Image src={Logo} alt=""></Image>
          </div>
          <div className="gap-[5px] p-[10px] w-[260px]">
            <Image src={logo} alt=""></Image>
          </div>
        </div>

        <div className="text-center flex-1">
          Follow Us and get a chance to win 80% off
        </div>
        {/* {Left section} */}
        <div className="items-center w-[233px] h-[46px] grid grid-cols-1 md:grid-cols-5 gap-[10px]">
          <div className="text-sm font-normal leading-[21px] flex">
            Follow Us :
          </div>
          <RiInstagramLine className="text-3xl text-white gap-[10px]" />
          <RiYoutubeLine className="text-3xl text-white" />
          <CiFacebook className="text-3xl text-white" />
          <SlSocialTwitter className="text-3xl text-white" />
        </div>
      </div>

      {/* {Main Navigation} */}
      <div className="flex justify-between px-8 items-center py-7">
        <Image
          src={logo1}
          alt=""
          className="w-[145px] h-[44px] items-center"
        ></Image>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="#" className="text-[#737373] hover:text-black">
            Home
          </Link>
          <Link href="#" className="text-[#252B42] hover:text-black flex">
            Shop
            <RiArrowDropDownLine className="text-2xl text-[#252B42]" />
          </Link>
          <Link href="#" className="text-[#737373] hover:text-black">
            About
          </Link>
          <Link href="#" className="text-[#737373] hover:text-black">
            Blog
          </Link>
          <Link href="#" className="text-[#737373] hover:text-black">
            Contact
          </Link>
          <Link href="#" className="text-[#737373] hover:text-black">
            Pages
          </Link>
        </nav>

        {/* Search Icons */}
        <div className="flex items-center space-x-6 text-[#23A6F0]">
          <div className="hidden lg:flex items-center font-bold left-[832px] gap-1">
            <Image src={logo2} alt=""></Image>
            Login / Register
          </div>
          <CiSearch className="text-[#23A6F0] text-2xl" />
          <BsCart className="text-[#23A6F0] text-2xl gap-[5px]" /> 1
          <CiHeart className="text-[#23A6F0] text-2xl gap-[5px]" /> 1
        </div>
      </div>
    </header>
  );
};

export default Navbar;