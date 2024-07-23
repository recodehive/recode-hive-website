import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-[72px] w-full flex items-center justify-between bg-[#D9D9D9]">
      <div className="flex justify-between w-full px-10">
        <div  className="w-[201px] ml-5">
          <Image
            src="/assets/Home/Logo_Home.png"
            alt=""
            width={181}
            height={38}
          />
        </div>
        <div className="w-[597px] p-2 flex justify-between px-6">
          <Link href="/" className="text-[#000000] w-auto">
            Home
          </Link>
          <Link href="/blog" className="text-[#000000] w-auto">
            Explore
          </Link>
          <Link href="/" className="text-[#000000] w-auto">
            About
          </Link>
          <Link href="/" className="text-[#000000] w-auto">
            Events
          </Link>
          <Link href="/" className="text-[#000000] w-auto">
            Sign in
          </Link>
          <Link href="/">
            <button className="bg-black text-white w-auto px-5 py-1 font-bold rounded-3xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
