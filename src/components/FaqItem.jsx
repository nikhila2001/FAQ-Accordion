import { useState } from "react";
const FaqItem = ({ data, isActive, onAccordionClick }) => {
  return (
    <>
      <div className="accordio-item " key={data.id}>
        <div
          className="accordion-title d-flex justify-content-between"
          onClick={onAccordionClick}
          
        >
          <p className="question mt-4 flex-grow-1" style={{fontWeight:"600"}}>{data.title}</p>

          <div className="open-button align-self-center">
            {isActive ? (
              <img src="/assets/images/icon-minus.svg" alt="minus-icon" />
            ) : (
              <img src="/assets/images/icon-plus.svg" alt="plus-icon" />
            )}
          </div>
        </div>
        {isActive && <p className="accordion-content answer my-2" style={{fontWeight:"400"}}>{data.content}</p>}
      </div>
    </>
  );
};

export default FaqItem;
