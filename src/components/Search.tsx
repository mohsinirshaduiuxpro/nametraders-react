interface SearchProps {
  searchType?: string;
  bg?: string;
  svgRequired?: boolean;
}

const Search: React.FC<SearchProps> = ({ searchType, bg, svgRequired }) => {
  return (
    <>
      <div
        className={`input-group ${searchType} mb-3 bg-${bg} px-0 rounded  ${
          searchType == "search-2" ? "rounded-3" : "rounded-4"
        } py-2 d-flex align-items-center `}
      >
        <input
          type="text"
          className={`form-control ${
            searchType == "search"
              ? "f-size-16 text-white  py-md-3 border-0 ps-md-4 "
              : "f-size-18  border-0 "
          } bg-${bg} `}
          placeholder="Search domain names"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        ></input>
        <div className="pe-3">
          <button
            className={`btn ${
              searchType == "search-2" ? "bg-white" : "btn-primary"
            } f-size-18 f-m-size-0 d-flex gap-md-2 align-items-center text-rich-black fw-semibold  py-2 px-md-4`}
          >
            {svgRequired && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
                fill="#00363D"
              >
                <path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z" />
              </svg>
            )}{" "}
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
