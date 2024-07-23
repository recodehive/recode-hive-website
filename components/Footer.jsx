import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#3F3F3F] w-full flex justify-around h-[251px]">
        <div className="w-[288px] m-auto h-[125px]">
          <div className="w-full h-[67px] my-5 bg-[#FFFFFF]"></div>
          <div className="grid grid-cols-5">
            <div className="w-[49px] h-[41px] bg-[#FFFFFF]"></div>
            <div className="w-[49px] h-[41px] bg-[#FFFFFF]"></div>
            <div className="w-[49px] h-[41px] bg-[#FFFFFF]"></div>
            <div className="w-[49px] h-[41px] bg-[#FFFFFF]"></div>
          </div>
        </div>
        <div className="w-[115px] text-white m-auto h-[120px]">
          <h4 className="font-bold my-2 text-base">QUICK LINKS</h4>
          <ul className="w-[94px] h-[92px]">
            <li className="text-sm">Tech Blogs</li>
            <li className="text-sm">Design Blogs</li>
            <li className="text-sm">Tutorial Blogs</li>
          </ul>
        </div>
        <div className="w-[115px] text-white m-auto h-[120px]">
          <h4 className="font-bold my-2 text-base">Community</h4>
          <ul className="w-[94px] h-[92px]">
            <li className="text-sm">Hive Team</li>
            <li className="text-sm">Carrer</li>
          </ul>
        </div>
        <div className="w-[115px] text-white m-auto h-[120px]">
          <h4 className="font-bold my-2 text-base">SUPPORT</h4>
          <ul className="w-[94px] h-[92px]">
            <li className="text-sm">Contact Us</li>
            <li className="text-sm">Help Center</li>
            <li className="text-sm">FAQs</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex text-center justify-center items-center h-[68px] bg-[#CCCCCC]">
        <p className="font-bold">
          © 2022 — Lets Build Community. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
