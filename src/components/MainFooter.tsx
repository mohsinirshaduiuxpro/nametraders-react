import { useState } from "react";
const MainFooter = () => {
  const [Footerlinks] = useState([
    { title: "Home", url: "index" },
    { title: "Domains For Sale", url: "DomainForSale" },
    { title: "FAQs", url: "Faqs" },
    { title: "Contact Us", url: "ContactUs" },
  ]);
  return (
    <>
      <footer className="side-wrapper-32 bg-footer pt-5  position-relative ">
        <img
          src="images/img3.png"
          className="position-absolute end-20 end-0 bottom-0 d-lg-block d-none "
          alt=""
        ></img>

        <div className="container pt-64  ">
          <div className="row">
            <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-md-start  align-items-center align-items-md-start  flex-column ">
              <img src="images/logo.svg" className="mb-40 w-50" alt=""></img>

              <div className="footer-nav d-flex gap-4 my-4 flex-wrap justify-content-lg-start justify-content-center f-size-16">
                {Footerlinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="nav-link text-white text-decoration-none"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-28 bg-footer position-relative ">
          <hr className="text-white mt-0"></hr>

          <div className="row d-flex flex-column-reverse flex-md-row  align-items-center pb-4">
            <div className="col-12 col-md-6">
              <div className="d-flex flex-howitworks align-items-center mb-md-3 mb-lg-0">
                <div>
                  <span className="text-white text-md-start text-center d-block ">
                    © Copyright NameTraders.  All Rights Reserved.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-lg-end gap-3 mb-3 mb-md-auto  nav-links ">
              <a href="" className="text-decoration-none text-white">
                Terms
              </a>
              <a href="" className="text-decoration-none text-white">
                Privacy
              </a>
              <a href="" className="text-decoration-none text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
