import TopBanner from "../components/TopBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/pro-regular-svg-icons";
const ContactUs = () => {
  return (
    <>
      <TopBanner
        mainTitle="Contact Us"
        subTitle="We’d love to hear from you"
        smallSubTitle="Our friendly team is always here to chat."
        imgSRC="images/contactus.png"
        btnText="Explore now"
      ></TopBanner>

      <section className="bg-white py-5 ">
        <div className="container">
          <div className="row d-flex align-items-start justify-content-center ">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center flex-column align-items-center mb-4 mb-lg-auto ">
              <span
                className="bg-secondary  d-flex justify-content-center align-items-center mb-3"
                style={{ width: "48px", height: "49px", borderRadius: "100%" }}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary f-size-24"
                />
              </span>

              <h2 className="text-grey-900 fw-semibold f-size-20">Emails</h2>

              <h2 className="f-size-16 text-grey-600 fw-normal ">
                <span className="fw-semibold  ">Sales: </span>
                sales@nametraders.com
              </h2>
              <h3 className="f-size-16 text-grey-600 fw-normal">
                <span className="fw-semibold  ">Support: </span>
                suppport@nametraders.com
              </h3>
              <h4 className="f-size-16 text-grey-600 fw-normal ">
                <span className="fw-semibold ">General Inquiries: </span>
                info@nametraders.com
              </h4>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center flex-column align-items-center mb-4 mb-lg-auto ">
              <span
                className="bg-secondary  d-flex justify-content-center align-items-center mb-3"
                style={{ width: "48px", height: "49px", borderRadius: "100%" }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-primary f-size-24"
                />
              </span>

              <h2 className="text-grey-900 fw-semibold f-size-20">
                NameTraders
              </h2>
              <h2 className="f-size-16 text-grey-600 fw-normal ">
                5114 Balcones Woods Dr.
              </h2>
              <h3 className="f-size-16 text-grey-600 fw-normal ">
                Suite 307, #331
              </h3>
              <h4 className="f-size-16 text-grey-600 fw-normal  text-center ">
                Austin, Texas 78759 <br /> USA
              </h4>
            </div>

            <div className="col-12  col-md-6 col-lg-4 d-flex justify-content-center flex-column align-items-center mb-4 mb-md-auto ">
              <span
                className="bg-secondary  d-flex justify-content-center align-items-center mb-3"
                style={{ width: "48px", height: "49px", borderRadius: "100%" }}
              >
                <i className="fa-regular fa-phone f-size-24 text-primary"></i>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary f-size-24"
                />
              </span>

              <h2 className="text-grey-900 fw-semibold f-size-20">Phone</h2>
              <h2 className="f-size-16 text-grey-600 fw-normal mb-3">
                Mon-Fri from 8am to 5pm.
              </h2>

              <h4 className="f-size-16  fw-semibold   text-center text-primary ">
                +1 (512)-222-5361
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="py-64 bg-aqua contactus">
        <div className="container ">
          <div className="row d-flex justify-content-center ">
            <div className="col-12 col-lg-10 col-xl-8 ">
              <h2 className="text-primary fw-semibold f-size-16 text-center">
                Contact us
              </h2>
              <h3 className="text-grey-900 f-size-42 fw-semibold text-center mb-4 font-josefin letter-spacing-2">
                Get in touch
              </h3>

              <h4 className="text-grey-600 f-size-18 fw-normal text-center">
                We’d love to hear from you. Please fill out this form.
              </h4>

              <form action="">
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label mb-1 text-grey-700 f-size-14 fw-medium"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id=""
                    placeholder="Your Full Name"
                    aria-describedby=""
                  ></input>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label mb-1 text-grey-700 f-size-14 fw-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control py-2"
                    id=""
                    placeholder="you@company.com"
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label mb-1 text-grey-700 f-size-14 fw-medium"
                  >
                    Telephone
                  </label>
                  <div className="input-group mb-3">
                    <select
                      className="form-select flex-001"
                      aria-label="Default select example"
                    >
                      <option selected>US</option>
                      <option value="1">PK</option>
                      <option value="2">IR</option>
                      <option value="3">DN</option>
                    </select>
                    <input
                      type="text"
                      className="form-control py-2"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label mb-1 text-grey-700 f-size-14 fw-medium"
                  >
                    Subject
                  </label>
                  <input type="text" className="form-control py-2" id="" />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label mb-1 text-grey-700 f-size-14 fw-medium"
                  >
                    Your Question
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    className="d-block form-control "
                    rows={5}
                    placeholder="Leave us a message..."
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    You agree to our friendly{" "}
                    <a
                      href=""
                      className="text-grey-600 text-decoration-underline "
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <div className="d-flex justify-content-end ">
                  <button className="btn btn-secondary py-25 px-md-4 fw-semibold f-size-16 ">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
