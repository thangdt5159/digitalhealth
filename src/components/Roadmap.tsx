import React, { useEffect, useRef, useState } from "react";

const Roadmap = () => {
  const [active, setActive] = useState(0);
  const [expand, setExpand] = useState<boolean>(false);

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

    const t1ObserveRef = t1Ref.current;
    const t2ObserveRef = t2Ref.current;

    t1Observe.observe(t1Ref.current);
    t2Observe.observe(t2Ref.current);

    return () => {
      t1Observe.unobserve(t1ObserveRef);
      t2Observe.unobserve(t2ObserveRef);
    };
  }, []);

  return (
    <section>
      <div className="md:w-[63%] w-[90%] md:py-[3.3vmax] py-[50px] text-text font-medium mx-auto">
        <h1
          className={`md:text-[88px] text-[28px] text-center md:text-inherit transition-all duration-1000 ${
            t1InView ? "opacity-100" : "opacity-0"
          }`}
          ref={t1Ref}
        >
          OUR ROADMAP TO SUCCESS
        </h1>
        <div className="h-[1px] w-full bg-text md:mt-10 mt-[50px]"></div>
        <p
          className={`md:w-[80%] mx-auto text-[18px] text-black font-normal scale-y-[1.05] md:scale-y-100 md:font-medium text-center py-10 transition-all duration-1000 ${
            t1InView ? "opacity-100" : "opacity-0"
          }`}
        >
          CryptoHealth is not just a token. We are a start up team that aims to
          build something new and relevant for everyone. As newcomers in the
          cryptocurrency space, we start with zero credibility. We need to prove
          ourselves first and gain people’s trust in order to become successful
          in materializing our vision to become pioneers in the industry.{" "}
        </p>

        {/* 1 */}
        <div
          className={`relative border-t border-text py-5 cursor-pointer delay-500 transition-all duration-1000 ${
            t2InView ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setActive(1);
            if (active !== 1) {
              setExpand(true);
            } else {
              setExpand(!expand);
            }
          }}
          ref={t2Ref}
        >
          <div
            className={`absolute top-[30px] left-2 border-r border-b border-text w-[20px] h-[20px] transition-all ${
              expand && active === 1
                ? "-rotate-[135deg]"
                : "rotate-45 -translate-y-2"
            }`}
          ></div>
          <h3 className="text-center text-[22px] select-none">
            CryptoHealth as a Token
          </h3>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expand && active === 1 ? "md:h-[310px] h-[600px]" : "h-0"
            }`}
          >
            <ol className="md:w-[62%] w-[80%] scale-y-[1.1] md:scale-y-100 mx-auto text-[12px] font-normal list-decimal">
              <li className="mb-2 md:mt-5 mt-10">
                Launch a safe BEP-20 token (CHT), fully doxxed, and with burned
                liquidity
              </li>
              <li className="mb-2">
                Reward our holders by providing a secure investment that grows
                overtime thru token reflections, and pays back on a continuous
                and as needed basis without losing your initial investment by
                reimbursing a part of your hospitalization costs
              </li>
              <li>
                Provide donation services that reward both donation recipients
                and the donors from our community
              </li>
              <li>
                Reward our Founder NFT holders and large bag hodlers by
                committing regular BUSD dividends as our thanks for providing a
                stable floor price
              </li>
              <li>
                Add and secure more Liquidity Pool to raise floor price, thru
                regular buybacks and manual liquidity burns conducted by the
                Development Wallet, and from our NFT sales
              </li>
              <li>
                Secure and maintain a healthy amount of CHT and BNB reserves in
                the Treasury Fund’s Reimbursement Pool, to be used to pay for
                future hospital cost reimbursement claims of our holders
              </li>
              <li>
                Build a strong and supportive community by providing regular
                doxxed AMAs and video chats with the team every Saturday, 2PM
                UTC
              </li>
              <li className="mb-5">
                Grow the community organically by active social media presence,
                and investing in long term marketing strategies{" "}
              </li>
            </ol>
          </div>
        </div>

        {/* 2 */}
        <div
          className={`relative border-t border-text py-5 cursor-pointer delay-500 transition-all duration-1000 ${
            t2InView ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setActive(2);
            if (active !== 2) {
              setExpand(true);
            } else {
              setExpand(!expand);
            }
          }}
        >
          <div
            className={`absolute top-[30px] left-2 border-r border-b border-text w-[20px] h-[20px] transition-all ${
              expand && active === 2
                ? "-rotate-[135deg]"
                : "rotate-45 -translate-y-2"
            }`}
          ></div>
          <h3 className="text-center text-[22px] select-none">
            CryptoHealth as a Portfolio
          </h3>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expand && active === 2 ? "md:h-[610px] h-[1160px]" : "h-0"
            }`}
          >
            <ol className="md:w-[62%] w-[80%] scale-y-[1.1] md:scale-y-100 mx-auto md:py-5 py-[70px] text-[12px] font-normal list-decimal">
              <li>
                Release a family of Baby Tokens that are aimed to improve user
                benefits, encourage long term hodling, act as other vehicles of
                investments, and most importantly - secure additional funding
                for development and the Reimbursement Pool
                <p>
                  {">"} Q-HEALTH will increase multipliers to increase possible
                  claim amount.
                </p>
                <p>
                  {">"} X-HEALTH will decrease minimum length of hold, allowing
                  CHT holders to reimburse hospital expenses within the first
                  month of holding CHT. X-HEALTH will also allow reimbursements
                  with new multipliers by the 48th and 60th month of hodl.
                </p>
                <p>
                  {">"} CHTPRO is a limited amount baby token that allows a long
                  term holder to sell his CHT to the Treasury Wallet via buyback
                  at a higher price than the DEX price.
                </p>
              </li>
              <li>
                Release a family of Expanded Baby Tokens that are aimed to fund
                other utilities, increase Reimbursement Pool, provide funds for
                future development, and increase the amount a holder is able to
                claim from the Treasury (disregarding the limits, just like the
                Seed NFTs). All Expanded Baby Tokens will be deflationary, with
                1% maximum wallet size.
                <p>
                  {">"} CHINU will be our own meme token, providing benefits for
                  animal health. Holders of CHINU will be given bonus USDs at
                  the time of claim.
                </p>
                <p>
                  {">"} CHTGROW will be our token providing benefits for
                  environmental health. Holders of E-HEALTH will be given bonus
                  USDs at the time of claim.{" "}
                </p>
                <p>
                  {">"} M-HEALTH will be aimed at increasing benefits for
                  hospitalizations due to mental health concerns thru increased
                  multipliers. Non mental health hospitalizations will receive
                  bonus USDs.
                </p>
                <p>
                  {">"} S-HEALTH will be aimed at increasing benefits for
                  hospitalizations due to surgical reasons thru increased
                  multipliers. Non surgical cases will receive bonus USDs.{" "}
                </p>
                <p>
                  {">"} C-HEALTH will be aimed at increasing benefits for
                  hospitalizations due to cancer. Cancer patients will receive
                  increased multipliers, and can claim at most 6X in a year. Non
                  cancer claims will receive bonus USDs.
                </p>
              </li>
              <li>
                CryptoHealth will forge HODL Buddy Partnerships with safe and
                doxxed reflection tokens. In the long run, CryptoHealth will act
                as a VC that supports other utility tokens in the BSC network.
                Furternmore, a dedicated call channel will be launched to
                support new projects in the Binance Smart Chain. Projects being
                advertised should meet at least 5 out of 8 metrics to be
                advertised. Proceeds for the call channel, Doctor Dev Safe
                Calls, will be used for CHT buyback and liquidity pool
                generation.{" "}
              </li>
            </ol>
          </div>
        </div>

        {/* 3 */}
        <div
          className={`relative border-t border-text py-5 cursor-pointer delay-500 transition-all duration-1000 ${
            t2InView ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setActive(3);
            if (active !== 3) {
              setExpand(true);
            } else {
              setExpand(!expand);
            }
          }}
        >
          <div
            className={`absolute top-[30px] left-2 border-r border-b border-text w-[20px] h-[20px] transition-all ${
              expand && active === 3
                ? "-rotate-[135deg]"
                : "rotate-45 -translate-y-2"
            }`}
          ></div>
          <h3 className="text-center text-[22px] select-none">
            CryptoHealth as a Service
          </h3>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expand && active === 3 ? "md:h-[420px] h-[830px]" : "h-0"
            }`}
          >
            <ol className="md:w-[62%] w-[80%] scale-y-[1.1] md:scale-y-100 mx-auto md:py-5 py-14 text-[12px] font-normal list-decimal">
              <li>
                elease of our own Fiat-to-CHT exchange system, where the general
                population can avail CryptoHealth tokens directly with fiat, and
                be reassured hospital cost reimbursement starting the 90th day
                of holding.
                <p>
                  {">"} Target buyers will be crypto-naive (i.e. they do not
                  know how to trade and sell tokens) clients, who will be
                  assisted in making their own BSC address, and be transferred
                  CHT tokens{" "}
                </p>
                <p>
                  {">"} CryptoHealth will open a special BSC multisignature
                  address (to be announced) that will be used to conduct buyback
                  and transfer of tokens). Buyers will transfer fiat to a
                  dedicated bank account that receives fiat, which will in turn
                  send BNB to the DEX address.{" "}
                </p>
                <p>
                  {">"} CryptoHealth will hire people thru the Employment Wallet
                  to be operate to operate kiosks on a global scale. These
                  kiosks will be used to facilitate CHT-to-Fiat exchanges. CHT
                  will be sold as a digital product, outside the cryptocurrency
                  space.{" "}
                </p>
              </li>
              <li>
                CryptoHealth will provide medical services as a subscription
                service. Our Employment Wallet will tap health professionals
                from various disciplines and areas around the globe. Holding CHT
                for the required period of time will be the basis of being
                provided free teleconsultation services.
                <p>
                  {">"} Services that we can provide may be further expanded as
                  the Treasury builds up thru trading of CHT, the baby tokens,
                  expanded baby tokens, and the HODL Buddy Partnerships
                </p>
                <p>
                  {">"} CryptoHealth will release single use NFTs with medical
                  utilities, which are aimed to provide regular medical
                  financial assistance for eligible holders of the CHT token
                  (i.e. Hold CHT for minimum 1 year, buy our NFT for
                  hypertensive patients for $100, and receive $600 worth of
                  financial assistance by proof of illness, and as you continue
                  to hold CHT)
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* 4 */}
        <div
          className={`relative border-t border-b border-text py-5 cursor-pointer delay-500 transition-all duration-1000 ${
            t2InView ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            setActive(4);
            if (active !== 4) {
            } else {
              setExpand(!expand);
            }
          }}
        >
          <div
            className={`absolute top-[30px] left-2 border-r border-b border-text w-[20px] h-[20px] transition-all ${
              expand && active === 4
                ? "-rotate-[135deg]"
                : "rotate-45 -translate-y-2"
            }`}
          ></div>
          <h3 className="text-center text-[22px] select-none">
            CryptoHealth as an Institution
          </h3>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expand && active === 4 ? "md:h-[340px] h-[700px]" : "h-0"
            }`}
          >
            <ol className="md:w-[62%] w-[80%] scale-y-[1.1] md:scale-y-100 mx-auto md:py-5 py-12 text-[12px] font-normal list-decimal">
              <li className="mb-2">
                The long term vision (think more than 3 years) of CryptoHealth
                is to establish a company that provides services in the form of
                cryptocurrency. Becoming a registered crypto company provides us
                the legal framework to do the following:
                <p>
                  {">"} Coordinate with local officials and partner
                  organizations in providing crypto-insurance on a larger scale
                  (i.e. transact by bulk and provide continuous crypto health
                  insurance to their members)
                </p>
                <p>
                  {">"} Coordinate with local officials in constructing primary
                  health clinics thru the BUSD Treasury Fund collections, with
                  manpower being paid by reflections from the Treasury Wallet{" "}
                </p>
                <p>
                  {">"} Partner with clinics, pharmacies and hospitals in using
                  CHT as a mode of payment for provided medical services. Our
                  partners will have the benefit of earning more thru payments
                  made in CHT (Sample use case: Patient has $600 bill, pays
                  partner in $600 worth of CHT in a multisig wallet excluded
                  from tax. Partner sends $600 worth of CHT to the Treasury,
                  while Treasury transfers $660 in Fiat or stablecoin to our
                  partner)
                </p>
              </li>
              <li>
                On the longer timeframe, CryptoHealth will partner with
                developers and medical organizations in developing a blockchain
                tailorfit for the purchase/availment of medical goods and
                services{" "}
              </li>
              <li>
                he CryptoHealth Team will start allocating funds to start a BUSD
                Treasury for development purposes. Allocation for a BUSD
                Treasury starts once at least 1 Platinum CryptoHealth Founder
                NFT has been sold, and at least 2 baby tokens have been released
                in circulation.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
