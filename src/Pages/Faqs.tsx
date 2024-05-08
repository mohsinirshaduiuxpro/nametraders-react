import TopBanner from "../components/TopBanner";
import ContactUsBanner from "../components/ContactUsBanner";
import FaqsAccordionItem from "../components/FaqsAccordionItem";

const Faqs = () => {
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
      <TopBanner
        mainTitle="Frequently Asked Questions"
        subTitle="Got Questions?"
        smallSubTitle="Have questions? We’re here to help."
        imgSRC="images/girl-thinking.png"
        btnText="Contact Us"
      ></TopBanner>
      <section>
        <div className="container-lg py-64">
          <div className="row d-flex justify-content-center ">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="faq-card faq-card-accordion">
                <div className="accordion accordion-flush" id="faq1">
                  <FaqsAccordionItem faqs={faqs}></FaqsAccordionItem>
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

export default Faqs;
