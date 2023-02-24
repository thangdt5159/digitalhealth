import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-mainBg md:py-[3.3vmax] py-[60px] text-white text-center">
      <div className="md:w-[60%] w-[90%] mx-auto">
        <h2 className="md:text-[40px] text-[24px] font-medium mb-8">
          Learn More about CryptoHealth
        </h2>
        <div className="md:w-[80%] mx-auto text-[14px] md:flex justify-between font-medium">
          <button className="border-[2px] border-white rounded-full md:py-[23px] py-[18px] mb-3 md:mb-0 transition-all duration-300 hover:bg-white md:w-[28%] w-full">
            Meet the Team
          </button>
          <button className="border-[2px] border-white rounded-full md:py-[23px] py-[18px] mb-3 md:mb-0 transition-all duration-300 hover:bg-white md:w-[28%] w-full">
            Read the Whitepaper
          </button>
          <button className="border-[2px] border-white rounded-full md:py-[23px] py-[18px] mb-3 md:mb-0 transition-all duration-300 hover:bg-white md:w-[28%] w-full">
            Check our NFT
          </button>
        </div>
        <div className="md:w-[90%] mx-auto mt-[80px]">
          <p className="text-[24px] font-medium">
            <i>
              Like what you read and want to support our vision in another way?
              Donate and help build the crypto medical insurance fund of the
              future!
            </i>
          </p>
          <p className="py-10 md:text-[30px] font-bold underline underline-offset-[6px] cursor-pointer break-all">
            0x45d508e3cbfd74ed2bddc4fd168389242da76930
          </p>
          <p className="md:w-[60%] mx-auto md:text-[12px] text-[14px]">
            Donations are accepted in BNB and USDC, and will be used to build
            our Reimbursement Pool. All donations, regardless of the amount,
            shall be acknowledged in the website.
          </p>
        </div>
        <div className="mt-[120px] mb-[60px]">
          <h4 className="text-[24px]">PROJECT UPDATES</h4>

          <p className="text-[12px]">Updated February 2, 2023 1:43AM UTC</p>
        </div>
        <div className="text-[12px] tracking-wider md:tracking-normal">
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
        <button className="md:w-[30%] w-[80%] mx-auto md:py-6 py-5 border-[2px] border-white rounded-full text-[14px] font-medium my-[80px] transition-all duration-300 hover:bg-white">
          Announcement Channel
        </button>

        <p className="mt-[60px] md:text-[12px] text-[14px] mb-10">
          DigitalHealth © 2023 — admin@digitalhealth.world
        </p>

        <div className="md:w-1/3 flex justify-center items-center gap-4 mx-auto md:text-[18px] text-[24px] mb-10">
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
