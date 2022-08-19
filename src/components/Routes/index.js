import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Test from "../../pages/Test";
import Test2 from "../../pages/Test2";
import Test3 from "../../pages/Test3";
import Test4 from "../../pages/Test4";
import Connect from "../../pages/Connect";

const index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/test4" element={<Test4 />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default index;
