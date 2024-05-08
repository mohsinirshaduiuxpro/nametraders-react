import TopBanner from "../components/TopBanner";
import ContactUsBanner from "../components/ContactUsBanner";
import AvailableDomain from "../components/AvailableDomain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faGripDots,
  faGlobe,
  faCars,
  faBriefcase,
  faShirt,
  faAlbumCollection,
  faTty,
  faMoneyBill,
  faBook,
  faBusinessTime,
  faUserMusic,
  faLandmark,
  faPotFood,
  faGamepad,
  faMapLocation,
  faMapLocationDot,
  faRecycle,
  faNotesMedical,
  faWavePulse,
  faMedal,
  faPersonDigging,
  faFaceGrinTears,
  faScaleBalanced,
  faMegaphone,
  faLanguage,
  faOctagonXmark,
  faBuilding,
  faStarAndCrescent,
  faCartShopping,
  faVolleyball,
  faMonkey,
  faMicrochip,
  faPlane,
  faDatabase,
  faEllipsisStroke,
} from "@fortawesome/pro-regular-svg-icons";
import CategoryBtn from "../components/CategoryBtn";
import DomainsByAlpha from "../components/DomainsByAlpha";

const DomainForSale = () => {
  const availableDomains = [
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
    {
      name: "247transcription.com",
      buttonAction: "MakeOffer1",
      seller: "NameTraders",
      askingPrice: "--",
    },
  ];

  const categories = [
    { icontype: faGripDots, categoryName: "All Domains" },
    { icontype: faGlobe, categoryName: "Acronyms" },
    { icontype: faCars, categoryName: "Automotive" },
    { icontype: faBriefcase, categoryName: "Business" },
    { icontype: faShirt, categoryName: "Clothing/Fashion" },
    { icontype: faAlbumCollection, categoryName: "Collectibles" },
    { icontype: faTty, categoryName: "Communications" },
    { icontype: faMoneyBill, categoryName: "Debt" },
    { icontype: faBriefcase, categoryName: "Dictionary" },
    { icontype: faGripDots, categoryName: "Domain Names" },
    { icontype: faBook, categoryName: "Education/Training" },
    { icontype: faBusinessTime, categoryName: "Employment/Training" },
    { icontype: faUserMusic, categoryName: "Entertainment" },
    { icontype: faLandmark, categoryName: "Financial/Banking" },
    { icontype: faPotFood, categoryName: "Food" },
    { icontype: faGamepad, categoryName: "Games" },
    { icontype: faMapLocationDot, categoryName: "Geo/Regional" },
    { icontype: faRecycle, categoryName: "Green Energy/Recycling" },
    { icontype: faNotesMedical, categoryName: "Health/Beauty" },
    { icontype: faWavePulse, categoryName: "Healthcare" },
    { icontype: faMedal, categoryName: "Hobbies" },
    { icontype: faPersonDigging, categoryName: "Home/Construction" },
    { icontype: faFaceGrinTears, categoryName: "Humor" },
    { icontype: faScaleBalanced, categoryName: "Legal" },
    { icontype: faMegaphone, categoryName: "Marketing/Advertising" },
    { icontype: faLanguage, categoryName: "Marriage" },
    { icontype: faOctagonXmark, categoryName: "Misspellings" },
    { icontype: faBuilding, categoryName: "Realstate" },
    { icontype: faStarAndCrescent, categoryName: "Religion" },
    { icontype: faCartShopping, categoryName: "Shopping" },
    { icontype: faVolleyball, categoryName: "Sports" },
    { icontype: faMonkey, categoryName: "Spunky Names" },
    { icontype: faMicrochip, categoryName: "Technology" },
    { icontype: faPlane, categoryName: "Travel" },
    { icontype: faDatabase, categoryName: "Website/Hosting" },
    { icontype: faEllipsisStroke, categoryName: "Other" },
  ];

  return (
    <>
      <TopBanner
        mainTitle="Domains for Sale"
        subTitle="Domain Names"
        smallSubTitle="Have questions? We’re here to help."
        imgSRC="images/girl-thinking.png"
        btnText="Contact Us"
      ></TopBanner>

      <section className="mt-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 d-flex flex-column flex-md-row  justify-content-between align-items-center ">
              <div className="py-3 f-size-30 fw-semibold font-josefin letter-spacing-2">
                Available domain names
              </div>
              <div className="d-flex flex-md-row flex-column  gap-2 mb-3">
                <div className="input-group flex-nowrap">
                  <select
                    className="form-select flex-001 boxshadow-0"
                    aria-label="Default select example"
                  >
                    <option selected>Contains</option>
                    <option value="1">Starts With</option>
                    <option value="2">Ends With</option>
                  </select>
                  <div className="app-search-box  mb-lg-0">
                    <form className="app-search-form">
                      <input
                        id="searchTextBox"
                        type="text"
                        placeholder="Search"
                        name="search"
                        className="form-control search-input boxshadow-0"
                      />
                      <button type="submit" className="search-btn" value="">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                            stroke="#667085"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <select
                    className="form-select flex-001 boxshadow-0"
                    aria-label="Default select example"
                  >
                    <option selected>*</option>
                    <option value="1">.net</option>
                    <option value="2">.org</option>
                    <option value="3">.com</option>
                  </select>
                </div>

                <button className="btn btn-secondary py-2">GO</button>
              </div>
            </div>
            <div className="col-12  col-md-4 col-lg-4 ">
              <div
                className="border rounded-3 p-md-4 p-3 mb-3"
                style={{ backgroundColor: "#F8FAFC" }}
              >
                <h2 className="fw-medium text-primary  f-size-14 mb-4 text-uppercase border-bottom pb-3">
                  Domain by Category
                </h2>
                <div
                  className="nav flex-column nav-pills mb-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <CategoryBtn Categories={categories}></CategoryBtn>
                </div>
              </div>
              <div
                className="border rounded-3 p-md-4 p-3  mb-3 "
                style={{ backgroundColor: "#F8FAFC" }}
              >
                <h2 className="fw-medium text-primary  f-size-14 mb-4 text-uppercase border-bottom pb-3">
                  Domain by alphabets
                </h2>
                <DomainsByAlpha></DomainsByAlpha>
              </div>
            </div>
            <div className="col-12  col-md-8 col-lg-8">
              <div className=" ps-xl-4 mb-5">
                <div className="" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-AllDomain"
                    role="tabpanel"
                    aria-labelledby="v-pills-AllDomain-tab"
                    // tabindex="0"
                  >
                    <div className="available-domains card table-responsive border rounded rounded-3 pb-0 ">
                      <table className="table mb-0 table-hover">
                        <thead className="">
                          <tr>
                            <th style={{ width: "45%" }} scope="col">
                              Domain Name
                            </th>
                            <th
                              className=""
                              style={{ width: "20%" }}
                              scope="col"
                            >
                              Seller
                            </th>
                            <th style={{ width: "15%" }} scope="col">
                              Asking Price
                            </th>
                            <th style={{ width: "20%" }} scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <AvailableDomain
                            availableDomains={availableDomains}
                          />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUsBanner></ContactUsBanner>
    </>
  );
};

export default DomainForSale;
