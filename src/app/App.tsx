/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "app/styles/global-styles";
import { MainWrapper } from "app/layouts/MainWrapper";
import { MainRoutes } from "app/routes/MainRoutes";

// import 'react-toastify/dist/ReactToastify.css';

export function App() {
  // const { actions } = useAuthSlice();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actions.getAuthState());
  // }, []);
  return (
    <BrowserRouter>
      <MainWrapper>
          <MainRoutes />
      </MainWrapper>
      {/* <GlobalStyle /> */}
    </BrowserRouter>
  );
}
