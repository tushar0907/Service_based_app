import React from "react";

const schedule = () => {
  return (
    <div className="flex font-worksans w-full h-2/4 flex-col my-12">
      <div className="flex w-full flex-col h-32">
        <div className="flex font-semibold pl-1 text-lg">
          <h1>Select your preferred Date & Time</h1>
        </div>
        <div className="flex pt-3 overflow-x-scroll">
          <div className="flex p-2 font-bold flex-1">
            <div className="flex items-center flex-col border-2 border-[#FCB512] hover:bg-[#FCB512] rounded-xl h-20 w-20">
              <div className="flex items-end flex-1">
                <p>12</p>
              </div>
              <div className="flex flex-1">
                <p>Wed</p>
              </div>
            </div>
          </div>
          <div className="flex p-2 font-bold flex-1">
            <div className="flex items-center flex-col border-2 border-[#FCB512] hover:bg-[#FCB512] rounded-xl h-20 w-20">
              <div className="flex items-end flex-1">
                <p>13</p>
              </div>
              <div className="flex flex-1">
                <p>Thur</p>
              </div>
            </div>
          </div>
          <div className="flex p-2 font-bold flex-1">
            <div className="flex items-center flex-col border-2 border-[#FCB512] hover:bg-[#FCB512] rounded-xl h-20 w-20">
              <div className="flex items-end flex-1">
                <p>14</p>
              </div>
              <div className="flex flex-1">
                <p>Fri</p>
              </div>
            </div>
          </div>
          <div className="flex p-2 font-bold flex-1">
            <div className="flex items-center flex-col border-2 border-[#FCB512] hover:bg-[#FCB512] rounded-xl h-20 w-20">
              <div className="flex items-end flex-1">
                <p>15</p>
              </div>
              <div className="flex flex-1">
                <p>Sat</p>
              </div>
            </div>
          </div>
          <div className="flex p-2 font-bold flex-1">
            <div className="flex items-center flex-col border-2 border-[#FCB512] hover:bg-[#FCB512] rounded-xl h-20 w-20">
              <div className="flex items-end flex-1">
                <p>16</p>
              </div>
              <div className="flex flex-1">
                <p>Sun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col my-16 w-3/5">
        <div className="flex font-bold pl-3 text-sd">Pick Time Slot</div>
        <div className="flex my-5 flex-1">
          <div className="flex flex-col flex-1">
            <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
              <p>10 AM - 11 AM</p>
            </div>
            <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
              <p>12 AM - 1 PM</p>
            </div>
            <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
              <p>3 PM - 4 PM</p>
            </div>
            <div className="flex w-56 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
              <p>5 PM - 6 PM</p>
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex justify-around flex-col flex-1">
              <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                <p>10 AM - 11 AM</p>
              </div>
              <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                <p>12 AM - 1 PM</p>
              </div>
              <div className="flex w-56 mb-2 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                <p>3 PM - 4 PM</p>
              </div>
              <div className="flex w-56 items-center justify-center h-12 border-2 font-medium text-[#FCB512] border-[#FCB512] rounded-xl mx-2 cursor-pointer hover:bg-[#FCB512] hover:text-black">
                <p>5 PM - 6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default schedule;
