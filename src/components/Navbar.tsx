"use client";

import NavbarStyles from "@/styles/Navbar.module.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";

const Navbar = () => {
  const [data, setData] = useState<string>("1st Block Majestic, Banglore");
  return (
    <nav className="border-b-[1px] border-[#e6e6e6]">
      <div className="mx-auto w-[70rem] py-2 flex items-center justify-between">
        {/* logo and location */}
        <div className="flex items-center gap-[30px]">
          <div className={`${NavbarStyles.logo}`}>Moo & Chew</div>
          <div>
            <select
              className="outline-none cursor-pointer"
              onChange={(e) => {
                setData(e.target.value);
              }}
            >
              <option value="1st Block Majestic, Banglore">Majestic</option>
              <option value="5th cross Hsr, Banglore">HSR layout</option>
              <option value="2nd stage Btm, Banglore">BTM layout</option>
            </select>
            <p className={`${NavbarStyles.selectValue}`}>{data}</p>
          </div>
        </div>
        {/* search feild */}
        <div className="relative">
          <div className="absolute top-[28%] left-[3%]">
            <FiSearch className="text-[#505166]" />
          </div>
          <input
            type="text"
            className={NavbarStyles.inputFeild}
            placeholder="Search"
          />
          <div className="absolute top-[25%] right-[3%] cursor-pointer">
            <IoIosCloseCircle className="text-[#9a9a9a] h-[18px] w-[18px]" />
          </div>
        </div>
        {/* cart and profile section */}
        <div className="flex items-center gap-[20px]">
          <div className="cursor-pointer">
            <MdOutlineShoppingCart className="h-[25px] w-[25px] text-[#505166] " />
          </div>
          <div className="cursor-pointer">
            <RiUserLine className="h-[25px] w-[25px] text-[#505166] " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
