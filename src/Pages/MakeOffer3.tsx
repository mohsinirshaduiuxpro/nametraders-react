import FaqsAccordionItem from "../components/FaqsAccordionItem";
import OfferBanner from "../components/OfferBanner";

const MakeOffer3 = () => {
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
              <div
                className="card w-100 p-3 rounded rounded-4"
                style={{ marginBottom: "46.5px" }}
              >
                <div className="card-body d-flex justify-content-center flex-column align-items-center  ">
                  <div>
                    <img
                      src="images/congs-arrow.png"
                      className="img-fluid "
                      alt=""
                    />
                  </div>
                  <h3 className="f-size-34 my-3 fw-semibold text-grey-m-800">
                    Congratulations!
                  </h3>

                  <span className="d-block f-size-18 fw-medium text-center text-grey-m-800 mb-4">
                    Request submitted successfully for <br /> HarvestNow.com
                  </span>

                  <span className="d-block f-size-18 fw-medium text-center text-grey-m-800 px-3 mb-4">
                    An agent will be in contact with you shortly to complete
                    your purchase and payment.
                  </span>

                  <div>
                    <a
                      href="/"
                      className="btn btn-secondary py-2 w-100 rounded-3 rounded fw-semibold f-size-18 exp-more px-4 arrow"
                    >
                      Go to home page
                    </a>
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

export default MakeOffer3;
