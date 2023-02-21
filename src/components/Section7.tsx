import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto text-center">
        <Image
          src="/images/hodl-buddies.jpg"
          alt=""
          width={800}
          height={800}
          className="mx-auto h-[355px] w-auto"
        />
        <p className="text-[18px] w-[85%] mx-auto">
          The CryptoHealth Team believes that success is best when it’s shared.
          Holders of tokens from our HODL BUDDIES provides a multiplier effect
          which increases the hardcap of the amount you can reimburse from the
          pool depending on your length of CryptoHealth HODL.
        </p>
        <p className="text-text font-bold text-[26px] mt-[44px] mb-[100px]">
          REIMBURSE UP TO 2X MORE BY HOLDING OUR PARTNER TOKENS
        </p>
      </div>
    </section>
  );
};

export default Section7;
