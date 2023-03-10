import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Section6 = () => {
  const data = [
    {
      id: 1,
      image: "/images/invest.png",
      title: "Crypotocurrency Donations",
      des: "CryptoHealth will partner with community-vetted public health facilities who will participate as donation recipients that receive $CHT from token holders. Donation utility aims to maintain a steady price using special transfer functions that limit token sells, and reward frequent donors with more $CHT once they reach a certain amount of donated tokens. ",
    },
    {
      id: 2,
      image: "/images/grow.png",
      title: "Safe and Long Term Investments",
      des: "CryptoHealth will slowly release a portfolio of support tokens that will boost the amount our holders can claim, while providing funds for the Reimbursement Pool, marketing, CHT buy back and LP generation.",
    },
    {
      id: 3,
      image: "/images/support.png",
      title: "Dividend Rewards for Supporters",
      des: "CryptoHealth will build a BUSD Treasury that collects funds from all the tokens in the  project portfolio. BUSD Dividends will be given away to CryptoHealth Founder NFT holders, and investors hodling at least 1% of the supply, as the BUSD Treasury reaches its milestone collections. Terms and conditions apply. Learn about the BUSD Reward System here.",
    },
    {
      id: 4,
      image: "/images/consult.png",
      title: "Medical Consultation Services",
      des: "Using the BUSD Treasury, CryptoHealth will buyback CHT which will be transferred to the Employment Wallet. Reflections will be used to provide compensation for medical doctors who will be hired to initially provide teleconsultation services, and as development progresses, provide health services in Cryptohealth Medical Clinics constructed on selected locations around the globe.",
    },
    {
      id: 5,
      image: "/images/reward.png",
      title: "Crypto Payments for Medical Services",
      des: "Donate $CHT to our partner organizations and health facilities, and earn 1.5X to 3X your initial bag. The $CHT smart contract is coded in a way that makes donations fun and rewarding for both holders and partners.",
    },
    {
      id: 6,
      image: "/images/create.png",
      title: "Nourishing and Rewarding the Youth's Creativity",
      des: "CryptoHealth, thru future partnerships, will hold Film Festivals and NFT Competitions for university students coming from around the globe. Prizes for the contest will come from reflections being collected by the Treasury Wallet",
    },
  ];

  const t1Ref = useRef<any>(null);
  const img2Ref = useRef<any>(null);

  const [t1InView, setT1Inview] = useState<boolean>();
  const [img2InView, setImg2Inview] = useState<boolean>();

  useEffect(() => {
    const t1Observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setT1Inview(entry.isIntersecting);
      }
    });

    const img2Observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setImg2Inview(entry.isIntersecting);
      }
    });

    const t1ObserveRef = t1Ref.current;
    const img2ObserveRef = img2Ref.current;

    t1Observe.observe(t1Ref.current);
    img2Observe.observe(img2Ref.current);

    return () => {
      t1Observe.unobserve(t1ObserveRef);
      img2Observe.unobserve(img2ObserveRef);
    };
  }, []);

  return (
    <section className="py-[3.3vmax] bg-[#ef3770]">
      <div className="w-[80%] mx-auto text-white text-center">
        <div
          className={`pb-[70px] text-[32px] font-medium transition-all duration-1000 ${
            t1InView ? "opacity-100" : "opacity-0"
          }`}
          ref={t1Ref}
        >
          Future Utilities for Development
        </div>
        <div
          className={`md:flex flex-wrap text-center transition-all duration-1000 ${
            img2InView ? "opacity-100" : "opacity-0"
          }`}
          ref={img2Ref}
        >
          {data.map((item) => (
            <div key={item.id} className="md:w-1/3 text-[#ffffff] mb-8">
              <Image
                src={item.image}
                alt=""
                width={150}
                height={150}
                className="mx-auto mb-[8%]"
              />
              <h3 className="text-[20px] md:w-3/4 mx-auto font-medium text-[#ffffffbd]">
                {item.title}
              </h3>
              <p className="md:w-3/4 mx-auto text-[12px] mt-[4%]">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
