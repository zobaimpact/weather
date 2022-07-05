/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainWrapper } from "app/layouts/MainWrapper";
import { MainRoutes } from "app/routes/MainRoutes";

export function App() {

  return (
    <BrowserRouter>
      <MainWrapper>
        <MainRoutes />
      </MainWrapper>
    </BrowserRouter>
  );
}
