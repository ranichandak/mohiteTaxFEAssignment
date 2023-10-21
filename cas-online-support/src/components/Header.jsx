import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/images/logo.png";
import picturea from "../assets/images/picturea.png";
import pictureb from "../assets/images/pictureb.png";
import picturec from "../assets/images/picturec.png";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <section class="containerone font-sans px-[50px] h-[803px]  bg-gradient-to-r  from-[#FEDDEE] from-0%  via-[#C5EAED] via-64.58% to-[#FCF6FC] to-31.77%">
      <div class=" max-w-[1536px] flex  justify-between max-h-[85px]  left-w[128px] py-[20px]">
        <div class="flex justify-between font-bold gap-10">
          <div>
            <img class="relative h-[30px] w-[90px]" src={logo} alt=""></img>
          </div>

          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              class="text-xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              class="text-xl md:hidden block"
            />
          )}
          <ul class="flex justify-between gap-10 hidden md:flex">
            <li>Solutions</li>
            <li>Features</li>
            <li>Blogs</li>
            <li>About</li>
          </ul>
        </div>
        <ul class=" flex gap-5 hidden md:flex">
          <li>
            <button
              className=" border-[1.5px]  font-bold
text-[#0076CE]  border-blue-500  w-[80px] p-1 rounded"
            >
              Login
            </button>
          </li>
          <li>
            <button
              className=" border-[1.5px]  font-bold
text-white   w-[80px] bg-[#0076CE] border-[#0076CE]   p-1 rounded"
            >
              Register
            </button>
          </li>
        </ul>

        {/*Responsive Menu */}
        <ul class={"md:hidden w-full h-screen fixed top-[95px] left-[170px]"}>
          <li>Solutions</li>
          <li>Features</li>
          <li>Blogs</li>
          <li>About</li>
        </ul>
      </div>
      <ul class="md:hidden w-full h-screen fixed top-[200px] left-[170px]">
        <li>
          <button
            className=" border-[1.5px]  font-bold
text-[#0076CE]  border-blue-500  w-[80px] p-1 rounded"
          >
            Login
          </button>
        </li>
        <li>
          <button
            className=" border-[1.5px]  font-bold
text-white   w-[80px] bg-[#0076CE] border-[#0076CE]   p-1 rounded"
          >
            Register
          </button>
        </li>
      </ul>
      <div class="grid grid-cols-5 gap-4 place-items-start">
        <div class=" col-span-3 mt-[150px] left-[128px]">
          <h1 class="text-[55px] font-bold">
            {" "}
            Find{" "}
            <span class="bg-gradient-to-r bg-clip-text text-transparent  from-[#0076CE] to-[#9400D3] ">
              Partners{" "}
            </span>
            (CAs){" "}
          </h1>
          <p class="text-5xl font-bold leading=10">Available Online</p>
          <p
            class="leading=10 left-[128px] mt-[20px] text-[#616161] w-[676px] h-[55px]
"
          >
            <b>CONNECT</b> with us where your services are listed and visible to
            myriad of bussinesses seeking CA's for compliance support.
          </p>
          <div class="border h-[55px] grid grid-cols-3">
            <div class="col-span-2">
              <input
                type="text"
                className="border w-[600px] font-bold text-[#bfbfbf] border-blue-500 p-3  mt-10  rounded"
                placeholder="Search by name"
              />
            </div>
            <div class="col-span-1">
              <button className="bg-blue-500 mt-10 text-white w-[150px] p-3 rounded">
                Search
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-2 break-after-column  gap-[10.5px] grid grid-cols-3 mt-[120px]">
          <img
            class="relative mt-[40px] h-[403.03px] w-[198.72px]"
            src={picturea}
            alt=""
          ></img>
          <img
            class="h-[403.03px] mb-[30px] w-[198.72]"
            src={pictureb}
            alt=""
          ></img>
          <img
            class="relative mt-[20px] h-[403.03px] w-[198.72px]"
            src={picturec}
            alt=""
          ></img>
        </div>
      </div>
    </section>
  );
}
