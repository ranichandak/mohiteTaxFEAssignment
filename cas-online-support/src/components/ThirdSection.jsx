import React from "react";
import Maskgroup from "../assets/images/Maskgroup.png";
import search from "../assets/images/search.png";
import connect from "../assets/images/connect.png";
import research from "../assets/images/research.png";
import academy from "../assets/images/academy.png";
import teacher from "../assets/images/teacher.png";

export default function ThirdSection() {
  return (
    <section class="containerthree mt-[100px]">
      <div class="grid grid-cols-5 px-[100px]">
        <div class="col-span-3 ">
          <h1 CLASS="font-bold text-[55px] text-poppins">
            <span class="bg-gradient-to-r bg-clip-text text-transparent  from-[#0076CE] to-[#9400D3] ">
              All-in-One
            </span>{" "}
            platform that Makes Easier
          </h1>
          <p class="w-[500px] text-[20px]">
            We are more than a platform; We are your success partner. Discover
            our services to achieve your business and educational goals.
          </p>
        </div>
        <div class="chat-bubbles  mt-[70px] col-span-2">
          <div class="grid grid-cols-3">
            <div class="col-span-2 rows-3 gap-[10px] ">
              <div class="row-span-1 w-[220px] h-[25px] px-[8px] bg-[#EFD9F9] text-[12px] border border-pink-100 rounded">
                Hey,checkout loremipsum services
              </div>
              <div class="row-span-1 w-[240px] ml-[-20px] mt-[8px] h-[25px] px-[4px] bg-[#EFD9F9] text-[12px] border border-pink-100 rounded">
                I learned from their,videos,got myfirst job.
              </div>
              <div class="row-span-1 w-[260px] h-[25px] ml-[-40px] mt-[10px] px-[4px] bg-[#EFD9F9] text-[12px] border border-pink-100 rounded">
                you won't be disappointed with their services.
              </div>
              <div class="row-span-1 w-[260px] h-[25px] ml-[-20px] mt-[20px] px-[4px] bg-[#DDF3FF] text-[12px] border border-pink-100 rounded">
                I got a perfect analysis report from them too
              </div>

              <div class="row-span-1 w-[120px] h-[25px] ml-[100px] mt-[10px] px-[4px] bg-[#DDF3FF] text-[12px] border border-pink-100 rounded">
                Oh, that's great.
              </div>
            </div>
            <div class="colspan-1">
              <img
                class="relative ml-[-10px]  mt-[-70px] h-[300px] w-[250px]"
                src={Maskgroup}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-5 px-[100px]">
        <div class="col-span-2 ">
          <div class="grid grid-cols-2 gap-5">
            <div class="h-[120px] w-[200px] grid grid-cols-3">
              <img
                class="col-span-1 relative h-[50px] w-[50px]"
                src={search}
                alt=""
              ></img>
              <div class="col-span-2 w-[105]">
                <b>Search</b> for vital company information
              </div>
            </div>

            <div class="h-[120px] w-[200px] grid grid-cols-3">
              <img
                class="col-span-1 relative h-[50px] w-[50px]"
                src={connect}
                alt=""
              ></img>
              <div class="col-span-2 w-[105]">
                <b>CONNECT</b> with the resources to meet your business needs
              </div>
            </div>

            <div class="h-[120px] w-[200px] grid grid-cols-3">
              <img
                class="col-span-1 relative h-[50px] w-[50px]"
                src={research}
                alt=""
              ></img>
              <div class="col-span-2 w-[105]">
                <b>RESEARCH</b> and generate reports that drive growth
              </div>
            </div>

            <div class="h-[120px] w-[200px] grid grid-cols-3">
              <img
                class="col-span-1 relative h-[50px] w-[50px]"
                src={academy}
                alt=""
              ></img>
              <div class="col-span-2 w-[105]">
                <b>ACADEMY</b> to give you the skills for success in your career
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3 ml-[100px] mt-[-70px]">
          <img
            class="col-span-1 relative h-[300px] w-[250px]"
            src={teacher}
            alt=""
          ></img>
        </div>
      </div>
    </section>
  );
}
