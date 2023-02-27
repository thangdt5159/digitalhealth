import { useRouter } from "next/router";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa";
import { data } from "./Header";

const Drawer = ({ isOpen, handleClick, active, setActive }: any) => {
  const router = useRouter();

  return (
    <>
      <section
        className={`h-screen w-full fixed right-0 top-0 md:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 bg-[#fed5e0] z-[9999]" : "opacity-0 z-[-1]"
        }`}
      >
        <div
          className={`text-center flex flex-col justify-center h-screen text-[32px] transition-all duration-700 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-[100px] opacity-0"
          }`}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="relative w-fit mx-auto text-text "
              onClick={() => {
                setActive(item.id);
                router.push(item.param);
                handleClick();
              }}
            >
              <div
                className={`scale-y-[1.15] my-1 
                `}
              >
                {item.title}
                {active && active === item.id && (
                  <div className="absolute bg-text w-full h-[1px] mt-[-5px]"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`md:w-1/3 flex justify-center items-center gap-4 mx-auto md:text-[18px] text-[24px] mb-10 transition-all duration-700 text-text ${
            isOpen ? "translate-y-[-65px]" : "translate-y-0"
          }`}
        >
          <FaTwitter />
          <FaFacebookF />
          <BiLinkAlt />
          <AiOutlineMail />
          <FaDiscord />
        </div>
      </section>
    </>
  );
};

export default Drawer;
