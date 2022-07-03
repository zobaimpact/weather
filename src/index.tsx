import * as React from "react";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';


// Import root app
import { App } from "app/App";

import { configureAppStore } from "store/configureStore";

import reportWebVitals from "reportWebVitals";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
const store = configureAppStore();
// const MOUNT_NODE = document.getElementById("root") as HTMLElement;

root.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
