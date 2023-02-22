import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-mainBg py-[3.3vmax] text-white text-center">
      <div className="w-[60%] mx-auto">
        <h2 className="text-[40px] font-medium mb-8">
          Learn More about CryptoHealth
        </h2>
        <div className="w-[80%] mx-auto text-[14px] flex justify-between">
          <button className="border-[2px] border-white rounded-full py-[23px] transition-all duration-300 hover:bg-white w-[28%]">
            Meet the Team
          </button>
          <button className="border-[2px] border-white rounded-full py-[23px] transition-all duration-300 hover:bg-white w-[28%]">
            Read the Whitepaper
          </button>
          <button className="border-[2px] border-white rounded-full py-[23px] transition-all duration-300 hover:bg-white w-[28%]">
            Check our NFT
          </button>
        </div>
        <div className="w-[90%] mx-auto mt-[80px]">
          <p className="text-[24px]">
            <i>
              Like what you read and want to support our vision in another way?
              Donate and help build the crypto medical insurance fund of the
              future!
            </i>
          </p>
          <p className="py-10 text-[30px] font-bold underline underline-offset-[6px] cursor-pointer">
            0x45d508e3cbfd74ed2bddc4fd168389242da76930
          </p>
          <p className="w-[60%] mx-auto text-[12px]">
            Donations are accepted in BNB and USDC, and will be used to build
            our Reimbursement Pool. All donations, regardless of the amount,
            shall be acknowledged in the website.
          </p>
        </div>
        <div className="mt-[120px] mb-[60px]">
          <h4 className="text-[24px]">PROJECT UPDATES</h4>

          <p className="text-[12px]">Updated February 2, 2023 1:43AM UTC</p>
        </div>
        <div className="text-[12px]">
          <p>
            PERMANENT TAX DECREASE TO 5% FOR BUYS AND SELLS, AND 10% TO TRANSFER
            TAXES{" "}
          </p>
          <p className="my-5">
            POTENTIAL PARTNERSHIP WITH{" "}
            <span className="underline underline-offset-2 cursor-pointer">
              SPACECADETS NFT COMMUNITY
            </span>{" "}
            FOR UTILITY PROVISION IN THE WORKS
          </p>
          <p className="my-5">
            ONLINE CALCULATOR FOR CLAIMS IN THE WORKS, CHECK IT OUT{" "}
            <span className="underline underline-offset-2 cursor-pointer">
              HERE
            </span>
          </p>
          <p>
            REIMBURSEMENT POOL LIMIT NOW GROWS WITH HODLING PERIOD, MAXIMUM OF
            3%
          </p>
        </div>
        <button className="w-[30%] mx-auto py-6 border-[2px] border-white rounded-full text-[14px] font-medium my-[80px] transition-all duration-300 hover:bg-white">
          Announcement Channel
        </button>

        <p className="mt-[60px] text-[12px] mb-10">
          CryptoHealth © 2022 — admin@cryptoheath.life
        </p>

        <div className="w-1/3 flex justify-center items-center gap-4 mx-auto text-[18px] mb-10">
          <FaTwitter />
          <FaFacebookF />
          <BiLinkAlt />
          <AiOutlineMail />
          <FaDiscord />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
