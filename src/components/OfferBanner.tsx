import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faSackDollar,
  faUser,
  faUserShield,
} from "@fortawesome/pro-regular-svg-icons";

interface OfferBannerProps {
  domainName?: string;
  note?: string;
  domain?: string;
  owner?: string;
  price?: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({
  domainName,
  note,
  domain,
  owner,
  price,
}) => {
  return (
    <div className="col-12 col-lg-6 mb-4">
      <h3 className="text-white f-size-42 fw-semibold mb-3 font-josefin letter-spacing-2">
        <span className="text-secondary">{domainName}</span>.com
      </h3>
      <h4 className="f-size-18 text-white fw-regular mb-4">
        <span className="text-secondary">Note:</span> {note}
      </h4>

      <div className="mb-3 d-flex flex-column gap-125 card alert-cards bg-transparent border-0 w-fitcontent">
        {domain && (
          <div
            className="alert bg-burnham text-white py-2 f-size-16 d-flex align-items-center gap-1  mb-0 "
            role="alert"
          >
            <div className="d-flex gap-1 mb-1 mb-md-0 align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faGlobe}
                className=" f-size-16 icon pe-1  "
              />
              <span className="d-block w-100">Domain Information:</span>
            </div>
            <span className="text-secondary d-block ps-1 f-size-22 font-josefin">
              {domain}
            </span>
          </div>
        )}

        {owner && (
          <div
            className="alert bg-burnham text-white py-2 f-size-16 d-flex align-items-center gap-1  mb-0"
            role="alert"
          >
            <FontAwesomeIcon
              icon={faUserShield}
              className=" f-size-16 icon pe-1  "
            />
            Owner:{" "}
            <span className="text-secondary ps-1 f-size-22 font-josefin">
              {owner}
            </span>
          </div>
        )}
        {price && (
          <div
            className="alert bg-burnham text-white py-2 f-size-16 d-flex align-items-center gap-1  mb-0"
            role="alert"
          >
            <FontAwesomeIcon
              icon={faSackDollar}
              className=" f-size-16 icon pe-1  "
            />
            Price:{" "}
            <span className="text-secondary ps-1 f-size-22 font-josefin">
              ${price} USD
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferBanner;
