import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Landing = () => {
  return (
    <section className="h-screen bg-mainBg pt-[150px]">
      <div className="py-[6.6vmax] text-white text-center">
        <h1 className="uppercase font-bold text-[100px] scale-x-[0.68] scale-y-[1.1] leading-[100px] select-none">
          building the future of
        </h1>
        <h1 className="uppercase font-bold text-[108px] scale-x-[.78] scale-y-[1.1] leading-[100px] select-none">
          medical insurance
        </h1>
        <h1 className="uppercase font-bold text-[100px] scale-x-[0.68] scale-y-[1.1] leading-[100px] select-none">
          in binance smart chain
        </h1>
        <p className="text-[18px] my-[80px]">
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
        <h2 className="uppercase font-bold underline underline-offset-[6px] text-[32px]">
          join our hold to a crypto-centric future
        </h2>
      </div>
    </section>
  );
};

export default Landing;
