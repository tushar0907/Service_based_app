import "./App.css";
import Navigation from "./components/common/Navigation";
import MenuPanel from "./components/Home-Components/MenuPanel";
import Router from "./routes";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {SnackbarProvider} from "notistack";

function App() {
  const [currentHeight, setCurrentHeight] = React.useState(0);

  React.useEffect(() => {
    setCurrentHeight(window.innerHeight);
    window.addEventListener("resize", () => {
      setCurrentHeight(window.innerHeight);
    });
  }, []);
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <div
          className="flex flex-col bg-[#ffffff]"
          style={{height: currentHeight}}>
          <div className="flex overflow-y-scroll justify-center w-full">
            <Router />
          </div>
        </div>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
