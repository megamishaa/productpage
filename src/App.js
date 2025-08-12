import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Home />
        <ComingSoon />
      </div>
    </>
  );
}

export default App;
