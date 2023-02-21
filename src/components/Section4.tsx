import Image from "next/image";
import React from "react";

const Section4 = () => {
  const data = [
    {
      id: 1,
      image: "/images/hospital.png",
      title: "Hospital Cost Reimbursement",
      des: "CryptoHealth’s primary utility is as a single payment medical insurance policy that allows hodlers of the $CHT token to receive cryptocurrency  hospital admission costs",
    },
    {
      id: 2,
      image: "/images/reflection.png",
      title: "Passive Income by Automatic CHT Reflections",
      des: "Holding our token earns 1% rewards in CHT. Holders will slowly increase their bag, and possible reimbursement claim in the future because of the automatic reflections they receive with each sell",
    },
    {
      id: 3,
      image: "/images/grow.png",
      title: "Providing Options for Growing Your Portfolio",
      des: "CryptoHealth will slowly release a portfolio of support tokens that will boost the amount our holders can claim, while providing funds for the Reimbursement Pool, marketing, CHT buy back and LP generation.",
    },
  ];

  return (
    <section className="bg-[#ef3770] text-center text-white">
      <div className="w-[80%] mx-auto py-[3.3vmax]">
        <div className="pb-[70px] text-[32px] font-medium">
          CryptoHealth Utilities
        </div>
        <div className="flex justify-between items-center">
          {data.map((item) => (
            <div key={item.id} className="w-1/3 text-[#ffffffbd]">
              <Image
                src={item.image}
                alt=""
                width={150}
                height={150}
                className="mx-auto mb-[8%]"
              />
              <h3 className="text-[20px] w-3/4 mx-auto font-medium">
                {item.title}
              </h3>
              <p className="w-3/4 mx-auto text-[12px] mt-[4%]">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
