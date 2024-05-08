import React from "react";

interface FaqsList {
  targetFaq: string;
  question: string;
  answer: string;
}

interface FaqsProps {
  faqs?: FaqsList[];
}

const FaqsAccordionItem: React.FC<FaqsProps> = ({ faqs = [] }) => {
  const faqsList = faqs.length ? faqs : [];

  return (
    <>
      {faqsList.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#faq-${index + 1}`}
              aria-expanded="false"
              aria-controls="faq-1"
            >
              <span className="fw-medium  f-size-16 text-grey-900 me-3">
                {faq.question}
              </span>
              <span className="accordion-icon"></span>
            </button>
          </h2>
          <div
            id={`faq-${index + 1}`}
            className="accordion-collapse collapse"
            data-bs-parent="#faq1"
          >
            <div className="accordion-body px-0 text-grey-600 f-size-16">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqsAccordionItem;
