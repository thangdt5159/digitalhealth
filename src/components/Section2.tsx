import React from "react";

const Section2 = () => {
  return (
    <section className="bg-mainBg text-white text-[18px]">
      <div className="md:w-[80%] w-[90%] mx-auto text-center md:py-[3.3vmax] py-[90px]">
        <div>SMART CONTRACT ADDRESS</div>
        <div className="md:text-[32px] text-[28px] font-bold my-10 w-fit mx-auto md:leading-[40px] md:border-b md:border-white cursor-pointer break-all underline underline-offset-4">
          0x57EE76aEe8B02C1E3ceA9cf2046f741b81916613
        </div>
        <div>5% WALLET SIZE - 1% MAX TRANSACTION</div>
        <div className="md:flex justify-evenly mt-10">
          <div>
            <div className="mb-[8]">
              <p className="md:text-[80px] md:leading-[96px] text-[66px]">
                5% BUY FEE
              </p>
              <p className="text-[12px]">3% TREASURY, 2% DEVELOPMENT</p>
            </div>
            <div>
              <p className="md:text-[80px] md:leading-[96px] text-[66px]">
                5% SELL FEE
              </p>
              <p className="text-[12px]">
                2% TREASURY, 2% DEVELOPMENT, 1% NATIVE REFLECTIONS
              </p>
            </div>
          </div>
          <div>
            <p className="md:text-[80px] md:leading-[96px] text-[40px] leading-[40px] py-12 md:py-0">
              10% TRANSFER FEE <br /> GOES TO TREASURY
            </p>
            <div className="text-[14px] md:flex justify-between">
              <button className="border-[2px] border-white rounded-full md:py-[23px] py-[18px] mb-3 md:mb-0 transition-all duration-300 hover:bg-white md:w-[32%] w-full">
                Check our Chart
              </button>
              <button className="border-[2px] border-white rounded-full md:py-[23px] py-[18px] mb-3 md:mb-0 transition-all duration-300 hover:bg-white md:w-[32%] w-full">
                Buy on Pancake Swap
              </button>
              <button className="border-[2px] border-white rounded-full md:py-[23px] py-[18px] transition-all duration-300 hover:bg-white md:w-[32%] w-full">
                Buy on Mobula
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
