import AlphabetLinks from "../components/AlphabetLinks";
import ContactUsBanner from "../components/ContactUsBanner";
import DomainByCat from "../components/DomainByCat";
import DomainList from "../components/DomainList";
import OfferBanner from "../components/OfferBanner";
import Search from "../components/Search";
import {
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
} from "@fortawesome/pro-light-svg-icons";

const MakeOffer2 = () => {
  const myDomains = [
    {
      name: "harvestnow.com",
      buttonAction: "MakeOffer1",
      category: "featured",
    },
    {
      name: "effectivewebtraffic.com",
      buttonAction: "MakeOffer",
      category: "featured",
    },
    {
      name: "radioisland.com",
      buttonAction: "MakeOffer",
      category: "featured",
    },
    {
      name: "backyardboatbuilder.com",
      buttonAction: "MakeOffer1",
      category: "featured",
    },
    {
      name: "dynadns.org",
      buttonAction: "MakeOffer",
      category: "featured",
    },
    {
      name: "quickdrink.com",
      buttonAction: "MakeOffer",
      category: "featured",
    },
    {
      name: "harvestnow.com",
      buttonAction: "MakeOffer",
      category: "top",
    },
    {
      name: "effectivewebtraffic.com",
      buttonAction: "MakeOffer1",
      category: "top",
    },
    {
      name: "radioisland.com",
      buttonAction: "MakeOffer",
      category: "top",
    },
    {
      name: "backyardboatbuilder.com",
      buttonAction: "MakeOffer",
      category: "top",
    },
    {
      name: "dynadns.org",
      buttonAction: "MakeOffer",
      category: "top",
    },
    {
      name: "quickdrink.com",
      buttonAction: "MakeOffer",
      category: "top",
    },
    {
      name: "harvestnow.com",
      buttonAction: "MakeOffer1",
      category: "recently",
    },
    {
      name: "effectivewebtraffic.com",
      buttonAction: "MakeOffer1",
      category: "recently",
    },
    {
      name: "radioisland.com",
      buttonAction: "MakeOffer",
      category: "recently",
    },
    {
      name: "backyardboatbuilder.com",
      buttonAction: "MakeOffer",
      category: "recently",
    },
    {
      name: "dynadns.org",
      buttonAction: "MakeOffer",
      category: "recently",
    },
    {
      name: "quickdrink.com",
      buttonAction: "MakeOffer",
      category: "recently",
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
      <div className="dotted-img bg-primary position-relative justify-content-center align-items-center overflow-hidden pb-5">
        <img
          src="images/Lightaccent.png"
          className="img-fluid position-absolute w-100 top-0 "
          alt=""
        />

        <img
          src="images/binary-atom.svg"
          className="position-absolute end-0 rotate d-md-block d-none "
          alt=""
        />

        <div className="container pt-250 landing z-4 position-relative ">
          <div className="row d-flex  align-items-start justify-content-between  mb-5">
            <OfferBanner
              domainName="HarvestNow"
              note="This domain is good for a farming domain or agriculture usage."
              domain="harvestnow.com"
              owner="nametraders"
            />

            <div className="col-12 col-lg-5 d-flex justify-content-end ">
              <div
                className="card w-100 p-3 rounded rounded-4"
                style={{ marginBottom: "23px" }}
              >
                <div className="card-body">
                  <h2 className="fw-semibold f-size-22 text-center text-black mb-3">
                    Request price quote for domain name
                  </h2>
                  <div className="row">
                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Full Name"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Email Address"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Verify Email Address"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500 mb-3"
                        placeholder="Telephone"
                        name=""
                        id=""
                      />
                      <textarea
                        name=""
                        className="form-control "
                        id=""
                        cols={30}
                        rows={5}
                      ></textarea>
                    </div>

                    <div>
                      <button className="btn btn-secondary py-2 w-100 rounded-3 rounded fw-semibold f-size-18">
                        Submit Price Quote Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-64 mb-xl-5 position-relative">
        <div className="position-absolute topm-290 d-lg-block d-none ">
          <img src="images/img1.png" alt="" />
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex align-items-center flex-column  col-md-6 col-xl-4  mb-5 mb-xl-auto">
            <span>
              <svg
                width="104"
                height="120"
                viewBox="0 0 104 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.9996 0L57.0182 10.0667L68.1428 11.7289L60.1196 19.6125L61.9765 30.7064L51.9996 25.5123L42.0228 30.7064L43.8797 19.6125L35.8564 11.7289L46.9811 10.0667L51.9996 0Z"
                  fill="url(#paint0_linear_154_1935)"
                />
                <path
                  d="M22.733 18.2463L26.3054 25.412L34.2243 26.5951L28.5134 32.207L29.835 40.1033L22.733 36.4063L15.6315 40.1033L16.9531 32.207L11.2422 26.5951L19.1611 25.412L22.733 18.2463Z"
                  fill="url(#paint1_linear_154_1935)"
                />
                <path
                  d="M9.56741 41.8825L12.3363 47.4364L18.4748 48.3536L14.0477 52.7036L15.0721 58.8241L9.56741 55.9585L4.06275 58.8241L5.08709 52.7036L0.660645 48.3536L6.79856 47.4364L9.56741 41.8825Z"
                  fill="url(#paint2_linear_154_1935)"
                />
                <path
                  d="M81.2662 18.2463L77.6943 25.412L69.7754 26.5951L75.4863 32.207L74.1648 40.1033L81.2662 36.4063L88.3682 40.1033L87.0466 32.207L92.7575 26.5951L84.8386 25.412L81.2662 18.2463Z"
                  fill="url(#paint3_linear_154_1935)"
                />
                <path
                  d="M94.4322 41.8825L91.6628 47.4364L85.5249 48.3536L89.9519 52.7036L88.927 58.8241L94.4322 55.9585L99.9369 58.8241L98.9126 52.7036L103.339 48.3536L97.2011 47.4364L94.4322 41.8825Z"
                  fill="url(#paint4_linear_154_1935)"
                />
                <path
                  d="M66.9034 83.939L78.2279 111.834L65.4891 109.166L65.5337 109.148L58.2591 119.941L46.9346 92.0462L66.9034 83.939Z"
                  fill="url(#paint5_linear_154_1935)"
                />
                <path
                  d="M57.3402 92.2675L45.6234 120L38.5017 109.106L38.5458 109.124L25.7705 111.612L37.4873 83.8799L57.3402 92.2675Z"
                  fill="url(#paint6_linear_154_1935)"
                />
                <path
                  d="M82.5832 64.7245C82.5832 66.3039 80.655 67.7141 80.4169 69.2268C80.173 70.7802 81.5687 72.7141 81.0936 74.1776C80.6098 75.6666 78.3398 76.4111 77.6376 77.7866C76.9279 79.1765 77.655 81.45 76.7436 82.7026C75.8276 83.961 73.4394 83.9685 72.3415 85.0664C71.2436 86.1644 71.2361 88.5531 69.9777 89.4685C68.7251 90.3799 66.4516 89.6534 65.0617 90.3625C63.6717 91.0717 62.9417 93.3347 61.4527 93.8185C59.9892 94.2936 58.0552 92.8979 56.5019 93.1418C54.9892 93.3793 53.579 95.3081 51.9996 95.3081C50.4202 95.3081 49.01 93.3799 47.4973 93.1418C45.9439 92.8979 44.01 94.2936 42.5465 93.8185C41.0575 93.3347 40.313 91.0647 38.9375 90.3625C37.5476 89.6528 35.2741 90.3799 34.0215 89.4685C32.7631 88.5525 32.7556 86.1644 31.6577 85.0664C30.5597 83.9685 28.171 83.961 27.2556 82.7026C26.3401 81.4442 27.0707 79.1765 26.3616 77.7866C25.6594 76.4111 23.3894 75.6666 22.9056 74.1776C22.4305 72.7141 23.8262 70.7802 23.5823 69.2268C23.3448 67.7141 21.416 66.3039 21.416 64.7245C21.416 63.1451 23.3442 61.7349 23.5823 60.2222C23.8262 58.6689 22.4305 56.7349 22.9056 55.2714C23.3894 53.7824 25.6594 53.0379 26.3616 51.6625C27.0713 50.2725 26.3442 47.9991 27.2556 46.7464C28.1716 45.488 30.5597 45.4805 31.6577 44.3826C32.7556 43.2847 32.7631 40.8959 34.0215 39.9805C35.2741 39.0691 37.5476 39.7956 38.9375 39.0865C40.313 38.3843 41.0575 36.1143 42.5465 35.6305C44.0355 35.1467 45.9439 36.5511 47.4973 36.3072C49.01 36.0697 50.4202 34.1409 51.9996 34.1409C53.579 34.1409 54.9892 36.0691 56.5019 36.3072C58.0552 36.5511 59.9892 35.1554 61.4527 35.6305C62.9417 36.1143 63.6862 38.3843 65.0617 39.0865C66.4516 39.7962 68.7251 39.0691 69.9777 39.9805C71.2361 40.8965 71.2436 43.2847 72.3415 44.3826C73.4394 45.4805 75.8282 45.488 76.7436 46.7464C77.655 47.9991 76.9285 50.2725 77.6376 51.6625C78.3398 53.0379 80.6098 53.7824 81.0936 55.2714C81.5687 56.7349 80.173 58.6689 80.4169 60.2222C80.6544 61.7349 82.5832 63.1451 82.5832 64.7245Z"
                  fill="url(#paint7_linear_154_1935)"
                />
                <path
                  d="M51.9992 87.5664C64.6144 87.5664 74.8411 77.3397 74.8411 64.7245C74.8411 52.1092 64.6144 41.8825 51.9992 41.8825C39.3839 41.8825 29.1572 52.1092 29.1572 64.7245C29.1572 77.3397 39.3839 87.5664 51.9992 87.5664Z"
                  fill="#00515B"
                />
                <path
                  d="M51.9995 85.4164C63.4273 85.4164 72.6914 76.1523 72.6914 64.7245C72.6914 53.2967 63.4273 44.0327 51.9995 44.0327C40.5717 44.0327 31.3076 53.2967 31.3076 64.7245C31.3076 76.1523 40.5717 85.4164 51.9995 85.4164Z"
                  fill="url(#paint8_linear_154_1935)"
                />
                <path
                  d="M62.1689 57.5761C61.9865 57.3935 61.7699 57.2486 61.5316 57.1497C61.2932 57.0509 61.0376 57 60.7796 57C60.5215 57 60.2659 57.0509 60.0275 57.1497C59.7892 57.2486 59.5726 57.3935 59.3903 57.5761L48.7193 68.2471L45.3542 64.882C45.1719 64.6994 44.9553 64.5545 44.7169 64.4556C44.4785 64.3568 44.223 64.3059 43.9649 64.3059C43.7068 64.3059 43.4513 64.3568 43.2129 64.4556C42.9745 64.5545 42.7579 64.6994 42.5756 64.882C42.393 65.0643 42.2481 65.2809 42.1492 65.5193C42.0504 65.7577 41.9995 66.0132 41.9995 66.2713C41.9995 66.5294 42.0504 66.7849 42.1492 67.0233C42.2481 67.2617 42.393 67.4782 42.5756 67.6606L47.3425 72.4239C47.5248 72.6065 47.7414 72.7514 47.9798 72.8503C48.2182 72.9491 48.4737 73 48.7318 73C48.9899 73 49.2454 72.9491 49.4838 72.8503C49.7222 72.7514 49.9388 72.6065 50.1211 72.4239L62.1724 60.3511C62.5397 59.9825 62.7456 59.4832 62.7449 58.9629C62.7443 58.4425 62.5371 57.9437 62.1689 57.5761Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_154_1935"
                    x1="40.9712"
                    y1="7.07468"
                    x2="62.8472"
                    y2="25.2294"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_154_1935"
                    x1="14.883"
                    y1="23.2821"
                    x2="30.4545"
                    y2="36.2051"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_154_1935"
                    x1="3.48275"
                    y1="45.7858"
                    x2="15.5524"
                    y2="55.8028"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_154_1935"
                    x1="73.4162"
                    y1="23.2821"
                    x2="88.9877"
                    y2="36.2051"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_154_1935"
                    x1="88.347"
                    y1="45.7858"
                    x2="100.417"
                    y2="55.8028"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_154_1935"
                    x1="59.1032"
                    y1="93.7791"
                    x2="69.7811"
                    y2="118.832"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00363D" />
                    <stop offset="0.33" stop-color="#00515B" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_154_1935"
                    x1="46.3013"
                    y1="90.8921"
                    x2="36.6755"
                    y2="113.301"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#013238" />
                    <stop offset="0.33" stop-color="#004952" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_154_1935"
                    x1="31.1061"
                    y1="48.2337"
                    x2="74.2297"
                    y2="82.2704"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_154_1935"
                    x1="37.8636"
                    y1="53.5674"
                    x2="67.0397"
                    y2="76.5955"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00515B" />
                    <stop offset="1" stop-color="#04707E" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <h2 className="text-grey-m-800 mt-3 mb-4 fw-semibold f-size-28">
              Featured Domains
            </h2>

            <DomainList domains={myDomains} filterCategory="featured" />
          </div>

          <div className="col-12 d-flex align-items-center flex-column  col-md-6 col-xl-4 mb-5 mb-xl-auto">
            <span>
              <svg
                width="108"
                height="120"
                viewBox="0 0 108 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M54.143 120C76.6593 120 94.9124 119.485 94.9124 118.849C94.9124 118.213 76.6593 117.698 54.143 117.698C31.6266 117.698 13.3735 118.213 13.3735 118.849C13.3735 119.485 31.6266 120 54.143 120Z"
                  fill="#D8DFEA"
                />
                <path
                  d="M107.282 11.8469V23.0356C107.282 41.2072 92.5535 55.9434 74.3918 55.9434H69.7871L74.8982 50.6715C89.9026 50.4016 102.019 38.1074 102.019 23.0356V14.4797H82.2854L82.9433 9.21451H104.651C106.104 9.21404 107.282 10.3923 107.282 11.8469Z"
                  fill="url(#paint0_linear_154_1981)"
                />
                <path
                  d="M71.103 87.6463V93.4578H36.8975V87.6463C36.8975 87.1726 37.1539 86.7315 37.5683 86.5012L40.1602 85.0402C44.6463 82.513 47.4222 77.7676 47.4222 72.6141V66.4735H60.5782V72.6141C60.5782 77.7674 63.3542 82.5127 67.8403 85.0402L70.4321 86.5012C70.8466 86.7315 71.103 87.1726 71.103 87.6463Z"
                  fill="url(#paint1_linear_154_1981)"
                />
                <path
                  d="M71.1027 87.6463V93.4578H67.8139V87.6463C67.8139 87.1726 67.5574 86.7315 67.143 86.5012L64.5511 85.0402C60.065 82.513 57.2891 77.7676 57.2891 72.6141V66.4735H60.5782V72.6141C60.5782 77.7674 63.3542 82.5127 67.8403 85.0402L70.4321 86.5012C70.8463 86.7315 71.1027 87.1726 71.1027 87.6463Z"
                  fill="#687C01"
                />
                <path
                  d="M64.5249 61.3399V65.1572C64.5249 66.9737 63.0515 68.448 61.2358 68.448H46.7642C44.9487 68.448 43.4751 66.9737 43.4751 65.1572V61.3399H64.5249Z"
                  fill="#687C01"
                />
                <path
                  d="M60.5783 68.4482H47.4224V70.3832H60.5783V68.4482Z"
                  fill="#687C01"
                />
                <path
                  d="M76.3651 92.1417V115.177H31.6348V92.1417C31.6348 91.4178 32.2269 90.8254 32.9504 90.8254H75.0495C75.7732 90.8254 76.3651 91.4178 76.3651 92.1417Z"
                  fill="#00515B"
                />
                <path
                  d="M76.3652 92.1417V115.177H73.7341V92.1417C73.7341 91.4178 73.1419 90.8254 72.4185 90.8254H75.0497C75.7734 90.8254 76.3652 91.4178 76.3652 92.1417Z"
                  fill="#002D32"
                />
                <path
                  d="M80.3119 114.519V117.152C80.3119 117.875 79.7198 118.468 78.9963 118.468H29.0036C28.2801 118.468 27.688 117.875 27.688 117.152V114.519C27.688 113.795 28.2801 113.203 29.0036 113.203H78.9963C79.72 113.203 80.3119 113.795 80.3119 114.519Z"
                  fill="#004952"
                />
                <path
                  d="M80.312 114.519V117.152C80.312 117.875 79.7199 118.468 78.9964 118.468H76.3652C77.0887 118.468 77.6808 117.875 77.6808 117.152V114.519C77.6808 113.795 77.0887 113.203 76.3652 113.203H78.9964C79.7201 113.203 80.312 113.795 80.312 114.519Z"
                  fill="#046F7C"
                />
                <path
                  d="M69.7873 97.4069V106.621C69.7873 107.345 69.1951 107.937 68.4717 107.937H39.5285C38.805 107.937 38.2129 107.345 38.2129 106.621V97.4069C38.2129 96.6829 38.805 96.0906 39.5285 96.0906H68.4717C69.1954 96.0906 69.7873 96.6829 69.7873 97.4069Z"
                  fill="url(#paint2_linear_154_1981)"
                />
                <path
                  d="M64.5248 61.3399V65.1572C64.5248 66.9737 63.0514 68.448 61.2357 68.448H58.6045C60.42 68.448 61.8936 66.9737 61.8936 65.1572V61.3399H64.5248Z"
                  fill="#9FBE00"
                />
                <path
                  d="M40.1862 55.9432H33.6082C15.4465 55.9432 0.718262 41.207 0.718262 23.0354V11.8469C0.718262 10.3923 1.89579 9.21429 3.34946 9.21429H25.0569V14.4795H5.98066V23.0354C5.98066 38.1072 18.0974 50.4014 33.1018 50.6713L40.1862 55.9432Z"
                  fill="url(#paint3_linear_154_1981)"
                />
                <path
                  d="M86.2326 3.94888V6.58147C86.2326 38.5677 71.8004 64.4991 54.0003 64.4991C36.2003 64.4991 21.7681 38.568 21.7681 6.58147V3.94888H86.2326Z"
                  fill="url(#paint4_linear_154_1981)"
                />
                <path
                  d="M22.0638 14.4795H19.4326C19.301 12.7485 19.2155 10.9914 19.1694 9.21429H21.8006C21.8467 10.9911 21.9322 12.7485 22.0638 14.4795Z"
                  fill="#687C01"
                />
                <path
                  d="M37.1343 55.9432H34.5031C33.0362 54.3241 31.6416 52.4944 30.3457 50.4804C31.2536 50.5923 32.1677 50.6516 33.102 50.6713C34.365 52.6128 35.7135 54.3767 37.1343 55.9432Z"
                  fill="#687C01"
                />
                <path
                  d="M64.5247 61.3399V62.6562C61.2226 64.7032 57.6835 65.8154 53.9999 65.8154C50.3163 65.8154 46.7772 64.7032 43.4751 62.6562V61.3399C46.7772 63.3869 50.3163 64.4991 53.9999 64.4991C57.6835 64.4991 61.2226 63.3869 64.5247 61.3399Z"
                  fill="#9FBE00"
                />
                <path
                  d="M86.2322 3.94888V6.58147C86.2322 37.5674 72.688 62.8735 55.6577 64.4268C72.208 62.8538 78.3386 37.5544 78.3386 6.58147V3.94888H86.2322Z"
                  fill="#687C01"
                />
                <path
                  d="M89.5211 3.29073C89.5211 4.19907 89.1527 5.0217 88.5606 5.62054C87.962 6.2129 87.1398 6.58147 86.232 6.58147H21.7676C19.9521 6.58147 18.4785 5.10718 18.4785 3.29073C18.4785 2.38239 18.8469 1.55977 19.439 0.960926C20.0376 0.368571 20.8598 0 21.7676 0H86.2322C88.0477 0 89.5211 1.47429 89.5211 3.29073Z"
                  fill="url(#paint5_linear_154_1981)"
                />
                <path
                  d="M86.2326 6.58148C86.2326 7.46341 86.2194 8.33886 86.1997 9.21407H21.801C21.7813 8.33862 21.7681 7.46341 21.7681 6.58148H86.2326Z"
                  fill="#9FBE00"
                />
                <path
                  d="M89.5211 3.29073C89.5211 4.19907 89.1528 5.0217 88.5607 5.62054C87.962 6.2129 87.1399 6.58147 86.232 6.58147H78.9961C79.904 6.58147 80.7261 6.2129 81.3247 5.62054C81.9169 5.0217 82.2852 4.19884 82.2852 3.29073C82.2852 1.47429 80.8118 0 78.9961 0H86.232C88.0478 0 89.5211 1.47429 89.5211 3.29073Z"
                  fill="#9FBE00"
                />
                <path
                  d="M69.7871 97.4069V106.621C69.7871 107.345 69.195 107.937 68.4715 107.937H42.3569C47.6719 107.832 65.1826 106.7 65.1826 96.0903H68.4718C69.1952 96.0906 69.7871 96.6829 69.7871 97.4069Z"
                  fill="#687C01"
                />
                <path
                  d="M39.5288 103.33V97.9452C39.5288 97.6478 39.7697 97.4069 40.067 97.4069H51.8626C51.8626 97.4069 42.489 98.3942 39.5288 103.33Z"
                  fill="#9FBE00"
                />
                <path
                  d="M33.1152 98.065V92.6801C33.1152 92.3826 33.3562 92.1417 33.6534 92.1417H45.4491C45.4491 92.1417 36.0752 93.1288 33.1152 98.065Z"
                  fill="#04707E"
                />
                <path
                  d="M54.0002 62.5246C46.8565 62.5246 27.0435 47.4463 24.6426 11.8466H32.4572C34.424 55.4034 54.0002 62.5246 54.0002 62.5246Z"
                  fill="#9FBE00"
                />
                <path
                  d="M40.186 88.1928C40.186 88.1928 49.3952 82.2695 49.3952 73.7134V88.1928H40.186Z"
                  fill="#9FBE00"
                />
                <path
                  d="M23.0835 1.31628V3.29072H19.7944C19.7944 2.2047 20.6759 1.31628 21.7679 1.31628H23.0835Z"
                  fill="#9FBE00"
                />
                <path
                  d="M88.1728 9.21405C88.1267 10.9911 88.0412 12.7483 87.9032 14.4792H82.2856L82.9436 9.21405H88.1728Z"
                  fill="#7D9500"
                />
                <path
                  d="M76.9505 50.5594C75.6613 52.5403 74.2864 54.3438 72.8392 55.9432H69.7871L72.1158 53.5476L74.8982 50.6715C75.589 50.6581 76.2731 50.6187 76.9505 50.5594Z"
                  fill="#7D9500"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_154_1981"
                    x1="75.727"
                    y1="19.9807"
                    x2="106.348"
                    y2="39.373"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_154_1981"
                    x1="42.3163"
                    y1="72.6906"
                    x2="61.8756"
                    y2="92.2598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_154_1981"
                    x1="43.2149"
                    y1="98.82"
                    x2="49.874"
                    y2="112.828"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_154_1981"
                    x1="6.97076"
                    y1="19.9805"
                    x2="38.2359"
                    y2="40.8231"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_154_1981"
                    x1="31.9805"
                    y1="17.8995"
                    x2="75.2139"
                    y2="54.2287"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_154_1981"
                    x1="29.7331"
                    y1="1.51635"
                    x2="30.8377"
                    y2="10.9278"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3FF53" />
                    <stop offset="1" stop-color="#A8C900" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <h2 className="text-grey-m-800 mt-3 mb-4  fw-semibold f-size-28">
              Top Domains
            </h2>
            <DomainList domains={myDomains} filterCategory="top" />
          </div>

          <div className="col-12 d-flex align-items-center flex-column  col-md-6 col-xl-4 ">
            <span>
              <svg
                width="122"
                height="120"
                viewBox="0 0 122 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3519 40.6593C20.8245 41.1429 20.7805 41.978 21.264 42.5055C21.7475 43.033 22.5827 43.0769 23.1102 42.5934L58.6267 9.45056C59.1541 8.96704 59.1981 8.13187 58.7146 7.6044C58.2311 7.07693 57.3959 7.03297 56.8684 7.51649L21.3519 40.6593ZM65.1322 7.51649C64.6047 7.03297 63.7695 7.03297 63.286 7.6044C62.8025 8.13187 62.8025 8.96704 63.3739 9.45056L98.8904 42.5934C99.4179 43.0769 100.253 43.0769 100.737 42.5055C101.22 41.978 101.22 41.1429 100.649 40.6593L65.1322 7.51649Z"
                  fill="#E9E9E9"
                />
                <path
                  d="M61.0004 0C62.5389 0 63.9455 0.615385 65.0004 1.67033C66.0554 2.72527 66.6707 4.08791 66.6707 5.67033C66.6707 7.25275 66.0554 8.61539 65.0004 9.67033C63.9455 10.7253 62.5828 11.3407 61.0004 11.3407C59.418 11.3407 58.0554 10.7253 57.0004 9.67033C55.9455 8.61539 55.3301 7.25275 55.3301 5.67033C55.3301 4.08791 55.9455 2.72527 57.0004 1.67033C58.0114 0.615385 59.418 0 61.0004 0Z"
                  fill="#343B49"
                />
                <path
                  d="M29.7916 51.3846C30.5389 51.3846 31.1103 50.8132 31.1103 50.0659V45.8461C31.1103 44.3077 30.4949 42.945 29.4839 41.9341C28.4729 40.9231 27.1103 40.3077 25.5718 40.3077H18.8905C17.3521 40.3077 15.9894 40.9231 14.9784 41.9341C13.9674 42.945 13.3521 44.3077 13.3521 45.8461V50.0659C13.3521 50.8132 13.9235 51.3846 14.6707 51.3846H29.7916Z"
                  fill="#262D38"
                />
                <path
                  d="M107.286 51.3846C108.033 51.3846 108.605 50.8132 108.605 50.0659V45.8461C108.605 44.3077 107.99 42.945 106.979 41.9341C105.968 40.9231 104.605 40.3077 103.066 40.3077H96.3851C94.8467 40.3077 93.484 40.9231 92.4731 41.9341C91.4621 42.945 90.8467 44.3077 90.8467 45.8461V50.0659C90.8467 50.8132 91.4181 51.3846 92.1654 51.3846H107.286Z"
                  fill="#262D38"
                />
                <path
                  d="M29.7916 51.3846C30.5389 51.3846 31.1103 50.8132 31.1103 50.0659V46.1099H13.3521V50.0659C13.3521 50.8132 13.9235 51.3846 14.6707 51.3846H29.7916Z"
                  fill="#4E5868"
                />
                <path
                  d="M107.286 51.3846C108.033 51.3846 108.605 50.8132 108.605 50.0659V46.1099H90.8467V50.0659C90.8467 50.8132 91.4181 51.3846 92.1654 51.3846H107.286Z"
                  fill="#4E5868"
                />
                <path
                  d="M10.187 48.7473H111.813C114.539 48.7473 117.044 49.8462 118.846 51.6484C120.649 53.4505 121.747 55.956 121.747 58.6813V110.066C121.747 112.791 120.649 115.297 118.846 117.099C117.044 118.901 114.539 120 111.813 120H10.187C7.46172 120 4.95623 118.901 3.15403 117.099C1.35183 115.297 0.25293 112.791 0.25293 110.066V58.6813C0.25293 55.956 1.35183 53.4505 3.15403 51.6484C4.95623 49.8901 7.41776 48.7473 10.187 48.7473Z"
                  fill="#00515B"
                />
                <path
                  d="M19.198 60.5275H102.758C103.506 60.5275 104.077 61.0989 104.077 61.8461C104.077 63.1209 104.605 64.2198 105.44 65.0549C106.275 65.8901 107.418 66.4176 108.649 66.4176C109.396 66.4176 109.967 66.989 109.967 67.7363V101.099C109.967 101.846 109.396 102.418 108.649 102.418C107.374 102.418 106.275 102.945 105.44 103.78C104.605 104.615 104.077 105.758 104.077 106.989C104.077 107.736 103.506 108.308 102.758 108.308H19.198C18.4508 108.308 17.8794 107.736 17.8794 106.989C17.8794 105.714 17.3519 104.615 16.5167 103.78C15.6816 102.945 14.5387 102.418 13.3079 102.418C12.5607 102.418 11.9893 101.846 11.9893 101.099V67.7363C11.9893 66.989 12.5607 66.4176 13.3079 66.4176C14.5827 66.4176 15.6816 65.8901 16.5167 65.0549C17.3519 64.2198 17.8794 63.0769 17.8794 61.8461C17.8794 61.0989 18.4508 60.5275 19.198 60.5275Z"
                  fill="#E3FF53"
                />
                <path
                  d="M32.2967 77.8462C32.2967 78.5934 32.8681 79.1648 33.6153 79.1648C34.3626 79.1648 34.934 78.5934 34.934 77.8462C34.934 75.6923 34.0549 73.7143 32.6483 72.2637C31.2417 70.8571 29.2637 69.978 27.0659 69.978C24.8681 69.978 22.934 70.8571 21.4835 72.2637C20.0769 73.6703 19.1978 75.6484 19.1978 77.8462C19.1978 80.044 20.0769 81.978 21.4835 83.4286C22.8901 84.8352 24.8681 85.7143 27.0659 85.7143C28.5164 85.7143 29.8351 86.2857 30.7582 87.2528C31.7252 88.2198 32.2967 89.4945 32.2967 90.9451C32.2967 92.3956 31.7252 93.7143 30.7582 94.6374C29.8351 95.6044 28.5164 96.1758 27.0659 96.1758C25.6153 96.1758 24.2967 95.6044 23.3736 94.6374C22.4065 93.6703 21.8351 92.3956 21.8351 90.9451C21.8351 90.1978 21.2637 89.6264 20.5164 89.6264C19.7692 89.6264 19.1978 90.1978 19.1978 90.9451C19.1978 93.0989 20.0769 95.0769 21.4835 96.5275C22.8901 97.9341 24.8681 98.8132 27.0659 98.8132C29.2637 98.8132 31.1978 97.9341 32.6483 96.5275C34.0549 95.1209 34.934 93.1429 34.934 90.9451C34.934 88.7473 34.0549 86.8132 32.6483 85.3626C31.2417 83.956 29.2637 83.0769 27.0659 83.0769C25.6153 83.0769 24.2967 82.5055 23.3736 81.5385C22.4065 80.6154 21.8351 79.2967 21.8351 77.8462C21.8351 76.3956 22.4065 75.0769 23.3736 74.1539C24.3406 73.1868 25.6153 72.6154 27.0659 72.6154C28.5164 72.6154 29.8351 73.1868 30.7582 74.1539C31.7252 75.1209 32.2967 76.3956 32.2967 77.8462Z"
                  fill="#4E4E4E"
                />
                <path
                  d="M47.4179 69.978C50.0552 69.978 52.4289 71.033 54.1871 72.7912C55.9453 74.5495 57.0003 76.9231 57.0003 79.5604V89.2747C57.0003 91.9121 55.9453 94.2857 54.1871 96.044C52.4289 97.8022 50.0552 98.8571 47.4179 98.8571C44.7805 98.8571 42.4069 97.8022 40.6486 96.044C38.8904 94.2857 37.8354 91.9121 37.8354 89.2747V79.5604C37.8354 76.9231 38.8904 74.5495 40.6486 72.7912C42.4069 71.033 44.7805 69.978 47.4179 69.978ZM47.4179 72.6154C45.5278 72.6154 43.7695 73.4066 42.5387 74.6374C41.308 75.8681 40.5168 77.6264 40.5168 79.5165V89.2308C40.5168 91.1209 41.308 92.8791 42.5387 94.1099C43.7695 95.3407 45.5278 96.1319 47.4179 96.1319C49.308 96.1319 51.0662 95.3407 52.297 94.1099C53.5278 92.8791 54.319 91.1209 54.319 89.2308V79.5165C54.319 77.6264 53.5278 75.8681 52.297 74.6374C51.0223 73.4066 49.308 72.6154 47.4179 72.6154Z"
                  fill="#4E4E4E"
                />
                <path
                  d="M62.4948 71.2967C62.4948 70.5495 61.9234 69.978 61.1761 69.978C60.4289 69.978 59.8574 70.5495 59.8574 71.2967V97.4945C59.8574 98.2418 60.4289 98.8132 61.1761 98.8132H75.6816C76.4289 98.8132 77.0003 98.2418 77.0003 97.4945C77.0003 96.7473 76.4289 96.1758 75.6816 96.1758H62.4948V71.2967Z"
                  fill="#4E4E4E"
                />
                <path
                  d="M81.22 69.978H88.3409C92.297 69.978 95.9014 71.6044 98.5387 74.1978C101.132 76.7912 102.759 80.3956 102.759 84.3956C102.759 88.3956 101.132 91.956 98.5387 94.5934C95.9453 97.1868 92.3409 98.8132 88.3409 98.8132H81.22C80.4728 98.8132 79.9014 98.2418 79.9014 97.4945V71.2967C79.9014 70.5934 80.5168 69.978 81.22 69.978ZM88.3409 72.6154H82.5387V96.1758H88.3409C91.5937 96.1758 94.5387 94.8571 96.6486 92.7033C98.8025 90.5495 100.121 87.6484 100.121 84.3956C100.121 81.1429 98.8025 78.1978 96.6486 76.0879C94.5387 73.978 91.5937 72.6154 88.3409 72.6154Z"
                  fill="#4E4E4E"
                />
              </svg>
            </span>

            <h2 className="text-grey-m-800 mt-3 mb-4  fw-semibold f-size-28">
              Recently Sold
            </h2>

            <DomainList domains={myDomains} filterCategory="recently" />
          </div>

          <div className="d-flex justify-content-center mt-5 ">
            <a
              href="DomainForSale"
              className="btn rounded arrow rounded-3 px-3 exp-more py-2 btn-secondary  f-size-18 f-m-size-16 d-flex align-items-center "
            >
              Explore more
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="container-lg">
          <div className="row d-flex justify-content-center ">
            <div className="col-12 d-flex justify-content-center flex-column align-items-center ">
              <svg
                width="76"
                height="110"
                viewBox="0 0 76 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3430_10608)">
                  <path
                    d="M59.6054 83.6644L59.5807 96.8906C59.5717 100.072 57.4823 103.249 53.3124 105.671C44.9098 110.553 31.223 110.559 22.7575 105.671C18.5067 103.217 16.3859 99.9933 16.3949 96.776L16.4196 83.5498C16.4106 86.7671 18.5315 89.9911 22.7822 92.4444C31.25 97.3332 44.9368 97.3265 53.3371 92.4444C57.507 90.0225 59.5964 86.8457 59.6054 83.6644Z"
                    fill="#004952"
                  />
                  <path
                    d="M59.6099 88.1915L59.5784 96.8884C59.5784 100.079 57.4823 103.255 53.3057 105.68C44.9053 110.559 31.2185 110.559 22.7552 105.68C18.5 103.224 16.3881 100.002 16.3881 96.7783L16.4038 92.8825C16.4982 96.0099 18.6101 99.1238 22.7552 101.517C31.2185 106.396 44.9053 106.396 53.3057 101.517C57.4823 99.0924 59.5784 95.9156 59.5784 92.741L59.5941 88.4858C59.6099 88.3914 59.6099 88.2813 59.6099 88.1892V88.1915Z"
                    fill="#04707E"
                  />
                  <path
                    d="M53.2293 74.7518C61.697 79.6405 61.7307 87.5691 53.3394 92.4444C44.9368 97.3265 31.25 97.3332 22.7844 92.4444C14.3279 87.5624 14.3032 79.6383 22.7036 74.7562C31.0949 69.8787 44.7728 69.8675 53.2293 74.7495V74.7518Z"
                    fill="white"
                  />
                  <path
                    d="M38.0551 110C32.4002 110 26.7386 108.753 22.4159 106.259C18.0843 103.759 15.7051 100.391 15.7141 96.7739L15.7388 83.5679V83.5454C15.7388 83.1724 16.0443 82.8691 16.4195 82.8691C16.7947 82.8691 17.098 83.1747 17.098 83.5499V83.5634C17.0935 86.666 19.2324 89.6092 23.1192 91.8559C31.3825 96.6256 44.7862 96.6256 52.9933 91.8559C56.8105 89.6384 58.9156 86.7267 58.9223 83.66C58.9223 83.2848 59.2279 82.9837 59.6031 82.9837C59.9783 82.9837 60.2816 83.2893 60.2816 83.6645L60.2569 96.8907C60.2479 100.463 57.9001 103.788 53.6516 106.257C49.3582 108.751 43.7078 110 38.0529 110H38.0551ZM17.0913 88.1444L17.0756 96.7784C17.0666 99.8855 19.2054 102.835 23.0967 105.084C31.36 109.854 44.7637 109.854 52.9709 105.084C56.788 102.867 58.8931 99.9574 58.8999 96.8885L58.9156 88.2387C57.8057 90.0293 56.0331 91.6627 53.6786 93.0309C45.094 98.0208 31.0837 98.0208 22.4407 93.0309C20.0232 91.6357 18.2146 89.9709 17.089 88.1421L17.0913 88.1444Z"
                    fill="black"
                  />
                  <path
                    d="M38.0798 96.7738C32.4249 96.7738 26.7633 95.5269 22.4406 93.033C18.1248 90.5415 15.7433 87.1849 15.7388 83.5835C15.7343 79.9978 18.0843 76.6547 22.3598 74.1721C30.9376 69.1845 44.9367 69.1822 53.5662 74.1654C57.8911 76.6614 60.2771 80.0247 60.2838 83.6329C60.2883 87.2164 57.9428 90.5549 53.6786 93.033C49.3851 95.5269 43.7347 96.7738 38.0798 96.7738ZM37.954 71.7682C32.5462 71.7682 27.1474 72.9611 23.0428 75.3449C19.2054 77.5758 17.0935 80.4988 17.098 83.5812C17.1025 86.6794 19.2414 89.6181 23.1214 91.858C31.3847 96.6277 44.7884 96.6277 52.9956 91.858C56.8239 89.6338 58.9313 86.7131 58.9268 83.6329C58.9223 80.5302 56.779 77.5848 52.8877 75.3381C48.7651 72.9566 43.355 71.7659 37.954 71.7659V71.7682Z"
                    fill="black"
                  />
                  <path
                    d="M13.9482 65.4213C18.0484 68.9598 20.8702 73.6801 21.9464 78.8745C23.0877 93.3049 51.6903 93.4465 54.0358 78.8745C55.0625 73.7543 57.7541 69.0677 61.8026 65.6347C70.3737 58.369 75.5793 47.2613 74.7525 34.9652C73.5213 16.6929 58.6056 1.87378 40.3265 0.752683C18.9134 -0.561629 1.16229 16.4076 1.16229 37.5175C1.16229 48.6723 6.11848 58.6655 13.9482 65.4213Z"
                    fill="white"
                  />
                  <path
                    d="M61.8071 65.6391C57.7451 69.0721 55.0603 73.7609 54.0425 78.8744C51.697 93.4014 23.3056 93.3003 21.9621 79.0451C44.748 77.2949 62.7237 57.1938 62.7237 32.6937C62.7237 21.9051 59.2414 11.9478 53.3775 4.06421C65.2715 9.58656 73.8179 21.3098 74.7525 34.9719C75.568 47.2568 70.3692 58.3689 61.8048 65.6414L61.8071 65.6391Z"
                    fill="#E9EDF4"
                  />
                  <path
                    d="M37.5855 90.4291C37.2597 90.4291 36.9339 90.4224 36.6082 90.4089C29.403 90.1168 21.8654 86.4547 21.27 78.9283C20.2478 74.0148 17.4844 69.3709 13.5032 65.9357C5.23095 58.7935 0.483704 48.4363 0.483704 37.5174C0.483704 26.5985 4.68276 17.3489 12.3013 10.182C19.9153 3.02178 29.8838 -0.570666 40.3669 0.0741329C59.0952 1.22444 74.1683 16.2053 75.4287 34.9202C76.2397 46.9782 71.4318 58.3622 62.2406 66.1537C58.3875 69.4181 55.7095 73.9834 54.7007 79.0092C53.4246 86.9378 45.1209 90.4314 37.5832 90.4314L37.5855 90.4291ZM14.3929 64.9068C18.5987 68.5351 21.5149 73.4464 22.6113 78.7351C23.1528 85.5156 30.0568 88.7845 36.6621 89.0496C43.8807 89.3417 52.1597 86.248 53.364 78.7643C54.4356 73.415 57.2754 68.5778 61.3599 65.1157C70.2208 57.6073 74.8535 46.6322 74.0694 35.0101C72.8585 16.9737 58.3336 2.5365 40.2837 1.42888C30.1714 0.793073 20.5691 4.26645 13.2314 11.1705C5.88698 18.0791 1.84295 27.4365 1.84295 37.5174C1.84295 47.5983 6.41496 58.0252 14.3929 64.9068Z"
                    fill="black"
                  />
                  <path
                    d="M46.4644 54.9944L42.4024 52.6354C41.9755 52.3815 41.7688 51.7502 41.9531 50.8852C41.989 50.7347 42.0115 50.5976 42.0564 50.4359C42.5642 48.0993 42.3103 46.3963 41.0319 45.6594L45.0939 48.0184C46.3611 48.7554 46.6239 50.4583 46.1072 52.7949C46.0735 52.9567 46.0375 53.0937 46.0038 53.2442C45.8196 54.107 46.0263 54.7405 46.4644 54.9944Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M46.4644 55.6731C46.3476 55.6731 46.2308 55.6438 46.1252 55.5809L42.0632 53.2219C41.3375 52.7906 41.0522 51.8649 41.2903 50.7438C41.3465 50.481 41.369 50.3731 41.4027 50.254C41.8587 48.1511 41.6273 46.7941 40.7039 46.2527L40.6927 46.246C40.3692 46.0572 40.2591 45.6438 40.4478 45.3181C40.6343 44.9923 41.0499 44.8845 41.3757 45.0709C41.3802 45.0732 41.3869 45.0777 41.3914 45.0799L45.4377 47.43C46.9407 48.3039 47.3901 50.1574 46.7722 52.9388L46.7003 53.2489C46.5521 53.9319 46.6487 54.3116 46.8037 54.4037C47.1272 54.5924 47.2373 55.008 47.0486 55.3316C46.9228 55.5495 46.6958 55.6708 46.4622 55.6708L46.4644 55.6731ZM42.9214 47.54C43.045 48.3826 42.9776 49.3981 42.7215 50.5798L42.6541 50.8696C42.6541 50.8696 42.6204 51.0336 42.6181 51.0381C42.4878 51.6425 42.6271 51.975 42.7552 52.0514L45.2782 53.5185C45.2917 53.3837 45.3119 53.2466 45.3433 53.1051C45.3433 53.1006 45.3815 52.9433 45.3838 52.9388L45.4512 52.6558C45.777 51.1797 45.923 49.2857 44.7592 48.6095L42.9259 47.5445L42.9214 47.54Z"
                    fill="black"
                  />
                  <path
                    d="M49.5558 40.0745L45.5005 37.7178C46.3587 38.2165 47.509 38.0974 48.7514 37.3807C49.0705 37.1965 49.3985 36.9719 49.7265 36.7067C50.05 36.4439 50.3803 36.1765 50.7106 35.9092C50.8229 35.8193 50.933 35.7429 51.0431 35.68C51.5283 35.3992 51.9777 35.37 52.3035 35.5587L56.3587 37.9155C56.033 37.7267 55.5836 37.7559 55.0983 38.0368C54.9882 38.0997 54.8782 38.1761 54.7658 38.2659C54.4356 38.5333 54.1053 38.8007 53.7818 39.0613C53.4538 39.3241 53.128 39.5488 52.8067 39.7353C51.5643 40.452 50.4117 40.571 49.5558 40.0723V40.0745Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M50.7309 41.0562C50.1804 41.0562 49.6704 40.9259 49.2143 40.6608L45.1591 38.3017C44.8356 38.113 44.7255 37.6974 44.9142 37.3739C45.1029 37.0503 45.5185 36.938 45.8421 37.129H45.8443C46.4801 37.4974 47.3923 37.3806 48.4123 36.7897C48.7043 36.6212 49.0009 36.4168 49.302 36.1741L50.2815 35.3811C50.4275 35.2665 50.5646 35.1721 50.7016 35.0935C51.3891 34.6981 52.0991 34.6554 52.645 34.9722L56.7025 37.3289C57.0261 37.5177 57.1362 37.9333 56.9474 38.2568C56.761 38.5803 56.3431 38.6904 56.0196 38.5017C55.9319 38.4523 55.7297 38.459 55.4399 38.6253C55.359 38.6725 55.2737 38.7286 55.1905 38.7983L54.2132 39.5891C53.8515 39.8789 53.4988 40.1216 53.1505 40.3238C52.3058 40.8113 51.4835 41.0562 50.7331 41.0562H50.7309ZM49.8973 39.488C50.5331 39.8587 51.4498 39.7374 52.4698 39.1488C52.7619 38.9802 53.0584 38.7758 53.3595 38.5332L54.339 37.7401C54.393 37.6974 54.4469 37.6569 54.4985 37.621L51.9643 36.1494C51.8812 36.1 51.6745 36.1022 51.3846 36.273C51.3038 36.3202 51.2184 36.3763 51.1353 36.446L50.158 37.2368C49.794 37.5289 49.4413 37.7715 49.093 37.9715C48.7538 38.1669 48.419 38.3242 48.091 38.441L49.8973 39.4925V39.488Z"
                    fill="black"
                  />
                  <path
                    d="M27.1991 66.1224L23.1371 63.7634C22.8271 63.5791 22.6316 63.1882 22.6316 62.6243L22.6091 54.0509C22.6091 53.487 22.4024 53.0961 22.0924 52.9119L26.1432 55.2709C26.4667 55.4551 26.6622 55.846 26.6622 56.41L26.6846 64.9833C26.6846 65.5472 26.8801 65.9382 27.2036 66.1224H27.1991Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M27.2014 66.801C27.0868 66.801 26.9699 66.7717 26.8644 66.7133C26.8576 66.7088 26.8509 66.7043 26.8419 66.6999L22.7956 64.3498C22.2586 64.0308 21.9509 63.4017 21.9509 62.6244L21.9284 54.051C21.9284 53.7207 21.8295 53.5455 21.7442 53.4938C21.4229 53.3029 21.3173 52.8895 21.506 52.566C21.6925 52.2424 22.1081 52.1368 22.4339 52.3233L26.4847 54.6823C27.0351 54.9969 27.3407 55.6102 27.3407 56.4078L27.3631 64.9811C27.3631 65.2575 27.4283 65.4642 27.5339 65.5293L27.5429 65.5361C27.8664 65.7225 27.9765 66.1382 27.79 66.4617C27.6642 66.6796 27.435 66.8032 27.2014 66.8032V66.801ZM23.2876 54.3925L23.3101 62.6221C23.3101 62.9569 23.4022 63.1321 23.4831 63.1793L26.0016 64.6419L25.9792 56.4123C25.9792 56.1337 25.9118 55.9225 25.8062 55.8618L23.2899 54.397L23.2876 54.3925Z"
                    fill="black"
                  />
                  <path
                    d="M56.2712 15.5763C55.9499 15.3921 55.5118 15.4146 55.0175 15.7021L47.536 20.018C47.0305 20.3168 46.5924 20.3281 46.2801 20.1438L42.2181 17.796C42.5394 17.9803 42.9775 17.9578 43.474 17.6702L50.9667 13.3431C51.4498 13.0555 51.8991 13.0331 52.2204 13.2173L56.2712 15.5763Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M46.7497 20.9482C46.3858 20.9482 46.1072 20.8313 45.9364 20.7302L41.8834 18.3869C41.5576 18.1982 41.4476 17.7826 41.634 17.4591C41.8227 17.1333 42.2406 17.0232 42.5619 17.2097C42.672 17.2726 42.8944 17.2254 43.1371 17.0839L50.6298 12.7567C51.2993 12.3591 52.0047 12.3096 52.5619 12.6264L56.6172 14.9899C56.9407 15.1787 57.0508 15.5921 56.8643 15.9178C56.6778 16.2413 56.2622 16.3514 55.9387 16.1672C55.8286 16.1043 55.6062 16.1515 55.3635 16.2908L47.8798 20.6089C47.4462 20.865 47.0665 20.9504 46.7542 20.9504L46.7497 20.9482ZM44.0941 18.0971L46.6217 19.5575C46.7363 19.6271 46.9542 19.5754 47.1923 19.4339L54.4019 15.273L51.8789 13.8037C51.7666 13.7385 51.5419 13.788 51.3128 13.9273L44.0964 18.0971H44.0941Z"
                    fill="black"
                  />
                  <path
                    d="M19.1469 57.6076L15.0916 55.2508C14.849 55.1092 14.6311 54.9183 14.4423 54.6756C13.519 53.4826 13.5998 50.9753 14.6243 48.8028C15.5095 46.9178 16.8216 45.3968 18.2303 44.5835C18.6257 44.3544 19.0278 44.1836 19.4322 44.0735C19.7041 44.0016 19.9759 43.9275 20.241 43.8691C20.4118 43.8286 20.5803 43.759 20.7465 43.6624C21.6857 43.1187 22.5012 41.7684 22.4967 40.6204L26.552 42.9771C26.5542 44.1252 25.7409 45.4754 24.8018 46.0191C24.6356 46.1158 24.4648 46.1854 24.2963 46.2258C24.0312 46.2865 23.7594 46.3584 23.4875 46.4303C23.0831 46.5381 22.6809 46.7111 22.2855 46.9403C20.8769 47.7536 19.5648 49.2768 18.6796 51.1596C17.6551 53.3321 17.5742 55.8394 18.4976 57.0324C18.6863 57.275 18.9043 57.466 19.1469 57.6076Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M19.147 58.2882C19.0302 58.2882 18.9156 58.259 18.8077 58.1961C18.8077 58.1961 18.8032 58.1938 18.801 58.1916L14.7525 55.8393C14.4334 55.6551 14.1481 55.4035 13.9077 55.0934C12.8293 53.7005 12.8742 50.9325 14.0133 48.5151C14.9434 46.529 16.3566 44.8822 17.8911 43.997C18.3449 43.7364 18.8032 43.5432 19.2548 43.4219C19.5357 43.3455 19.8187 43.2713 20.0928 43.2107C20.1872 43.1882 20.2973 43.1433 20.4096 43.0781C21.1623 42.6423 21.8228 41.4965 21.8183 40.627C21.8183 40.3844 21.9486 40.1597 22.1575 40.0384C22.3687 39.9148 22.6271 39.917 22.8383 40.0384L26.8958 42.3951C27.1047 42.5165 27.2328 42.7389 27.235 42.9793C27.2373 44.3363 26.3206 45.9314 25.1434 46.6122C24.9165 46.7425 24.6851 46.8368 24.4559 46.8908C24.1908 46.9514 23.9279 47.0211 23.6651 47.0907C23.3258 47.1828 22.9776 47.3311 22.6248 47.5333C21.3263 48.2837 20.1131 49.7104 19.2975 51.4538C18.2865 53.5949 18.3719 55.7629 19.0369 56.6234C19.1694 56.7942 19.32 56.9312 19.4885 57.0278C19.812 57.2165 19.9221 57.6322 19.7334 57.9557C19.6075 58.1736 19.3806 58.2949 19.147 58.2949V58.2882ZM23.0068 41.7009C22.6878 42.7411 21.9576 43.7476 21.0859 44.2509C20.859 44.3812 20.6275 44.4756 20.3984 44.5295C20.1333 44.5902 19.8704 44.6598 19.6075 44.7294C19.2683 44.8216 18.9201 44.9698 18.5673 45.172C17.2687 45.9224 16.0555 47.3491 15.24 49.0925C14.229 51.2336 14.3144 53.4017 14.9794 54.2621C15.1119 54.4329 15.2625 54.5699 15.431 54.6665L17.2665 55.7337C17.0239 54.3093 17.2935 52.512 18.0663 50.8741C18.9965 48.8881 20.4119 47.2412 21.9441 46.356C22.3979 46.0954 22.8563 45.9022 23.3078 45.7809C23.5887 45.7045 23.8718 45.6304 24.1459 45.5697C24.2402 45.5472 24.3503 45.5023 24.4626 45.4372C25.1142 45.0597 25.6938 44.1543 25.8399 43.3545L23.0045 41.7077L23.0068 41.7009Z"
                    fill="black"
                  />
                  <path
                    d="M44.9345 13.0781C44.784 12.9859 44.6132 12.9163 44.4402 12.8601C43.6472 12.6063 42.6676 12.8264 41.6768 13.3903C40.859 13.8621 40.0322 14.5991 39.3178 15.5202C37.626 17.7062 36.8779 20.3416 37.3497 22.5299C37.4081 22.8287 37.4643 23.1275 37.5227 23.4398C37.7406 24.5676 36.9004 26.2144 35.7972 26.857L31.7465 24.498C32.8518 23.8532 33.6921 22.2086 33.4719 21.0808C33.4135 20.7819 33.3461 20.4697 33.2877 20.1708C32.8271 17.9961 33.5753 15.3495 35.267 13.1612C35.9815 12.24 36.797 11.5144 37.626 11.0313C38.6033 10.4674 39.5941 10.2607 40.376 10.5011C40.5602 10.5595 40.722 10.6269 40.8837 10.719L44.9345 13.0781Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M35.7949 27.5333C35.6781 27.5333 35.559 27.5018 35.4534 27.4412L31.4027 25.0822C31.1937 24.9608 31.0634 24.7384 31.0634 24.4958C31.0634 24.2531 31.1937 24.0307 31.4027 23.9094C32.2609 23.4084 32.9686 22.0469 32.8046 21.2089L32.6204 20.299C32.1194 17.9287 32.9079 15.1001 34.73 12.7456C35.4804 11.7773 36.3656 10.982 37.2822 10.445C38.4573 9.76875 39.6255 9.55981 40.5759 9.85413C40.8073 9.92602 41.0185 10.0181 41.2184 10.1327L45.2018 12.4513C45.231 12.467 45.2625 12.485 45.2894 12.503C45.6062 12.6984 45.7073 13.1118 45.5141 13.4309C45.3254 13.7499 44.912 13.8555 44.5907 13.669L44.5301 13.6331C44.4514 13.5904 44.3503 13.5477 44.2223 13.5072C43.6493 13.323 42.863 13.4938 42.007 13.9813C41.2566 14.4149 40.4905 15.1114 39.8525 15.9359C38.2685 17.9804 37.5811 20.3933 38.0102 22.3861L38.1877 23.314C38.4595 24.716 37.5002 26.6481 36.1342 27.4434C36.0286 27.5041 35.9095 27.5355 35.7927 27.5355L35.7949 27.5333ZM32.9304 24.3992L35.7612 26.0482C36.4734 25.4439 36.9992 24.3026 36.8576 23.5657L36.6846 22.6535C36.1746 20.29 36.9587 17.4614 38.783 15.1024C39.5379 14.1273 40.4209 13.332 41.3375 12.8018C41.67 12.6131 42.0003 12.458 42.3216 12.3435L40.5422 11.3077C40.4321 11.2448 40.313 11.1932 40.1737 11.1505C39.6008 10.973 38.792 11.1415 37.9652 11.62C37.1969 12.0694 36.4487 12.7456 35.8039 13.5769C34.2447 15.5899 33.5348 18.0635 33.9527 20.0294L34.1391 20.9528C34.3503 22.0424 33.8201 23.4511 32.9304 24.4014V24.3992Z"
                    fill="black"
                  />
                  <path
                    d="M41.6813 13.3902C42.6653 12.8218 43.6471 12.6129 44.4357 12.8555C46.0264 13.3588 46.5611 15.1292 45.9433 17.8881C45.9073 18.0611 45.8714 18.2251 45.8332 18.4003C45.4984 19.8966 46.3477 20.7077 47.5294 20.0247L55.0176 15.7021C55.9949 15.1381 56.7835 15.5965 56.7858 16.7198L56.8105 25.392C56.8127 26.5468 56.0017 27.8903 55.0581 28.4363C54.8896 28.5329 54.7188 28.6048 54.5458 28.6452C54.4133 28.6789 54.274 28.7104 54.1414 28.7441C53.6651 28.8587 53.1866 29.0541 52.7238 29.3237C51.3128 30.137 50.0187 31.6063 49.165 33.4104C47.9945 35.8795 47.8821 38.1757 48.8662 39.4608C49.7289 40.5931 51.1893 40.674 52.8069 39.7394C53.1259 39.5551 53.4539 39.3305 53.7819 39.0653C54.1055 38.8025 54.4357 38.5351 54.766 38.27C54.8783 38.1802 54.9884 38.1038 55.0985 38.0409C56.0511 37.4904 56.8689 37.9061 56.8734 39.0496L56.8981 47.5354C56.9003 48.6497 56.1095 50.0202 55.1412 50.5796L47.7114 54.8685C46.5364 55.547 45.6871 54.736 46.0062 53.2487C46.0421 53.1004 46.0713 52.9566 46.1073 52.8016C46.6599 50.2831 46.3162 48.5037 44.775 47.8701C43.8808 47.5039 42.9035 47.6342 41.879 48.2251C41.2072 48.6138 40.5175 49.1979 39.8188 49.9685C38.0439 51.9231 37.107 54.3922 37.3047 56.6704C37.3587 57.2478 37.4395 57.7937 37.5451 58.3419C37.7473 59.4765 36.9206 61.1053 35.8107 61.7456L28.4483 65.9964C27.471 66.5603 26.6824 66.111 26.6779 64.9876L26.6532 56.4098C26.651 55.2617 25.8377 54.8416 24.8828 55.3943C24.7772 55.4549 24.6694 55.5291 24.5593 55.6144C24.0897 55.9874 23.6269 56.3469 23.1708 56.7041C22.8855 56.9265 22.6024 57.1175 22.3238 57.2792C20.7489 58.1891 19.3268 58.115 18.491 57.0388C17.5676 55.8458 17.6485 53.3385 18.673 51.166C19.5582 49.281 20.8702 47.76 22.2789 46.9467C22.6743 46.7176 23.0765 46.5468 23.4809 46.4367C23.7527 46.3648 24.0246 46.2907 24.2897 46.2323C24.4604 46.1918 24.6289 46.1222 24.7952 46.0256C25.7343 45.4819 26.5499 44.1316 26.5454 42.9836L26.5206 34.244C26.5184 33.1206 27.3092 31.7501 28.2776 31.1907L35.7882 26.8546C36.8981 26.2143 37.7316 24.5652 37.5159 23.4396C37.4553 23.1363 37.3969 22.833 37.3362 22.5365C36.8734 20.3504 37.617 17.7061 39.311 15.5178C40.0232 14.5967 40.8478 13.871 41.6723 13.3947L41.6813 13.3902Z"
                    fill="white"
                  />
                  <path
                    d="M27.6552 66.9132C27.3699 66.9132 27.1003 66.8435 26.8621 66.7065C26.3207 66.3942 26.0084 65.7674 26.0039 64.9855L25.9792 56.4077C25.9792 56.0752 25.8848 55.9022 25.804 55.855C25.7208 55.8056 25.5186 55.81 25.2311 55.9763C25.1524 56.0212 25.0715 56.0774 24.9907 56.1403L23.5977 57.2322C23.2854 57.4748 22.9754 57.6838 22.6721 57.859C20.7714 58.9554 19.0122 58.8004 17.963 57.4479C16.8846 56.0549 16.9273 53.287 18.0686 50.8696C18.9987 48.8835 20.4142 47.2367 21.9464 46.3515C22.4002 46.0909 22.8586 45.8977 23.3101 45.7763C23.591 45.7 23.8741 45.6258 24.1482 45.5652C24.2425 45.5427 24.3526 45.4978 24.4649 45.4326C25.2198 44.9967 25.8781 43.8509 25.8759 42.9815L25.8511 34.2419C25.8489 32.8804 26.77 31.2807 27.9495 30.5977L35.458 26.2639C36.314 25.7696 37.0217 24.4059 36.8599 23.5634L36.6824 22.6669C36.1769 20.2832 36.9632 17.4524 38.7853 15.1001C39.5335 14.134 40.4164 13.3409 41.3443 12.8062C42.5171 12.13 43.6853 11.9165 44.6379 12.2109C45.7815 12.5726 47.5564 13.8082 46.6083 18.041L46.5004 18.5443C46.3679 19.1374 46.4892 19.4744 46.6038 19.5575C46.7071 19.6317 46.9408 19.5845 47.1924 19.4407L54.6806 15.1181C55.3614 14.7249 56.0646 14.6822 56.6083 14.9923C57.1542 15.3045 57.4665 15.9359 57.471 16.72L57.4935 25.3922C57.4957 26.7492 56.5791 28.3466 55.4018 29.0251C55.1749 29.1576 54.939 29.252 54.7053 29.3059L54.3144 29.4002C53.8988 29.4991 53.4831 29.6699 53.0675 29.9102C51.7622 30.6629 50.5647 32.0424 49.7828 33.6982C48.7291 35.9201 48.5854 37.9691 49.4076 39.0475C50.2704 40.1776 51.697 39.5957 52.4699 39.1509C52.7619 38.9824 53.0585 38.7779 53.3596 38.5353L54.3391 37.7422C54.4852 37.6276 54.6222 37.5333 54.7593 37.4546C55.4467 37.0592 56.1544 37.0143 56.6981 37.3311C57.2486 37.6478 57.5519 38.2567 57.5564 39.0475L57.5811 47.5333C57.5833 48.8903 56.6622 50.4854 55.4827 51.1684L48.0551 55.4573C47.3047 55.8909 46.5521 55.9044 45.9904 55.4955C45.3636 55.0394 45.1232 54.1453 45.3479 53.1073L45.4512 52.649C45.9545 50.3573 45.6422 48.9599 44.5233 48.4993C43.8449 48.2185 43.072 48.3263 42.2272 48.8161C41.6206 49.1643 40.9826 49.708 40.331 50.427C38.6865 52.2378 37.8103 54.5519 37.99 56.6166C38.0417 57.1693 38.1203 57.6928 38.2214 58.2207C38.4753 59.6384 37.5092 61.5593 36.1612 62.3389L28.7988 66.5896C28.4169 66.8121 28.0259 66.9222 27.662 66.9222L27.6552 66.9132ZM25.6826 54.471C25.9702 54.471 26.2421 54.5407 26.4825 54.6777C27.0351 54.9945 27.3384 55.6078 27.3407 56.4054L27.3654 64.9833C27.3654 65.3135 27.4598 65.4843 27.5406 65.5315C27.6193 65.5786 27.8215 65.5741 28.1136 65.4056L35.4759 61.1549C36.3387 60.6562 37.0351 59.3216 36.8824 58.4589C36.7745 57.895 36.6892 57.3311 36.633 56.7312C36.4195 54.2576 37.3991 51.6267 39.32 49.5103C40.0637 48.6858 40.8118 48.0545 41.542 47.6344C42.753 46.9356 43.9594 46.7986 45.0333 47.2389C46.2847 47.7534 47.6013 49.1599 46.77 52.9433L46.6667 53.4083C46.5521 53.9341 46.6487 54.2913 46.7858 54.3924C46.8869 54.4688 47.1183 54.4238 47.3721 54.2778L54.7997 49.9889C55.5591 49.5508 56.2218 48.4027 56.2196 47.5333L56.1949 39.0475C56.1949 38.7218 56.1028 38.5532 56.0219 38.5038C55.9365 38.4566 55.7343 38.4566 55.4422 38.6274C55.3614 38.6746 55.276 38.7307 55.1929 38.8004L54.2156 39.5912C53.8538 39.881 53.5011 40.1237 53.1529 40.3259C51.2072 41.447 49.4054 41.2762 48.3315 39.8698C47.1834 38.3645 47.2666 35.8393 48.5584 33.1163C49.4548 31.2178 50.8523 29.6204 52.389 28.7307C52.917 28.4274 53.4562 28.2073 53.9886 28.0792L54.3818 27.9848C54.4986 27.9579 54.611 27.9129 54.7233 27.8455C55.4804 27.4097 56.1387 26.2616 56.1365 25.3899L56.114 16.7177C56.114 16.3852 56.0174 16.2122 55.9343 16.1628C55.8489 16.1156 55.6512 16.1201 55.3636 16.2863L47.8754 20.609C47.1228 21.0471 46.3634 21.0583 45.804 20.6449C45.1794 20.1866 44.9457 19.2902 45.1771 18.2477L45.2872 17.7377C45.5928 16.374 45.8601 14.0104 44.238 13.4982C43.6539 13.3207 42.8675 13.487 42.0273 13.9723C41.2522 14.4193 40.504 15.0934 39.8637 15.9224C38.3068 17.9332 37.5991 20.409 38.0169 22.3838L38.1832 23.2196C38.4708 24.7092 37.5092 26.6413 36.1432 27.4299L28.6348 31.766C27.8777 32.2041 27.2149 33.3544 27.2171 34.2306L27.2418 42.9702C27.2441 44.3272 26.3274 45.9224 25.1502 46.6031C24.9233 46.7334 24.6918 46.8278 24.4627 46.8817C24.1976 46.9424 23.9347 47.012 23.6719 47.0817C23.3326 47.1738 22.9844 47.3221 22.6316 47.5243C21.3331 48.2747 20.1198 49.7013 19.3043 51.4447C18.2933 53.5858 18.3787 55.7539 19.0437 56.6144C19.8997 57.7197 21.3937 57.03 21.9981 56.684C22.2519 56.538 22.5081 56.3627 22.7664 56.1628L24.1526 55.0776C24.2874 54.9698 24.4222 54.8799 24.5548 54.8013C24.9367 54.5811 25.3232 54.471 25.6871 54.471H25.6826Z"
                    fill="black"
                  />
                  <path
                    d="M26.8576 32.876L22.8001 30.5125C22.5934 30.964 22.4698 31.4426 22.4698 31.8852L22.5035 40.6203L26.5543 42.9793L26.5319 34.2442C26.5319 33.8038 26.6532 33.3275 26.8576 32.876Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M26.5565 43.6577C26.4397 43.6577 26.3206 43.6263 26.215 43.5656L22.162 41.2066C21.9531 41.0852 21.825 40.8628 21.8228 40.6224L21.7891 31.8873C21.7891 31.3661 21.9261 30.7954 22.18 30.2315C22.2586 30.0563 22.4091 29.9237 22.5934 29.8653C22.7709 29.8091 22.9753 29.8271 23.1416 29.926L27.1991 32.2895C27.5001 32.4647 27.6192 32.8399 27.4754 33.1567C27.3047 33.5341 27.2126 33.9206 27.2126 34.2441L27.235 42.977C27.235 43.2196 27.1047 43.4443 26.8958 43.5678C26.7902 43.6285 26.6734 43.6577 26.5565 43.6577ZM23.182 40.2293L25.8735 41.7952L25.8511 34.2463C25.8511 33.9048 25.9095 33.5409 26.0196 33.1747L23.182 31.5234C23.1595 31.6492 23.1483 31.7705 23.1483 31.8851L23.1798 40.2293H23.182Z"
                    fill="black"
                  />
                  <path
                    d="M28.2931 31.1817L35.7971 26.8546L31.7463 24.4956L24.2311 28.834C23.6425 29.171 23.1213 29.809 22.8022 30.5122L26.8598 32.8757C27.1788 32.1703 27.6978 31.5255 28.2954 31.1817H28.2931Z"
                    fill="#E3FF53"
                  />
                  <path
                    d="M26.8576 33.5543C26.7385 33.5543 26.6194 33.5228 26.5161 33.4622L22.4586 31.0987C22.1575 30.9234 22.0384 30.5482 22.1822 30.2292C22.5776 29.362 23.2022 28.6385 23.8942 28.2431L31.4049 23.907C31.6161 23.7835 31.8744 23.7857 32.0856 23.907L36.1364 26.266C36.3453 26.3874 36.4756 26.612 36.4756 26.8547C36.4756 27.0973 36.3453 27.3197 36.1364 27.4411L28.6347 31.7682C28.1831 32.0265 27.7518 32.5455 27.4777 33.1521C27.399 33.3274 27.2485 33.4622 27.0665 33.5183C26.9991 33.5408 26.9295 33.5498 26.8598 33.5498L26.8576 33.5543ZM23.719 30.2606L26.597 31.9367C26.9677 31.3615 27.4417 30.8875 27.954 30.5909L34.4424 26.8502L31.7441 25.2775L24.5727 29.4181C24.2694 29.5911 23.9683 29.8922 23.7212 30.2562L23.719 30.2606Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3430_10608">
                    <rect
                      width="75.0326"
                      height="110"
                      fill="white"
                      transform="translate(0.483704)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h2 className="fw-semibold my-3 f-size-42 font-josefin letter-spacing-2">
                Domains by Category
              </h2>
            </div>

            <div className="col-12 col-md-8 mb-5">
              <Search
                svgRequired={false}
                bg="aqua"
                searchType="search-2"
              ></Search>
            </div>
          </div>

          <div className="row d-flex justify-content-center mb-5">
            <div className="col-md-12 tile-container">
              <DomainByCat Categories={categories}></DomainByCat>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-aqua mb-5">
        <div className="container-xl py-64">
          <div className="row d-flex justify-content-center ">
            <div className="col-xl-9 col-12">
              <h3 className="fw-semibold f-size-42 mb-4 text-center font-josefin letter-spacing-2">
                Domains by Alphapets
              </h3>
              <div className="row d-flex justify-content-center ">
                <div className="tile-container-style-2">
                  <AlphabetLinks></AlphabetLinks>
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

export default MakeOffer2;
