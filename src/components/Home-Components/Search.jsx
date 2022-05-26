import React from "react";
import {FaMapMarkerAlt} from "react-icons/fa";

const Search = () => {
  const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", () => {
      if (navigator.geolocation) {
        button.innerText = "Allow to detect location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        button.innerText = "Your browser not support";
      }
    });
  }

  const onSuccess = (position) => {
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=230ece0202bf41158a81a73a47ad42fe`
    )
      .then((response) => response.json())
      .then((response) => {
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        button.innerText = `${county} ${postcode}, ${country}`;
      })
      .catch(() => {
        button.innerText = "Something went wrong";
      });
  };
  const onError = (error) => {
    if (error.code == 1) {
      button.innerText = "You denied the request";
    } else if (error.code == 2) {
      button.innerText = "Location is unavailable";
    } else {
      button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
  };
  const searchEl = document.querySelector(".searchbox");
  const x = document.querySelectorAll(".card .boxx");

  // function search(e) {
  //   x.forEach((item, index) => {
  //     if (!item.innerHTML.toLowerCase().includes(e.target.value)) {
  //       item.parentElement.style.display = "none";
  //     } else {
  //       item.parentElement.style.display = "block";
  //     }
  //   });
  // }

  // searchEl.addEventListener("keyup", search);
  return (
    <div className="flex items-center p-3">
      <div className="searchbox flex flex-1 lg:w-full">
        <input
          className="flex border p-4 px-6 mt-2 text-sd rounded-3xl h-10 w-2/4"
          type="text"
          placeholder="Search here"
          name="search"
        />
      </div>
      <div className="flex ml-auto flex-col items-center mr-2">
        <div className="flex items-center font-bold">
          <FaMapMarkerAlt
            size="20"
            style={{color: "yellow", marginRight: "10px"}}
          />
          <button
            className="hover:border-b rounded-lg border-black"
            onClick={{}}>
            Click for Location
          </button>
        </div>
        <div className="flex opacity-40">INDIA</div>
      </div>
    </div>
  );
};

export default Search;
