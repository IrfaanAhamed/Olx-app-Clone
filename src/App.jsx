import React from "react";
import MainRoutes from "./Routes/MainRoutes";
import ContextAuth from "./store/ContextAuth";

function App() {
  return (
    <>
      <ContextAuth>
        <MainRoutes />
      </ContextAuth>
    </>
  );
}

export default App;
