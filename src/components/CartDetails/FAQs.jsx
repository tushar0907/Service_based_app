import React from "react";

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

      <div className="flex font-medium flex-1 mx-16 w-1/2 p-4 rounded-xl mb-3 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
        <div className="flex justify-center items-end flex-1">
          <p> ₹ {price}</p>
        </div>
        <button className="flex w-full font-bold flex-1">
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default FAQs;
