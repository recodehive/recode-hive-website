import Image from "next/image";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <div className="w-full h-[500px] bg-[#D9D9D9] bg-[url('/assets/Home/hero_bg.png')] flex justify-center items-center">
        <div className="text-center w-[700px] h-[178px]">
          <h1 className="font-bold text-white text-4xl">
            Stay ahead of the curve with must-read blog posts from the tech
            world.
          </h1>
          <button className="bg-white text-black w-[241px] h-[53px] px-5 py-1 font-semibold rounded-[77px] mt-[40px]">
            Join the Hive
          </button>
        </div>
      </div>
      <div className="mt-5 w-[1200px] m-auto h-auto">
        <div>
          <h1 className="text-4xl">Trending Posts</h1>
          <hr className="h-[4px] w-[120px] mt-[12px] bg-black" />
        </div>
        <div className="grid grid-cols-3 p-11 gap-10 mt-5">
          <div className="w-[362px] h-[368px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-t-2xl">
              <div className="w-[90%] bg-[#755757] h-[180px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full h-[100px] bg-[#D9D9D9]">
              <div className="flex w-[327px] mt-12 m-auto h-[60px] justify-between">
                <p className="text-xl font-light">DD-MON-YYYY</p>
                <p className="text-xl font-light">Name</p>
              </div>
              <p className="text-2xl w-[327px] m-auto font-bold">
                Topic of the blog ...........
              </p>
            </div>
          </div>

          <div className="w-[362px] h-[368px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-t-2xl">
              <div className="w-[90%] bg-[#755757] h-[180px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full h-[100px] bg-[#D9D9D9]">
              <div className="flex w-[327px] mt-12 m-auto h-[60px] justify-between">
                <p className="text-xl font-light">DD-MON-YYYY</p>
                <p className="text-xl font-light">Name</p>
              </div>
              <p className="text-2xl w-[327px] m-auto font-bold">
                Topic of the blog ...........
              </p>
            </div>
          </div>
          <div className="w-[362px] h-[368px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-t-2xl">
              <div className="w-[90%] bg-[#755757] h-[180px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full h-[100px] bg-[#D9D9D9]">
              <div className="flex w-[327px] mt-12 m-auto h-[60px] justify-between">
                <p className="text-xl font-light">DD-MON-YYYY</p>
                <p className="text-xl font-light">Name</p>
              </div>
              <p className="text-2xl w-[327px] m-auto font-bold">
                Topic of the blog ...........
              </p>
            </div>
          </div>
          <div className="w-[362px] h-[368px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-t-2xl">
              <div className="w-[90%] bg-[#755757] h-[180px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full h-[100px] bg-[#D9D9D9]">
              <div className="flex w-[327px] mt-12 m-auto h-[60px] justify-between">
                <p className="text-xl font-light">DD-MON-YYYY</p>
                <p className="text-xl font-light">Name</p>
              </div>
              <p className="text-2xl w-[327px] m-auto font-bold">
                Topic of the blog ...........
              </p>
            </div>
          </div>
          <div className="w-[362px] h-[368px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-t-2xl">
              <div className="w-[90%] bg-[#755757] h-[180px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full h-[100px] bg-[#D9D9D9]">
              <div className="flex w-[327px] mt-12 m-auto h-[60px] justify-between">
                <p className="text-xl font-light">DD-MON-YYYY</p>
                <p className="text-xl font-light">Name</p>
              </div>
              <p className="text-2xl w-[327px] m-auto font-bold">
                Topic of the blog ...........
              </p>
            </div>
          </div>
          <div className="w-[362px] h-[368px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-t-2xl">
              <div className="w-[90%] bg-[#755757] h-[180px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full h-[100px] bg-[#D9D9D9]">
              <div className="flex w-[327px] mt-12 m-auto h-[60px] justify-between">
                <p className="text-xl font-light">DD-MON-YYYY</p>
                <p className="text-xl font-light">Name</p>
              </div>
              <p className="text-2xl w-[327px] m-auto font-bold">
                Topic of the blog ...........
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[928px] h-[230px] m-auto bg-[#D9D9D9] rounded-3xl"></div>

      <div className="mt-10 w-[1200px] m-auto h-auto">
        <div>
          <h1 className="text-4xl">Latest Posts</h1>
          <hr className="h-[4px] w-[120px] mt-[12px] bg-black" />
        </div>
        <div className="grid grid-cols-1 p-11 gap-10 mt-5">
          <div className="w-[1170px] grid grid-cols-3 justify-center items-center h-[288px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-l-2xl">
              <div className="w-[322px] bg-[#755757] h-[205px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full items-center justify-center col-span-2 bg-[#D9D9D9] rounded-r-2xl">
              <div className="w-[668px] flex flex-col gap-10 m-auto h-[168px] justify-between">
                <p className="text-xl font-semibold">
                  Topic of the blog ................
                </p>
                <p className="text-xl">
                  Lorem ipsum dolaor sit amet, consectetur adipiscing elit.
                  Felis suscipit gravida euismod arcu urna pha retra. Proin
                  fusce imperdiet lerisque.
                </p>
                <div className="w-full h-[20px] flex justify-between items-center">
                  <p className="text-base w-[151px] font-light">DD-MON-YYYY</p>
                  <p className="text-base font-light w-[64px]">Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 p-11 gap-10 mt-5">
          <div className="w-[1170px] grid grid-cols-3 justify-center items-center h-[288px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-l-2xl">
              <div className="w-[322px] bg-[#755757] h-[205px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full items-center justify-center col-span-2 bg-[#D9D9D9] rounded-r-2xl">
              <div className="w-[668px] flex flex-col gap-10 m-auto h-[168px] justify-between">
                <p className="text-xl font-semibold">
                  Topic of the blog ................
                </p>
                <p className="text-xl">
                  Lorem ipsum dolaor sit amet, consectetur adipiscing elit.
                  Felis suscipit gravida euismod arcu urna pha retra. Proin
                  fusce imperdiet lerisque.
                </p>
                <div className="w-full h-[20px] flex justify-between items-center">
                  <p className="text-base w-[151px] font-light">DD-MON-YYYY</p>
                  <p className="text-base font-light w-[64px]">Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 p-11 gap-10 mt-5">
          <div className="w-[1170px] grid grid-cols-3 justify-center items-center h-[288px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-l-2xl">
              <div className="w-[322px] bg-[#755757] h-[205px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full items-center justify-center col-span-2 bg-[#D9D9D9] rounded-r-2xl">
              <div className="w-[668px] flex flex-col gap-10 m-auto h-[168px] justify-between">
                <p className="text-xl font-semibold">
                  Topic of the blog ................
                </p>
                <p className="text-xl">
                  Lorem ipsum dolaor sit amet, consectetur adipiscing elit.
                  Felis suscipit gravida euismod arcu urna pha retra. Proin
                  fusce imperdiet lerisque.
                </p>
                <div className="w-full h-[20px] flex justify-between items-center">
                  <p className="text-base w-[151px] font-light">DD-MON-YYYY</p>
                  <p className="text-base font-light w-[64px]">Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 p-11 gap-10 mt-5">
          <div className="w-[1170px] grid grid-cols-3 justify-center items-center h-[288px] border-2 border-[#D9D9D9] shadow-lg rounded-2xl bg-[#D9D9D9]">
            <div className="w-full h-[200px] flex justify-center items-center rounded-l-2xl">
              <div className="w-[322px] bg-[#755757] h-[205px] m-auto rounded-xl"></div>
            </div>
            <div className="w-full items-center justify-center col-span-2 bg-[#D9D9D9] rounded-r-2xl">
              <div className="w-[668px] flex flex-col gap-10 m-auto h-[168px] justify-between">
                <p className="text-xl font-semibold">
                  Topic of the blog ................
                </p>
                <p className="text-xl">
                  Lorem ipsum dolaor sit amet, consectetur adipiscing elit.
                  Felis suscipit gravida euismod arcu urna pha retra. Proin
                  fusce imperdiet lerisque.
                </p>
                <div className="w-full h-[20px] flex justify-between items-center">
                  <p className="text-base w-[151px] font-light">DD-MON-YYYY</p>
                  <p className="text-base font-light w-[64px]">Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[230px] m-auto"></div>
      <div className="bg-[#322E2E] w-full h-[388px] gap-10 items-center justify-center p-5 grid grid-cols-3">
        <div className="w-[863px] m-auto col-span-2 h-[207px]">
          <div className="grid h-[207px] m-auto grid-rows-3 justify-between gap-10">
            <div>
              <p className="text-3xl text-white font-normal">
                What topics do you want to read?
              </p>
              <hr className="h-[4px] w-[120px] rounded-xl mt-[12px] bg-white" />
            </div>

            <p className="text-2xl text-white font-normal">
              What you were looking for wasn&apos;t found? Our writing team will
              ensure that we start covering the topic extensively
            </p>
            <p className="text-xl text-white font-light">Suggest topics</p>
          </div>
        </div>
        <div>
          <Image
            src="/assets/Home/suggestion.png"
            width={278}
            height={301}
            alt=""
          />
        </div>
      </div>
      <div className="bg-gradient-to-bl flex flex-col justify-center items-center from-[#DDD8D8] via-[#979495] to-[#4E4D4C] w-full h-[546px]">
        <div className="h-[116px] w-[563px] m-auto my-5">
          <h1 className="text-4xl text-black font-bold text-center">
            Testimonals
          </h1>
          <p className="text-xl text-black font-medium text-center">
            Here’s what our readers have to say about our blogs and events and
            how it helped them in their lives
          </p>
        </div>
        <div className="w-[931px] h-[253px] bg-[#FFFFFF] rounded-xl">
          <div className="w-[931px] h-[253px] p-5 flex flex-col jus">
            <p className="text-base w-[835px] h-[133px] m-auto font-normal text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              suscipit gravida euismod arcu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Felis suscipit gravida euismod arcu.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              suscipit gravida euismod arcu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Felis suscipit gravida euismod arcu.
            </p>
            <div className="w-[148px] h-[62px] ml-5 grid grid-cols-2">
              <div className="w-[62px] h-[62px] rounded-full bg-[#E9DFDF]"></div>
              <div>
                <p className="text-base text-black font-semibold">Name</p>
                <p className="text-base text-black font-light">Position</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
