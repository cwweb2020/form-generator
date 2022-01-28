import React, { useEffect } from "react";
import "./style.scss";
import Routes from "./routes";
import FormProvider from "./context";

function App() {
  return (
    <>
      <FormProvider>
        <Routes />
      </FormProvider>
    </>
  );
}

export default App;
