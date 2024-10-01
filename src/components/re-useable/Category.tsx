import CategoryStyles from "@/styles/Category.module.css";

const Category = () => {
  const data: string[] = [
    "Dairy,Breads & Eggs",
    "Meat & Sea Food",
    "Beverages",
    "Fruits & Veggies",
    "Snack & Munchies",
    "Instant food",
    "Bakery & Biscuits",
    "Best sellers",
  ];
  return (
    <div className="border-b-[1px] border-[#e6e6e6]">
      <div className="mx-auto w-[70rem] py-3 flex items-center justify-between">
        {data.map((item, index) => {
          return (
            <p
              className={`cursor-pointer ${CategoryStyles.categoryText}`}
              key={index}
            >
              {item || "-"}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
