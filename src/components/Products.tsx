import ProductsStyle from "@/styles/Products.module.css";
//icons
import { FaAngleDown } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { ProductsType } from "@/types/type";
//icons
import Image from "next/image";
import Pagination from "./re-useable/Pagination";

const Products = () => {
  //dummy data
  const products: ProductsType[] = [
    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },

    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },
    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },
    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },

    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },
    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },
    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },
    {
      id: 1,
      title: "Haldiram's Snac Lite Fun Wheels Spicy Masala",
      price: 33,
      pastPrice: 44,
      discount: 12,
      gram: "100gm",
    },
  ];
  return (
    <div className="w-full ">
      <div className="flex items-center justify-between">
        <p className={`${ProductsStyle.showingResultText}`}>
          Showing result for "Pringles"
        </p>
        <div
          className={` ${ProductsStyle.recommendedBtn} border-[1px] border-[#e6e6e6]`}
        >
          Recommended <FaAngleDown />
        </div>
      </div>
      {/* products */}
      <div className="grid grid-cols-3 gap-3 my-5">
        {products.map((item, index) => {
          return (
            <div
              key={index}
              className={`border-[1px] border-[#e6e6e6]  ${ProductsStyle.productBox} `}
            >
              <div className="flex items-center justify-center relative">
                <div className={`${ProductsStyle.offLable}`}>12% OFF</div>
                <div className={`${ProductsStyle.heart}`}>
                  <FaRegHeart />
                </div>
                <Image
                  height={200}
                  width={200}
                  alt="..."
                  src={"/images/produt.jpg"}
                />
              </div>
              <div>
                <div className={` ${ProductsStyle.memberText} `}>
                  <MdCurrencyRupee />
                  20 Membership price
                </div>
                <p className={` ${ProductsStyle.produtHeaderText} `}>
                  {item.title || "-"}
                </p>
                <p className={` ${ProductsStyle.price} flex items-center`}>
                  <MdCurrencyRupee /> {item.price || "-"}
                  <span
                    className={` ${ProductsStyle.strickPrice} flex items-center`}
                  >
                    <MdCurrencyRupee className="h-[13px] w-[13px]" />
                    {item.pastPrice || "-"}
                  </span>
                  <span className={` ${ProductsStyle.priceOff} `}>
                    {item.discount || "-"}% OFF
                  </span>
                </p>
                <div className="flex items-center justify-between mt-2">
                  <p className={` ${ProductsStyle.gram} `}>
                    {item.gram || "-"}
                  </p>
                  <button className={` ${ProductsStyle.addBtn} `}>Add</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* pagination  */}
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
