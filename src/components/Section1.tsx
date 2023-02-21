import React from "react";

const Section1 = () => {
  return (
    <section className="w-[80%] mx-auto text-center">
      <div className="py-[3.3vmax]">
        <p className="w-[70%] mx-auto text-[44px] leading-[56px] font-medium p-[3%] bg-[#fed5e0] rounded-2xl mt-10">
          <span className="text-text">CryptoHealth</span> is a sustainable{" "}
          <span className="text-secondaryColr font-bold">single payment</span>
          <br />
          medical insurance policy made for everyone
        </p>
      </div>
      <div className="py-[3.3vmax] text-[#f82252] text-[42px]">
        <p className="scale-x-90 leading-[48px]">
          No medical requirements
          <br />
          No geographic limitations
          <br />
          No expensive payments
        </p>
        <p className="uppercase mt-10 font-bold text-[72px] scale-125">
          just hold cht
        </p>
      </div>
    </section>
  );
};

export default Section1;
