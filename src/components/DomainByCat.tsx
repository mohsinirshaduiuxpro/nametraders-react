import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Categories {
  icontype: IconProp;
  categoryName: string;
}

interface Props {
  Categories?: Categories[]; // Make domains prop optional to allow passing a dummy list
}
const DomainByCat: React.FC<Props> = ({ Categories = [] }) => {
  console.log(Categories + "hamid");
  return (
    <>
      {Categories.map((category, index) => (
        <a
          href={`${category.categoryName}`}
          key={index}
          className="cat-tile   border rounded rounded-3 py-4 px-3"
        >
          <div className="d-flex justify-content-center align-items-center flex-column gap-2">
            <FontAwesomeIcon
              icon={category.icontype}
              className=" f-size-28 text-primary"
            />

            <span className="f-size-16 regular d-block text-gravel">
              {category.categoryName}
            </span>
          </div>
        </a>
      ))}
    </>
  );
};

export default DomainByCat;
