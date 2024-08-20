import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pricing } from "./components/Pricing";
import { Landing } from "./components/Landing";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
