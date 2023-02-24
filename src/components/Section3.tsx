import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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

  const img1Ref = useRef<any>(null);
  const img2Ref = useRef<any>(null);

  const [img1InView, setImg1Inview] = useState<boolean>();
  const [img2InView, setImg2Inview] = useState<boolean>();

  useEffect(() => {
    const img1Observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setImg1Inview(entry.isIntersecting);
      }
    });

    const img2Observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setImg2Inview(entry.isIntersecting);
      }
    });

    const img1ObserveRef = img1Ref.current;
    const img2ObserveRef = img2Ref.current;

    img1Observe.observe(img1Ref.current);
    img2Observe.observe(img2Ref.current);

    return () => {
      img1Observe.unobserve(img1ObserveRef);
      img2Observe.unobserve(img2ObserveRef);
    };
  }, []);

  return (
    <section>
      <div className="md:w-[80%] mx-auto">
        <div
          className={`py-[3.3vmax] transition-all duration-1000 ${
            img1InView ? "opacity-100" : "opacity-0"
          }`}
          ref={img1Ref}
        >
          <Image
            src="/images/hodl-redefined.png"
            alt=""
            width={800}
            height={800}
            className="mx-auto md:w-auto md:h-[276px] h-[164px] w-[450px]"
          />
        </div>
        <div className="py-[3.3vmax]">
          <p className="text-mainBg text-center text-[12px]">
            CRYPTOHEALTH IS LISTED ON:
          </p>
          <div
            className={`md:flex justify-between items-center gap-10 transition-all duration-1000 ${
              img2InView ? "opacity-100" : "opacity-0"
            }`}
            ref={img2Ref}
          >
            {data.map((item) => (
              <div
                key={item.id}
                className="md:w-[30%] my-10 min-h-[112px] flex items-center md:my-0 md:min-h-0"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={300}
                  height={300}
                  className="mx-auto cursor-pointer"
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
