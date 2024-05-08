interface BannerProps {
  mainTitle: string;
  subTitle: string;
  smallSubTitle: string;
  imgSRC: string;
  btnText: string;
}

const TopBanner: React.FC<BannerProps> = ({
  mainTitle,
  subTitle,
  smallSubTitle,
  imgSRC,
  btnText,
}) => {
  return (
    <div className="dotted-img bg-primary position-relative justify-content-center align-items-center overflow-hidden">
      <img
        src="images/Lightaccent.png"
        className="img-fluid position-absolute w-100 top-0 "
        alt=""
      ></img>

      <img
        src="images/binary-atom.svg"
        className="position-absolute end-0 rotate d-md-block d-none "
        alt=""
      ></img>

      <div className="container pt-250 z-4 position-relative ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-lg-8 mb-md-4">
            <h3 className="text-secondary f-size-16 fw-semibold mb-0 ">
              {mainTitle}
            </h3>
            <h4 className="f-size-64 text-white fw-semibold mb-md-0 my-3 font-josefin letter-spacing-2">
              {subTitle}
            </h4>
            <h5 className="f-size-20 text-white-50 fw-normal mb-md-5 mb-3">
              {smallSubTitle}
            </h5>
            <a
              href={btnText == "Contact Us" ? "Contactus" : "DomainForSale"}
              className="rounded rounded-3 btn btn-primary text-primary fw-semibold py-md-2 px-md-4 font-josefin"
            >
              {btnText}
            </a>
          </div>

          <div className="col-12 col-lg-4 d-lg-flex d-md-none d-flex justify-content-end ">
            <img
              src={imgSRC}
              className="img-fluid wm-40 shadowfilter"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
