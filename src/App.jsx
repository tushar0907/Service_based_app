import "./App.css";
import Navigation from "./components/common/Navigation";
import Home from "./pages/home";
import React from "react";

function App() {
  const [currentHeight, setCurrentHeight] = React.useState(0);

  React.useEffect(() => {
    setCurrentHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setCurrentHeight(window.innerHeight);
    });
  }, []);
  return (
    <div className="flex" style={{height: currentHeight}}>
      <div className="w-20 h-full">
        <Navigation />
      </div>
      <div className="flex overflow-y-auto justify-center w-full">
        <Home />
      </div>
    </div>
  );
}

export default App;
