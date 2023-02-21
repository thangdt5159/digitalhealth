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
      <div className="flex py-[2vw] px-[3vw] text-white justify-between items-center gap-10">
        <Image
          src="/images/banner_clean_2.png"
          alt=""
          width={400}
          height={200}
          className="w-1/3"
        />
        <div className="w-1/3 flex justify-center items-center gap-8 text-[12px] tracking-tighter">
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
        <div className="w-1/3 flex justify-end items-center gap-10">
          <FaTwitter />
          <FaFacebookF />
          <BiLinkAlt />
          <AiOutlineMail />
          <FaDiscord />
        </div>
      </div>
    </section>
  );
};

export default Header;
