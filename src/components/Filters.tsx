"use client";

import FilterStyles from "@/styles/Filter.module.css";
//icons
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
//
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
//
import { useState } from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

const Filters = () => {
  const [value, setValue] = useState<number[]>([20, 37]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const categories: string[] = [
    "Munchies & Chips",
    "Cold drinks & Juices",
    "Home & Office",
    "Fruits & Veggies",
    "Organic & Healthy Living",
    "Breakfast & Sauces",
    "Pet Care",
    "Atta & Rice",
    "Personal Care",
    "Toilet Accessories",
  ];

  const brands: string[] = [
    "Lay's",
    "Pringles",
    "TGF",
    "Too Yumm!",
    "BRB",
    "Beyond snack",
    "A-1 Chips",
    "Bingo",
    "Cornitos",
  ];
  return (
    <div className="border-[1px] rounded-sm border-[#e6e6e6] bg-white min-w-[250px] ">
      <div className="flex items-center justify-between p-2 ">
        <p className={`${FilterStyles.filteText}`}>Filter</p>
        <button className={`${FilterStyles.clearAll}`}>Clear all</button>
      </div>
      {/* category */}
      <div>
        <div className="p-2 py-4 border-t-[1px]  border-[#e6e6e6] flex items-center justify-between">
          <p className={`${FilterStyles.categoryText}`}>Categories</p>
          <button className={`${FilterStyles.searchBtn}`}>
            <FiSearch />
          </button>
        </div>
        <div>
          {categories.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b-[1px]  border-[#e6e6e6] last:border-b-[0px] py-3 px-2 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <input id={item} type="radio" />
                  <label className={`${FilterStyles.labelText}`} htmlFor={item}>
                    {item}
                  </label>
                </div>
                <div>
                  <FaAngleDown className="text-[#6f6f6f] h-[10px] w-[10px] cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
        <p className={`${FilterStyles.moreText} p-2`}>+68 More</p>
      </div>
      {/* Barnds */}
      <div>
        {" "}
        <div className="p-2 py-4 border-t-[1px]  border-[#e6e6e6] flex items-center justify-between">
          <p className={`${FilterStyles.categoryText}`}>Brands</p>
          <button className={`${FilterStyles.searchBtn}`}>
            <FiSearch />
          </button>
        </div>
        <div>
          {brands.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b-[1px]  border-[#e6e6e6] last:border-b-[0px] py-3 px-2 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <input id={item} type="checkbox" />
                  <label className={`${FilterStyles.labelText}`} htmlFor={item}>
                    {item}
                  </label>
                </div>
                <div>
                  <FaAngleDown className="text-[#6f6f6f] h-[10px] w-[10px] cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
        <p className={`${FilterStyles.moreText} p-2 cursor-pointer`}>
          +68 More
        </p>
      </div>
      {/* price  */}
      <div>
        <div className="p-2 py-4 border-t-[1px]  border-[#e6e6e6] flex items-center justify-between">
          <p className={`${FilterStyles.categoryText}`}>Price</p>
          <div>
            <FaAngleDown className="text-[#6f6f6f] h-[10px] w-[10px] cursor-pointer" />
          </div>
        </div>
        {/* 2 way slider */}
        <div>
          {" "}
          <div className="px-2">
            <Box sx={{ maxWidth: "250px" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
          </div>
          <div className="flex items-center justify-between px-2 gap-3 py-2 border-b-[1px] border-[#e6e6e6]">
            <div className="w-full">
              <p className="text-[10px]">Min</p>
              <button className={`${FilterStyles.minMaxBtn}`}>
                <MdCurrencyRupee /> 200
              </button>
            </div>
            <div className="w-full">
              <p className="text-[10px]">Max</p>
              <button className={`${FilterStyles.minMaxBtn}`}>
                <MdCurrencyRupee /> 300
              </button>
            </div>
          </div>
        </div>
        {/* other */}
        <div className="p-2">
          <div>
            <p className={`${FilterStyles.categoryText}`}>Other</p>
            <div className="flex items-center gap-2 py-2">
              <input id={"remove"} type="radio" />
              <label className={`${FilterStyles.labelText}`} htmlFor={"remove"}>
                Remove out of stocks
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
