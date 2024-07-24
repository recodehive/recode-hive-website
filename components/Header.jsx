import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="h-[72px] w-full flex items-center justify-between bg-[#D9D9D9]">
      <div className="flex justify-between w-full px-10">
        <div className="w-[201px] ml-5">
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
          <div
            className="relative w-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-[#000000] cursor-pointer w-auto">
              Explore
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-md">
                <Link
                  href="/intro"
                  className="block px-4 py-2 rounded-t-md text-[#000000] hover:bg-gray-200"
                >
                  Intro
                </Link>
                <Link
                  href="/git-and-github/how-to-install-git-git-tutorial"
                  className="block px-4 py-2 text-[#000000] hover:bg-gray-200"
                >
                  Git and GitHub
                </Link>
                <Link
                  href="/blog/5-best-apps-vloggers-should-have-on-a-phone"
                  className="block px-4 py-2 rounded-b-md text-[#000000] hover:bg-gray-200"
                >
                  All Blogs
                </Link>
              </div>
            )}
          </div>
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
