import "./App.css";
import Navigation from "./components/common/Navigation";
import Router from "./routes";
import React from "react";
import {BrowserRouter} from "react-router-dom";

function App() {
  const [currentHeight, setCurrentHeight] = React.useState(0);

  React.useEffect(() => {
    setCurrentHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setCurrentHeight(window.innerHeight);
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="flex" style={{height: currentHeight}}>
        <div className="w-20 h-full">
          <Navigation />
        </div>
        <div className="flex overflow-y-auto justify-center w-full">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
