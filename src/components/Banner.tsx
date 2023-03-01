import React from "react";

const Banner = () => {
  return (
    <section className="border-b border-white/10">
      <div className="relative border-x border-white/10 w-full md:min-h-[110px] mx-auto">
        <div className="overflow-hidden flex mx-auto pt-10 md:py-10 text-text text-[24px] md:text-[32px] font-medium">
          <div className="slide1 whitespace-nowrap px-1">
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner
          </div>
          <div className="slide2 whitespace-nowrap px-1">
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner Banner Banner Banner
            Banner Banner Banner Banner Banner Banner 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
