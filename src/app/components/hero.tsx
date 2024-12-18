import React from "react";
import Image from "next/image";
import item1 from "@/app/Images/carousel-item.png";
import card from "@/app/Images/desktop-shop-cards-31.png"; 
import product from "@/app/Images/desktop-product-cards-10.png";
import item2 from "@/app/Images/carousel-inner.png";
import item3 from "@/app/Images/container-fluid.png";
import item4 from "@/app/Images/desktop-blog-3.png";
 


const Hero = () => {
    return(
        <div> 
        <div className="justify-center items-center flex w-[1440px]">
            <div className="w-[1440px]">
            <div className="flex max-w-[1440px] gap-6 justify-center bg-[#23A6F0] h-[716px] top-[136px]">
                <Image src={item1} alt=""></Image>
            </div>
            </div> 
        </div>        
        <div className="h-[770px] w-[1440px]">
            <Image src={card} alt=""></Image>
        </div>

        <div className="w-[1440px] h-[1652px]">
            <Image src={product} alt="" ></Image>
        </div>

        <div className="w-[1440px] h-[709px]">
            <Image src={item2} alt=""></Image>
        </div>

        <div className="h-[682px] w-[1440px]">
            <Image src={item3} alt=""></Image>
        </div>

        <div className="w-[1440px] h-[1044px]">
            <Image src={item4} alt=""></Image>
        </div>

        </div>
               

    )
}


export default Hero;