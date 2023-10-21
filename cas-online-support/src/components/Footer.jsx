import React from "react";
import logof from "../assets/images/logof.png";

import whatsapplogo from "../assets/images/whatsapp logo.png";
import facebookicon from "../assets/images/facebookicon.png";
import instagramlink from "../assets/images/instagramlink.png";
import linkdinlogo from "../assets/images/linkdinlogo.png";
export default function Footer() {
  return (
    <div class=" mt-[70px] bg-gradient-to-r from-[#0076CE] to-[#9400D3]   h-[341px]">
      <div class="grid grid-cols-7 ml-[100px]">
        <div class="col-span-2 text-[#ffffff]">
          <img
            class="mt-[10px] relative h-[45px] w-[138px]"
            src={logof}
            alt=""
          ></img>
          <h6>
            India's first platform dedicated to <br />
            simplifying partner search
          </h6>
        </div>

        <div class="mt-[20px] col-span-1 text-[#ffffff]">
          <h2 class="font-bold">COMPANY</h2>
          <h6 class="mt-[10px]">About</h6>
          <h6 class=" mt-[5px]">Pricing</h6>

          <h6 class=" mt-[5px]">Careers</h6>
        </div>

        <div class="mt-[20px] col-span-1 text-[#ffffff]">
          <h2 class="font-bold">SOLUTIONS</h2>
          <h6 class="mt-[10px]">Search</h6>
          <h6 class=" mt-[5px]">Connect</h6>

          <h6 class=" mt-[5px]">Research</h6>
          <h6 class=" mt-[5px]">Academy</h6>
        </div>

        <div class="mt-[20px] col-span-1 text-[#ffffff]">
          <h2 class="font-bold">RESOURCES</h2>
          <h6 class="mt-[10px]">Blogs</h6>
          <h6 class=" mt-[5px]">Forms</h6>
        </div>
        <div class="mt-[20px] col-span-1 text-[#ffffff]">
          <h2 class="font-bold">SUPPORT</h2>
          <h6 class="mt-[10px]">Help</h6>
          <h6 class=" mt-[5px]">Contact Us</h6>
        </div>

        <div class="mt-[20px] col-span-1 text-[#ffffff]">
          <h2 class="font-bold">LEGAL</h2>
          <h6 class="mt-[10px]">Privacy</h6>
          <h6 class=" mt-[5px]">Terms</h6>
          <h6 class=" mt-[5px]">Accessibility</h6>
        </div>
      </div>
      <hr class="ml-[100px] mr-[50px] mt-[65px]"></hr>
      <div class="grid grid-cols-5">
        <div class="col-span-3 mt-[20px]">
          <p class="ml-[100px] text-[#ffffff] mt-[10px] text-[12px]">
            Sambhaji Nagar,No2, St. Antony Road
            Chembur,Mumbai-400071,Maharashtra
          </p>
        </div>
        <div class="col-span-2 mt-[20px] ml-[250px] flex gap-5">
          <img
            class="mt-[10px]  ml-[-5px] relative h-[20px] w-[20px]"
            src={facebookicon}
            alt=""
          ></img>
          <img
            class="mt-[10px] ml[-10px] relative h-[20px] w-[20px]"
            src={instagramlink}
            alt=""
          ></img>
          <img
            class="mt-[10px] relative h-[20px] w-[20px]"
            src={linkdinlogo}
            alt=""
          ></img>

          <img
            class="mt-[10px] relative h-[20px] w-[20px]"
            src={whatsapplogo}
            alt=""
          ></img>
        </div>
      </div>
      <div class="w-full text-[12px] mt-[40px] h-[50px] bg-neutral-900 p-4 text-center text-[#ffffff] dark:bg-black-700 dark:text-neutral-200">
        Registered trademark of India Private Limited © 2023 loremipsum Inc. All
        Rights Reserved
      </div>
    </div>
  );
}
