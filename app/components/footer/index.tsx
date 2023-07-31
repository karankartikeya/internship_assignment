import React from "react";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";

const Footer = () => {
  return (
    <footer className="mt-12 w-full p-14">
      <div className="border-t-[1px] border-slate-500/30 ">
        <div className="flex flex-col md:flex-row py-4 md:py-8 md:px-4 w-fit xl:max-w-[2100px] mx-auto md:space-x-24  ">
          <SocialPart />
          <FooterColumns />
        </div>
      </div>
      <div className="flex space-x-10 text-xs md:text-sm py-4 items-center justify-center">
        <div className="text-white text-center text-opacity-60">
        decentralized lending and borrowing built on the solana blockchain.
        </div>
        <div className="text-white text-center text-opacity-60">
        All rights reserved © Jet Protocol 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
