import React, {useState} from "react";
import {MdOutlineArrowForwardIos} from "react-icons/md";
const data = [
  {
    question:
      "Velit venenatis pretium mattis consectetur massa pretium mattis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question:
      "Velit venenatis pretium mattis consectetur massa pretium mattis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question:
      "Velit venenatis pretium mattis consectetur massa pretium mattis?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const FAQs = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="flex flex-1 font-worksans flex-col mt-8 w-3/4">
      <div className="flex font-medium pb-4">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="flex flex-1">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="w-2/3 mx-5 border rounded-xl p-5 mb-3">
              <div
                className=" flex justify-between items-center"
                onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span className=" cursor-pointer">
                  {selected === i ? "-" : <MdOutlineArrowForwardIos />}
                </span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex font-medium flex-1 mx-16 w-1/2 p-4 rounded-xl mb-3 bg-gradient-to-r from-[#FFD36F] to-[#F1AD10]">
        <div className="flex justify-center items-end flex-1">
          <p>10,000</p>
        </div>
        <button className="flex w-full font-bold flex-1">
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default FAQs;
