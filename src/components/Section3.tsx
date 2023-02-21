import Image from "next/image";
import React from "react";

const Section3 = () => {
  const data = [
    {
      id: 1,
      image: "/images/cml.png",
    },
    {
      id: 2,
      image: "/images/mobula.png",
    },
    {
      id: 3,
      image: "/images/coinMooner.png",
    },
    {
      id: 4,
      image: "/images/cryptoQA.png",
    },
  ];

  return (
    <section>
      <div className="w-[80%] mx-auto">
        <div className="py-[3.3vmax]">
          <Image
            src="/images/hodl-redefined.png"
            alt=""
            width={800}
            height={800}
            className="mx-auto w-auto h-auto"
          />
        </div>
        <div className="py-[3.3vmax]">
          <p className="text-mainBg text-center text-[12px]">
            CRYPTOHEALTH IS LISTED ON:
          </p>
          <div className="flex justify-between items-center gap-10">
            {data.map((item) => (
              <div key={item.id} className="w-[30%]">
                <Image
                  src={item.image}
                  alt=""
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section3;
