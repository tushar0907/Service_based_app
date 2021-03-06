import React from "react";
import "../../App.css";

const Support = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex justify-center lg:h-3/5 flex-col lg:flex-row mb-20 w-[90%]">
        <div className="flex flex-1 ml-15 rounded-md flex-col justify-center items-center">
          <div className="flex w-full justify-start">
            <div className="flex font-bold pb-6 text-6xl">
              <p>Dedicated Support</p>
            </div>
          </div>
          <div className="flex w-full justify-start">
            <div className="flex pb-6 text-left w-full mr-5 pt-6">
              <p>
                Your servers and customer inquiries will be managed by a
                dedicated support team around the clock.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-around items-center">
          <div className="flex">
            <div className="flex box1 flex-col w-80 h-80 mr-8 rounded-lg bg-purple-100">
              <div className="flex w-20 h-20 mt-5 ml-auto mr-auto justify-center">
                <img
                  className="flex rounded-full"
                  src="https://www.kindpng.com/picc/m/316-3165356_plumber-plumbing-tools-pipefitter-steamfitters-hd-png-download.png"
                  alt="hello"
                />
              </div>
              <div className="flex font-bold pt-7 items-center justify-center text-xl">
                Commitment to service
              </div>
              <div className="flex text-center pt-1 p-3 items-center justify-center">
                We are committed to provide you best service in shortest
                possible time.
              </div>
            </div>
            <div className="flex box1 flex-col w-80 h-80 rounded-lg bg-blue-100">
              <div className="flex w-20 h-20 mt-5 ml-auto mr-auto justify-center">
                <img
                  className="flex rounded-full"
                  src="https://cdn3.vectorstock.com/i/1000x1000/42/77/hand-holding-credit-card-in-flat-design-style-vector-18944277.jpg"
                  alt="hello"
                />
              </div>
              <div className="flex font-bold pt-7 items-center justify-center text-xl">
                Exceptional Experience
              </div>
              <div className="flex text-center pt-1 p-4 items-center justify-center">
                With a team of experienced people, we look to provide you with
                the best service.
              </div>
            </div>
          </div>
          <div className="flex mt-6">
            <div className="flex flex-col text-center box1 mr-8 w-80 h-80 rounded-lg mt-2 bg-blue-100">
              <div className="flex w-20 h-20 mt-5 ml-auto mr-auto justify-center">
                <img
                  className="flex rounded-full"
                  src="https://cdn3.vectorstock.com/i/1000x1000/42/77/hand-holding-credit-card-in-flat-design-style-vector-18944277.jpg"
                  alt="hello"
                />
              </div>
              <div className="flex font-bold pt-7 items-center justify-center text-xl">
                Data and Payment Security
              </div>
              <div className="flex text-center pt-1 p-4 items-center justify-center">
                We use protected payment gateways so that your payment and data
                is safe and secured
              </div>
            </div>
            <div className="flex flex-col box1 w-80 h-80 rounded-lg mt-2 bg-purple-100">
              <div className="flex w-20 h-20 mt-5 ml-auto mr-auto justify-center">
                <img
                  className="flex rounded-full"
                  src="https://www.kindpng.com/picc/m/316-3165356_plumber-plumbing-tools-pipefitter-steamfitters-hd-png-download.png"
                  alt="hello"
                />
              </div>
              <div className="flex font-bold pt-7 items-center justify-center text-xl">
                Help and Support
              </div>
              <div className="flex pt-1  text-center p-4 items-center justify-center">
                24*7 Available for help and support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
