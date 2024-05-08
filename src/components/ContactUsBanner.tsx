import React from "react";

const ContactUsBanner = () => {
  return (
    <>
      <div className="container-lg" style={{ paddingBottom: "180px" }}>
        <div className="bg-green-light rounded rounded-3">
          <div className="row ">
            <div className="col-12 col-lg-6 d-lg-block d-none ">
              <img
                src="images/laptop-boy.png"
                className="img-fluid "
                alt=""
              ></img>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="p-4 d-flex flex-column   align-items-center    justify-content-start ">
                <div className="mb-3">
                  <img
                    src="images/Avatar-group.png"
                    className="img-fluid "
                    alt=""
                  ></img>
                </div>
                <h2 className="fw-semibold f-size-42 text-grey-m-800 font-josefin letter-spacing-2">
                  {" "}
                  Have Questions?
                </h2>
                <h3 className="text-grey-600 mb-4 f-size-18 fw-normal text-center">
                  Can't find the answer you're looking for?
                </h3>
                <a
                  href="ContactUs"
                  className="btn rounded con-us-btn rounded-3 px-3 f-size-18 f-m-size-16 py-2 btn-secondary  d-flex align-items-center gap-2"
                >
                  <i className="fa-solid fa-envelope"></i> Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsBanner;
