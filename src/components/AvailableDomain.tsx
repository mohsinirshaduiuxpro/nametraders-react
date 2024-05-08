import React from "react";

interface availableDomains {
  name: string;
  buttonAction: string;
  seller: string;
  askingPrice: string;
}

interface Props {
  availableDomains?: availableDomains[]; // Make domains prop optional to allow passing a dummy list
}

const AvailableDomain: React.FC<Props> = ({ availableDomains = [] }) => {
  console.log(availableDomains + "hamid");
  return (
    <>
      {availableDomains.slice(0, 40).map((item, index) => (
        <tr>
          <td>
            <a href="" className="text-decoration-none text-grey-900">
              {item.name}
            </a>
          </td>
          <td>{item.seller}</td>
          <td>{item.askingPrice}</td>
          <td>
            <a
              href={item.buttonAction}
              className={`btn text-primary fw-medium  ${
                item.buttonAction === "MakeOffer"
                  ? "btn-secondary"
                  : "btn-outline-secondary"
              }`}
            >
              {item.buttonAction === "MakeOffer" ? "Get Price" : "Buy Now"}
            </a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default AvailableDomain;
