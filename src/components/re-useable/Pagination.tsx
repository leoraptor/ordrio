import PaginationStyles from "@/styles/Pagination.module.css";

const Pagination = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <button className={`${PaginationStyles.paginationBtn}`}>Previous</button>
      <p className={`${PaginationStyles.upperSpan}`}>
        showing <span className={`${PaginationStyles.spantext}`}>10</span> of{" "}
        <span className={`${PaginationStyles.spantext}`}>20</span>
      </p>
      <button className={`${PaginationStyles.paginationBtn}`}>Next</button>
    </div>
  );
};

export default Pagination;
