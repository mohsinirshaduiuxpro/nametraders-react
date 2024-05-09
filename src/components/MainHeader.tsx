import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const [activeLink, setActiveLink] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "domains", label: "Domains For Sale", href: "DomainForSale" },
    { id: "faqs", label: "FAQs", href: "Faqs" },
    { id: "contact", label: "Contact Us", href: "ContactUs" },
  ];

  const handleNavLinkClick = (linkId: string) => {
    setActiveLink(linkId);
  };
  return (
    <>
      <section className="fixed-top" id="home">
        <header className=" sticky container py-2 position-relative">
          <div className="header-wrapper py-lg-2 py-2 z-1">
            <div className="container z-1">
              <div className="header-navbar">
                <nav className="navbar navbar-expand-lg m-0 p-0">
                  <div className="container-fluid p-0">
                    <div className="d-flex justify-content-between align-items-center flex-grow-1">
                      {/* <a className="navbar-brand" href="index">
                        <img
                          src="images/logo.svg"
                          className="img-fluid w-100"
                          alt="logo"
                        />
                      </a> */}
                      <NavLink className="navbar-brand" to="index">
                        <img
                          src="images/logo.svg"
                          className="img-fluid w-100"
                          alt="logo"
                        />
                      </NavLink>
                      <div>
                        <button
                          className="navbar-toggler border border-0"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasNavbar"
                          aria-controls="offcanvasNavbar"
                          aria-label="Toggle navigation"
                        >
                          <svg
                            width="21"
                            height="18"
                            viewBox="0 0 21 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0.666656 1.36694C0.666656 0.814659 1.11437 0.366943 1.66666 0.366943H19.6667C20.2189 0.366943 20.6667 0.814659 20.6667 1.36694C20.6667 1.91923 20.2189 2.36694 19.6667 2.36694H1.66666C1.11437 2.36694 0.666656 1.91923 0.666656 1.36694ZM0.666656 7.36694C0.666656 6.81466 1.11437 6.36694 1.66666 6.36694H19.6667C20.2189 6.36694 20.6667 6.81466 20.6667 7.36694C20.6667 7.91923 20.2189 8.36694 19.6667 8.36694H1.66666C1.11437 8.36694 0.666656 7.91923 0.666656 7.36694ZM0.666656 13.3669C0.666656 12.8147 1.11437 12.3669 1.66666 12.3669H19.6667C20.2189 12.3669 20.6667 12.8147 20.6667 13.3669C20.6667 13.9192 20.2189 14.3669 19.6667 14.3669H1.66666C1.11437 14.3669 0.666656 13.9192 0.666656 13.3669Z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div
                      className="offcanvas offcanvas-end"
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                    >
                      <div className="offcanvas-header">
                        <a className="navbar-brand" href="index">
                          <img
                            src="images/logo.svg"
                            className="img-fluid w-100"
                            alt="logo"
                          />
                        </a>

                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="d-flex justify-content-between flex-column gap-3">
                        <div className="offcanvas-body f-size-18 text-white">
                          <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 font-josefin">
                            {navItems.map((item) => (
                              <li key={item.id} className={`nav-item`}>
                                <NavLink
                                  className={`nav-link ${
                                    activeLink === item.id ? "active" : ""
                                  }`}
                                  to={item.href}
                                  onClick={() => handleNavLinkClick(item.id)}
                                >
                                  {item.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default MainHeader;
