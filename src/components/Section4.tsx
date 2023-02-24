import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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
    <section className="bg-[#ef3770] text-center text-white">
      <div className="w-[80%] mx-auto py-[3.3vmax]">
        <div
          className={`pb-[70px] text-[32px] font-medium transition-all duration-1000 ${
            t1InView ? "opacity-100" : "opacity-0"
          }`}
          ref={t1Ref}
        >
          CryptoHealth Utilities
        </div>
        <div
          className={`md:flex justify-between items-center transition-all duration-1000 ${
            img2InView ? "opacity-100" : "opacity-0"
          }`}
          ref={img2Ref}
        >
          {data.map((item) => (
            <div key={item.id} className="md:w-1/3 text-[#ffffffbd]">
              <Image
                src={item.image}
                alt=""
                width={150}
                height={150}
                className="mx-auto mb-[8%]"
              />
              <h3 className="text-[20px] md:w-3/4 mx-auto font-medium">
                {item.title}
              </h3>
              <p className="md:w-3/4 mx-auto text-[12px] md:mt-[4%] my-[4%]">
                {item.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
