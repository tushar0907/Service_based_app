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

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="flex flex-1 font-worksans flex-col mt-20 p-10 w-full">
      <div className="flex justify-center items-center font-medium pb-4">
        <p>Frequently Asked Questions</p>
      </div>
      <div className="flex ml-auto mr-auto pl-20 flex-1">
        <div className="accordion">
          {data.map((item, i) => (
            <div className="w-full mx-5 border rounded-xl p-5 mb-3">
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
    </div>
  );
};

export default FAQ;
