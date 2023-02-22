import React, { useEffect, useRef, useState } from "react";

const Section5 = () => {
  const data = [
    {
      id: 1,
      title: "Length of Hodling CHT Tokens",
      des1: "The more you HODL, the more you can possibly claim. Multipliers are calculated based on the length of time a holder does not transfer $CHT to another address. HODL at least 3 months to be eligible to claim at least half the current USD value of your investment (subject to other conditions).",
      des2: "Shorter HODL limits (0.25X multiplier with a 6 week HODL) and larger multipliers (of up to 18.0X for a 60-month HODL) will be made available for support token holders.",
      des3: "",
    },
    {
      id: 2,
      title: "Hospital Billing Statement",
      des1: "Claim at most 30% of your hospital billing statement, regardless if it has already been paid by your primary medical insurance provider. Higher possible claim limits based on the hospital billing statement will be unlocked in the future by holding our support token and/or  our partner project’s tokens.",
      des2: "",
      des3: "",
    },
    {
      id: 3,
      title: "Reimbursement Cap Based on Length of HODL",
      des1: "USD value of reimbursements are limited based on length of HODLing CHT. A holder can reimburse at most 300 USD with a 3-month HODL or up to 7,500 USD with a 36-month HODL (subject to other conditions).",
      des2: "Additional ceiling limits for reimbursement (150 USD with a 6 week HODL and up to 15,000 USD for a 60-month HODL) will be made available for support token holders.",
      des3: "",
    },
    {
      id: 4,
      title: "Amount in the CryptoHealth Reimbursement Pool",
      des1: "All eligible holders can only reimburse at most 1% of the Reimbursement Pool, which will be maintained as CHT, BNB and USDC tokens within the project’s Treasury Wallet. However, the 1% limit will increase by 0.25% for every additional 6 months of hodling past the 1st year. By the 5th year, the Reimbursement Pool limit will be capped at 3%.",
      des2: "The said condition is most limiting in the short term, but will have a lesser effect on reimbursements at the longer term, as the Treasury will also collect from proceeds of other tokens under the Cryptohealth portfolio.",
      des3: "The project will maintain 100 million CHT in the Treasury as a Reserve Fund. All CHT in excess of 100 million, will be turned to BNB. Furthermore, a portion of the taxes from the trades of all support tokens will be sent to the Treasury, and will be turned to BNB to fund for reimbursements. USDC funds will come from paid partnership deals.",
    },
    {
      id: 5,
      title: "NFT, Support Token and Parter Token Hold",
      des1: "Holding our Seed Edition NFTs, support tokens, and our partner project’s tokens enable our holders additional bonus claims computed on top of the conditions mentioned above. Get as much as 6% claims bonus by holding one of each CryptoHealth Seed Edition V1 NFT, which are currently available at the Altura Marketplace. Click here to buy one for 15 BUSD.",
      des2: "",
      des3: "",
    },
  ];

  const [expand, setExpand] = useState<boolean>(false);
  const [active, setActive] = useState(0);

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

    t1Observe.observe(t1Ref.current);
    t2Observe.observe(t2Ref.current);

    return () => {
      t1Observe.unobserve(t1Ref.current);
      t2Observe.unobserve(t2Ref.current);
    };
  }, []);

  return (
    <section className="py-[6.6vmax]">
      <div className="md:flex">
        <div className="md:w-1/2 md:pr-[2%] md:text-end text-center">
          <h1 className="text-text md:text-[84px] md:leading-[84px] text-[48px]">
            CRYPTOHEALTH
          </h1>
          <p className="text-secondaryColr md:text-[40px] md:leading-[40px] text-[24px] font-medium">
            IS A SINGLE PAYMENT SOLUTION
          </p>
          <div className="md:w-full w-[85%] h-[1px] bg-mainBg mb-7 mt-5"></div>
          <p
            className={`bg-[#fed5e0] text-black rounded-r-[16px] p-[6%] mr-[15%] md:mr-0 text-[28px] leading-[36px] text-start font-medium transition-all duration-1000 ${
              t1InView ? "opacity-100" : "opacity-0"
            }`}
            ref={t1Ref}
          >
            Invest, hold and claim. Reimburse and receive medical financial
            assistance as the need arises, as long as you HODL your tokens in
            the blockchain.
          </p>
        </div>
        <div className="md:w-1/2 ml-[4%] pl-[1%] pr-[10%]">
          <p className="text-[24px] text-text font-medium mb-7 mt-10 md:mt-0">
            The amount of claims you can receive from your CryptoHealth Crypto
            Medical Insurance policy is determined by the following limitations
            that were made to ensure sustainability of the Reimbursement Pool:
          </p>
          <div
            className={`transition-all duration-1000 ${
              t2InView ? "opacity-100" : "opacity-0"
            }`}
            ref={t2Ref}
          >
            {data.map((item) => (
              <div
                className="relative last-of-type:border-b last-of-type:border-text cursor-pointer overflow-hidden"
                onClick={() => {
                  if (item.id !== active) {
                    setExpand(true);
                  } else {
                    setExpand(!expand);
                  }
                  setActive(item.id);
                }}
              >
                <div
                  key={item.id}
                  className="relative pt-[15px] text-text font-medium border-t border-text transition-al duration-500"
                >
                  <div className="relative mb-4 font-semibold pr-6 md:pr-0">
                    {item.title}
                    <div className="absolute right-0 top-[40%] w-[14px] h-[14px]">
                      <div
                        className={`bg-text w-[14px] h-[1px] absolute right-0 top-1/2 transition-all duration-300 ${
                          expand && active === item.id
                            ? "rotate-0"
                            : "rotate-90"
                        }`}
                      ></div>
                      <div className="bg-text w-[14px] h-[1px] absolute right-0 top-1/2"></div>
                    </div>
                  </div>
                  <div
                    className={`text-[12px] transition-all duration-300 font-normal md:font-medium ${
                      expand && active === item.id && item.des1 && !item.des2
                        ? "md:h-[80px] h-[120px]"
                        : expand &&
                          active === item.id &&
                          item.des2 &&
                          !item.des3
                        ? "md:h-[130px] h-[190px]"
                        : expand && active === item.id && item.des3
                        ? "md:h-[200px] h-[350px]"
                        : "h-0"
                    }`}
                  >
                    <div>{item.des1}</div>
                    <div
                      className={`${
                        expand && active === item.id && "pt-[15px]"
                      }`}
                    >
                      {item.des2}
                    </div>
                    <div
                      className={`${
                        expand && active === item.id && "pt-[15px]"
                      }`}
                    >
                      {item.des3}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
