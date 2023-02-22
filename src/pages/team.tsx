import React from "react";

const Team = () => {
  const data = [
    {
      id: 1,
      image: "/images/",
      name: "Name",
      contact: "contact address",
      des: "description",
    },
    {
      id: 2,
      image: "/images/",
      name: "Name",
      contact: "contact address",
      des: "description",
    },
    {
      id: 3,
      image: "/images/",
      name: "Name",
      contact: "contact address",
      des: "description",
    },
  ];

  return (
    <>
      <section className="bg-mainBg pt-[150px] pb-[130px] text-center text-white">
        <div className="w-[80%] mx-auto">
          <h1 className="text-[48px] uppercase font-medium mt-[120px]">
            fully doxxed, transparent
          </h1>
          <h1 className="text-[48px] uppercase font-medium">
            and dedicated team
          </h1>
          <p className="mt-10 scale-y-125 tracking-wide">
            Core team is fully doxxed, and can be reached thru video chat in our
            CryptoHealth Telegram Community
          </p>
        </div>
      </section>
      <section className="py-[6.6vmax]">
        <div className="text-text text-center w-[80%] mx-auto">
          <h2 className="text-[32px]">CORE TEAM MEMBERS</h2>
          <div className="flex justify-between items-center mx-[80px] my-[60px]">
            {data.map((item) => (
              <div key={item.id} className="w-1/3">
                <div className="flex justify-center items-center mx-auto w-[172px] h-[172px] text-white bg-gray-300 rounded-full">
                  172x172
                </div>
                <h4 className="text-[24px] scale-y-110 my-6">{item.name}</h4>
                <p className="my-3">{item.contact}</p>
                <p>{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
