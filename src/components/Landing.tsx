import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Landing = () => {
  return (
    <section className="md:h-screen bg-mainBg pt-[150px]">
      <div className="py-[6.6vmax] text-white text-center">
        <h1 className="uppercase font-medium md:font-bold text-[32px] leading-[40px] scale-x-90 scale-y-125 md:text-[100px] md:scale-x-[0.68] md:scale-y-[1.1] md:leading-[100px] select-none">
          building the future of
        </h1>
        <h1 className="uppercase font-bold text-[38px] leading-[40px] scale-x-90 scale-y-125 md:text-[108px] md:scale-x-[.78] md:scale-y-[1.1] md:leading-[100px] select-none">
          medical insurance
        </h1>
        <h1 className="uppercase font-medium md:font-bold text-[32px] leading-[40px] scale-x-90 scale-y-125 md:text-[100px] md:scale-x-[0.68] md:scale-y-[1.1] md:leading-[100px] select-none">
          in binance smart chain
        </h1>
        <p className="text-[18px] md:my-[80px] my-[60px] md:hidden px-4 leading-[28px]">
          <i>
            A unique blockchain project with a{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              doxxed
            </span>{" "}
            team,{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              burned
            </span>{" "}
            liquidity,{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              audited
            </span>{" "}
            contract, real world utilities and long term vision
          </i>
        </p>
        <p className="text-[18px] my-[80px] hidden md:block">
          <i>
            A unique blockchain project with a{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              doxxed
            </span>{" "}
            team,{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              burned
            </span>{" "}
            liquidity,{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              audited
            </span>{" "}
            <br />
            contract, real world utilities and long term vision
          </i>
        </p>
        <h2 className="uppercase font-bold underline underline-offset-[6px] md:text-[32px] cursor-pointer mb-[72px] md:mb-0">
          join our hodl to a crypto-centric future
        </h2>
      </div>
    </section>
  );
};

export default Landing;
