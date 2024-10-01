import Navbar from "./Navbar";
import Category from "./re-useable/Category";
import Notification from "./re-useable/Notification";
import Footer from "./Footer";
import Filters from "./Filters";
import Products from "./Products";

const HomePage = () => {
  return (
    <div>
      <Notification message={"Get free delivery on orders over $100"} />
      <div className="sticky left-0 top-0 right-0 bg-white z-10">
        <Navbar />
      </div>
      <Category />
      <div className="bg-[#F9FBFC] ">
        <div className="flex items-start justify-between gap-[20px] w-[70rem] mx-auto py-4 bg-[#F9FBFC]">
          <Filters />
          <Products />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
