import React, { useEffect, useRef, useState } from "react";

const Section1 = () => {
  const t1Ref = useRef<any>(null);
  const t2Ref = useRef<any>(null);

  const [t1InView, setT1InView] = useState<boolean>();
  const [t2InView, setT2InView] = useState<boolean>();

  useEffect(() => {
    const t1Observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setT1InView(entry.isIntersecting);
      }
    });

    const t2Observe = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setT2InView(entry.isIntersecting);
      }
    });

    const t1ObserveRef = t1Ref.current
    const t2ObserveRef = t2Ref.current

    t1Observe.observe(t1Ref.current);
    t2Observe.observe(t2Ref.current);

    return () => {
      t1Observe.unobserve(t1ObserveRef);
      t2Observe.unobserve(t2ObserveRef);
    };
  }, []);

  return (
    <section className="md:w-[80%] mx-auto text-center">
      <div className="py-[3.3vmax]">
        <p
          className={`md:w-[70%] w-[90%] mx-auto md:text-[44px] text-[40px] md:leading-[56px] leading-[48px] font-medium p-[3%] bg-[#fed5e0] rounded-2xl mt-10 transition-all duration-[1000ms] ${
            t1InView ? "opacity-100" : "opacity-0"
          }`}
          ref={t1Ref}
        >
          <span className="text-text">CryptoHealth</span> is a sustainable{" "}
          <span className="text-secondaryColr font-bold">single payment</span>
          <br />
          medical insurance policy made for everyone
        </p>
      </div>
      <div className="py-[3.3vmax] text-[#f82252] md:text-[42px] text-[32px] tracking-tight">
        <p
          className={`scale-x-90 leading-[48px] transition-all duration-[1000ms] ${
            t2InView ? "opacity-100" : "opacity-0"
          }`}
          ref={t2Ref}
        >
          No medical requirements
          <br />
          No geographic limitations
          <br />
          No expensive payments
        </p>
        <p className="uppercase mt-10 font-bold md:text-[72px] text-[48px] mb-10 md:mb-0 md:scale-125">
          just hold cht
        </p>
      </div>
    </section>
  );
};

export default Section1;
