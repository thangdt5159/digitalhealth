import Image from "next/image";
import React from "react";

const Nft = () => {
  const data = [
    {
      id: 1,
      image: "/images/ruby-front.png",
      title: "Ruby Red",
      value: "FINANCIAL RISK PROTECTION",
      des: "“Medical Insurance in Crypto”",
    },
    {
      id: 2,
      image: "/images/sapphire-front.png",
      title: "Sapphire Blue",
      value: "SUPPORT HEALTH FACILITIES",
      des: "“Donations Paid in Crypto”",
    },
    {
      id: 3,
      image: "/images/emerald-front.png",
      title: "Emerald Green",
      value: "SUPPORT MEDICAL KNOWLEDGE",
      des: "“Contests, Grants and Scholarships”",
    },
    {
      id: 4,
      image: "/images/citrine-front.png",
      title: "Citrine Yellow",
      value: "INVESTMENT VEHICLES",
      des: "“CHT Reflections, Baby Tokens, Partnerships”",
    },
    {
      id: 5,
      image: "/images/topaz-front.png",
      title: "Topaz Orange",
      value: "ONE HEALTH INITIATIVES",
      des: "“Animal and Environmental Health”",
    },
    {
      id: 6,
      image: "/images/amethyst-front.png",
      title: "Amethyst Purple",
      value: "HEALTH CARE PROVISION",
      des: "“Medical Services and Payments”",
    },
  ];

  return (
    <>
      <section className="bg-mainBg pt-[150px] pb-[130px] text-center text-white">
        <div className="w-[80%] mx-auto">
          <h1 className="text-[48px] uppercase font-medium mt-[120px]">
            CryptoHealth
          </h1>
          <h1 className="text-[48px] uppercase font-medium">
            non fungible tokens
          </h1>
          <p className="mt-10 scale-y-[1.3] tracking-wide">
            Our own line of limited NFTs with unique utilities that complement
            your experience
          </p>
          <p className="mt-4 scale-y-[1.3] tracking-wide">
            Check out our{" "}
            <span className="underline underline-offset-4 cursor-pointer">
              Official NFT Account
            </span>{" "}
            in TreasureLand
          </p>
        </div>
      </section>
      <section>
        <div className="w-[80%] mx-auto text-text text-center">
          <div className="py-[3.3vmax]">
            <h2 className="text-[32px] my-6 font-medium">
              CRYPTOHEALTH SEED EDITION - 1
            </h2>
            <p className="text-[18px] my-3 scale-y-110">
              The CryptoHealth Seed Edition - 1 NFT is a limited set of rotating
              NFT coins focusing on CryptoHealth’s utilities.
              <br />
              Hold CryptoHealth and own a Seed NFT for at least one month to get
              a 1% bonus on top of the calculated claims.
              <br />
              Increase the bonus to 6% when you own one of each of the 6
              available designs.
            </p>
          </div>
          <div className="py-[3.3vmax] flex flex-wrap gap-y-[80px]">
            {data.map((item) => (
              <div key={item.id} className="w-1/3">
                <Image
                  src={item.image}
                  alt=""
                  width={312}
                  height={312}
                  className="mx-auto"
                />
                <h3 className="text-[24px] font-medium scale-y-110">
                  {item.title}
                </h3>
                <p className="my-3 text-[14px] scale-y-110">{item.value}</p>
                <p className="text-[14px] scale-y-110">
                  <i>{item.des}</i>
                </p>
                <button className="uppercase mt-4 border-2 border-text rounded-full px-6 py-3 text-[12px] transition-all duration-300 hover:text-white hover:bg-text">
                  buy now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Nft;
