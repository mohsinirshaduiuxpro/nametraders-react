import { IconProp, icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Categories {
  icontype: IconProp;
  categoryName: string;
}

interface Props {
  Categories?: Categories[]; // Make domains prop optional to allow passing a dummy list
}

const CategoryBtn: React.FC<Props> = ({ Categories = [] }) => {
  console.log(Categories + "hamid");
  return (
    <>
      {Categories.map((category, index) => (
        <button
          key={index}
          className={`nav-link f-size-14  mb-1 d-flex justify-content-start align-items-center  gap-2 ${
            index == 0 ? "active" : ""
          }`}
          id="v-pills-AllDomain-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-AllDomain"
          type="button"
          role="tab"
          aria-controls="v-pills-AllDomain"
          aria-selected="false"
        >
          <FontAwesomeIcon
            icon={category.icontype}
            className=" f-size-16 icon"
          />
          {category.categoryName}
        </button>
      ))}
    </>
  );
};

export default CategoryBtn;
