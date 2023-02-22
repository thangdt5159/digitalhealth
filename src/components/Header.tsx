import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaDiscord } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Header = () => {
  const data = [
    {
      id: 1,
      title: "CryptoHealth",
      param: "/",
    },
    {
      id: 2,
      title: "NFT Collections",
      param: "/nft",
    },
    {
      id: 3,
      title: "About Us",
      param: "/team",
    },
  ];

  const router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <section className="absolute top-0 left-0 right-0">
      <div className="flex p-[6vw] md:py-[2vw] md:px-[3vw] text-white md:justify-between justify-start items-center md:gap-10">
        <Image
          src="/images/banner_clean_2.png"
          alt=""
          width={400}
          height={200}
          className="md:w-1/3 w-[314px] cursor-pointer"
        />
        <div className="md:hidden relative w-[47px] h-[37px] py-[1px] px-[6px] before:w-[35px] before:h-[1px] before:absolute before:top-[35%] before:bg-white after:h-[1px] after:w-[35px] after:absolute after:top-[65%] after:bg-white"></div>
        <div className="w-1/3 hidden md:flex justify-center items-center gap-8 text-[12px] tracking-tighter mr-[110px]">
          {data.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                router.push(item.param);
                setActive(item.id);
              }}
              className={`cursor-pointer ${
                active && active === item.id
                  ? "underline underline-offset-[6px]"
                  : ""
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="w-1/3 hidden md:flex justify-end items-center gap-10">
          <FaTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <BiLinkAlt className="cursor-pointer" />
          <AiOutlineMail className="cursor-pointer" />
          <FaDiscord className="cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Header;
