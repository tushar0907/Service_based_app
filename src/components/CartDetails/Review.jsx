import React from "react";

const Review = () => {
  return (
    <div className="flex flex-1 w-3/4 pt-10 items-start flex-col">
      <div className="flex pb-6 w-2/3 font-medium">
        <p>Customer Reviews Near You</p>
      </div>
      <div className="flex w-3/4 p-3 flex-1 overflow-scroll border rounded-xl flex-col">
        <div className="flex items-center flex-1 pb-8">
          <p className="flex w-11 mr-6 h-11 font-medium rounded-full items-center pl-4 bg-yellow-300">
            H
          </p>{" "}
          <h1 className="flex flex-1">Harshit Dubey</h1>
        </div>
        <div className="flex flex-1 pb-5">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
