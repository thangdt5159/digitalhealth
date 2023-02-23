import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <section>
      <div className="md:w-[80%] w-[90%] mx-auto text-center">
        <Image
          src="/images/hodl-buddies.jpg"
          alt=""
          width={800}
          height={800}
          className="mx-auto h-[355px] w-auto hidden md:block"
        />
        <div className="md:hidden">
          <h2 className="uppercase bg-[#ee3770] rounded-[20px] text-white py-2 font-medium tracking-widest scale-y-[1.15] text-[32px] leading-[32px] mt-[80px]">
            cryptohealth
          </h2>
          <h2 className="text-stroke uppercase text-[36px] font-bold mb-[40px]">
            hodl buddies
          </h2>
        </div>
        <p className="text-[18px] md:w-[85%] mx-auto scale-y-[1.05] md:scale-y-100">
          The CryptoHealth Team believes that success is best when it’s shared.
          Holders of tokens from our HODL BUDDIES provides a multiplier effect
          which increases the hardcap of the amount you can reimburse from the
          pool depending on your length of CryptoHealth HODL.
        </p>
        <p className="text-text font-bold md:text-[26px] text-[24px] mt-[44px] mb-[100px]">
          REIMBURSE UP TO 2X MORE BY HOLDING OUR PARTNER TOKENS
        </p>
      </div>
    </section>
  );
};

export default Section7;
