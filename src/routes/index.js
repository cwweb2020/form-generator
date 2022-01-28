import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAccord from "../components/FormAccord";
import Layout from "./Layout";
import FormCreate from "../components/FormCreate";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FormCreate />} />
            <Route path="/formularios" element={<FormAccord />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default index;
