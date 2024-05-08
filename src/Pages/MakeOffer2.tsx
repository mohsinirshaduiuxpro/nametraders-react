import FaqsAccordionItem from "../components/FaqsAccordionItem";
import OfferBanner from "../components/OfferBanner";

const MakeOffer1 = () => {
  const faqs = [
    {
      targetFaq: "faq-1",
      question: "What is NameTraders?",
      answer:
        "NameTraders is a reseller of after market internet domains. These are domains that are collected/owned by NameTraders because of their uniqueness and name value. NameTraders is similar to other after market domain name brokers such as buydomains.com and greatdomains.com.",
    },
    {
      targetFaq: "faq-2",
      question: "Why is a domain so important?",
      answer:
        "NameTraders is a reseller of after market internet domains. These are domains that are collected/owned by NameTraders because of their uniqueness and name value. NameTraders is similar to other after market domain name brokers such as buydomains.com and greatdomains.com.",
    },
    {
      targetFaq: "faq-3",
      question:
        "Who are the typical buyers at NameTraders and why do they buy?",
      answer:
        "NameTraders is a reseller of after market internet domains. These are domains that are collected/owned by NameTraders because of their uniqueness and name value. NameTraders is similar to other after market domain name brokers such as buydomains.com and greatdomains.com.",
    },
    {
      targetFaq: "faq-4",
      question: "What should I expect to pay for a domain at NameTraders?",
      answer:
        "NameTraders is a reseller of after market internet domains. These are domains that are collected/owned by NameTraders because of their uniqueness and name value. NameTraders is similar to other after market domain name brokers such as buydomains.com and greatdomains.com.",
    },
    {
      targetFaq: "faq-5",
      question:
        "Why should I pay NameTraders when I can register a domain for between $15 and $30 at a domain registrar?",
      answer:
        "NameTraders is a reseller of after market internet domains. These are domains that are collected/owned by NameTraders because of their uniqueness and name value. NameTraders is similar to other after market domain name brokers such as buydomains.com and greatdomains.com.",
    },
    {
      targetFaq: "faq-6",
      question: "Once I purchase a domain, do I own it?",
      answer:
        "NameTraders is a reseller of after market internet domains. These are domains that are collected/owned by NameTraders because of their uniqueness and name value. NameTraders is similar to other after market domain name brokers such as buydomains.com and greatdomains.com.",
    },
    {
      targetFaq: "faq-7",
      question: "What is the process once I decide on a name I want?",
      answer:
        "NameTraders is a reseller of after market internet domains. These are domains that are collected/owned by NameTraders because of their uniqueness and name value. NameTraders is similar to other after market domain name brokers such as buydomains.com and greatdomains.com.",
    },
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
              price="2000"
            />

            <div className="col-12 col-lg-5 d-flex justify-content-end ">
              <div className="card w-100 p-3 rounded rounded-4">
                <div className="card-body">
                  <h2 className="fw-semibold f-size-22 text-center text-black mb-3">
                    Request to purchase domain name
                  </h2>
                  <div className="row">
                    <div className="col-6 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="First Name"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-6 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Last Name"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-12 col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Company"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="col-12 col-md-12 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Address"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 col-xl-6 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="City"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-12 col-md-4 col-lg-8 col-xl-6 mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>State/Province</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 col-xl-6 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Zip/Postal Code"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-12 col-md-12 col-lg-8 col-xl-6 mb-3">
                      <input
                        type="text"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Telephone"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="col-12 col-md-12 mb-3">
                      <input
                        type="email"
                        className="form-control f-size-16 py-2 text-grey-500"
                        placeholder="Email Address"
                        name=""
                        id=""
                      />
                    </div>

                    <div>
                      <a
                        href="MakeOffer2"
                        className="btn btn-secondary py-2 w-100 rounded-3 rounded fw-semibold f-size-18"
                      >
                        Submit Purchase Request
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mb-5 position-relative">
        <div className="container-lg py-64">
          <div className="position-absolute topm-290 d-lg-block d-none ">
            <img src="images/img2.png" alt="" />
          </div>
          <div className="row d-flex justify-content-center ">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className="text-grey-m-800 text-center f-size-42 fw-semibold font-josefin letter-spacing-2">
                Frequently asked questions
              </h2>
              <span className="text-grey-600 f-size-18 text-center d-block mb-5">
                Everything you need to know about the nametraders
              </span>
              <div className="faq-card faq-card-accordion">
                <div className="accordion accordion-flush" id="faq1">
                  <FaqsAccordionItem faqs={faqs}></FaqsAccordionItem>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeOffer1;
