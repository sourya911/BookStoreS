import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewFooter from "./components/NewFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <NewFooter />
    </>
  );
}

export default App;
