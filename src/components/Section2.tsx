import React from "react";

const Section2 = () => {
  return (
    <section className="bg-mainBg text-white text-[18px]">
      <div className="w-[80%] mx-auto text-center py-[3.3vmax]">
        <div>SMART CONTRACT ADDRESS</div>
        <div className="text-[32px] font-bold my-10 w-fit mx-auto leading-[40px] border-b border-white">
          0x57EE76aEe8B02C1E3ceA9cf2046f741b81916613
        </div>
        <div>5% WALLET SIZE - 1% MAX TRANSACTION</div>
        <div className="flex justify-evenly mt-10">
          <div>
            <div className="mb-[8]">
              <p className="text-[80px] leading-[96px]">5% BUY FEE</p>
              <p className="text-[12px]">3% TREASURY, 2% DEVELOPMENT</p>
            </div>
            <div>
              <p className="text-[80px] leading-[96px]">5% SELL FEE</p>
              <p className="text-[12px]">
                2% TREASURY, 2% DEVELOPMENT, 1% NATIVE REFLECTIONS
              </p>
            </div>
          </div>
          <div>
            <p className="text-[80px] leading-[96px]">
              10% TRANSFER FEE <br /> GOES TO TREASURY
            </p>
            <div className="text-[14px] flex justify-between">
              <button className="border-[2px] border-white rounded-full py-[23px] transition-all duration-300 hover:bg-white w-[32%]">
                Check our Chart
              </button>
              <button className="border-[2px] border-white rounded-full py-[23px] transition-all duration-300 hover:bg-white w-[32%]">
                Buy on Pancake Swap
              </button>
              <button className="border-[2px] border-white rounded-full py-[23px] transition-all duration-300 hover:bg-white w-[32%]">
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
