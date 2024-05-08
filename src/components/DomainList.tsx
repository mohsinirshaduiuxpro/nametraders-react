import React from "react";

interface Domain {
  name: string;
  buttonAction: string;
  category: string;
}

interface Props {
  domains?: Domain[]; // Make domains prop optional to allow passing a dummy list
  filterCategory?: string;
}

const DomainList: React.FC<Props> = ({ domains = [], filterCategory }) => {
  const domainList = domains.length ? domains : [];

  const filteredDomains = filterCategory
    ? domainList.filter((domain) => domain.category === filterCategory)
    : domainList;

  return (
    <>
      {filteredDomains.map((domain, index) => (
        <a
          href={domain.buttonAction}
          className="text-decoration-none buy-domain py-2 rounded rounded-3 mt-3 border px-3 w-100"
          key={index}
        >
          <div className="d-flex align-items-center justify-content-between">
            <div className="f-size-16 text-gravel domain-name">
              {domain.name}
            </div>
            <div>
              <button
                className={`btn  rounded rounded-3  f-size-14 text-primary ${
                  domain.buttonAction === "MakeOffer1" ? "buy-now" : ""
                }`}
              >
                {domain.buttonAction === "MakeOffer1" ? "Buy Now" : "Get Price"}
              </button>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default DomainList;
