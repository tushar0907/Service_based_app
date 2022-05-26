import React from "react";
import {Link} from "react-router-dom";

const FAQs = ({faqs, price}) => {
  const [faq] = React.useState([]);
  return (
    <div className="flex flex-1 font-worksans flex-col mt-8 w-3/4">
      <div className="flex flex-col font-medium pb-4">
        <p>Frequently Asked Questions</p>
        <p className="items-center flex my-8 justify-start">No FAQs yet</p>
      </div>
      {faq.map(() => (
        <div className="flex flex-1">
          <div className="accordion">
            <div className="w-2/3 mx-5 border rounded-xl p-5 mb-3">
              <div className=" flex justify-between items-center">
                <h2>{faqs}</h2>
                <span className=" cursor-pointer"></span>
              </div>
              <div className="flex">{faqs}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
