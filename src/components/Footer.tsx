import FooterStyles from "@/styles/Footer.module.css";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const data: string[] = [
    "Bags",
    "Who are we",
    "Contact",
    "Tees",
    "Sustainability",
    "Shipping",
    "Objects",
    "Press",
    "Returns",
    "Home Goods",
    "Careers",
    "Warranty",
    "Accessories",
    "Terms & Conditions",
    "Secure Payments",
    "",
    "Privacy",
    "FAQ",
    "",
    "",
    "Find a store",
  ];
  return (
    <footer className="bg-[#FEFEFE] border-t-[1px] border-[#e6e6e6] py-[30px]">
      <div className="mx-auto w-[70rem] bg-[#FEFEFE] flex flex-col items-start justify-between gap-[100px]">
        <div className="flex items-start justify-between w-full">
          <div>
            <p className={`${FooterStyles.logo}`}>Moo & Chew</p>
            <p className="text-[12px] font-[400] max-w-[200px] my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              eius similique et commodi? Excepturi, facere...{" "}
              <span className="text-[#7B3AEB] cursor-pointer">View more</span>
            </p>
            <div>
              <div className="flex items-center gap-2">
                <BsTelephone className="text-[12px]" />
                <p className="text-[12px] font-[400]">+91 9682573813</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <CiMail className="text-[12px]" />
                <p className="text-[12px] font-[400]">you@company.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3  gap-x-[100px]">
              <p className="text-[14px] font-[500]">Produts</p>
              <p className="text-[14px] font-[500]">Company</p>
              <p className="text-[14px] font-[500]">Customer Service</p>
            </div>
            <div className="grid grid-cols-3 gap-x-[100px] gap-y-2 mt-2">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="text-[14px] font-[500] text-[#8A8C8A]"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" pt-4 border-t-[1px] border-[#e6e6e6] w-full text-[12px] font-[500]">
          © 2021 company, Inc all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
