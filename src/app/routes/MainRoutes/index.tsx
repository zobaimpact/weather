import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "app/pages/HomePage/Loadable";

interface Props {}

export const MainRoutes = memo((props: Props) => {
  return (
    <Routes>
      {/* Other module routes should come before the landing pages */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
});
