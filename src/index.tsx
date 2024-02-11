import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "antd/dist/reset.css";
import "./global/styles/general.css";
import "./global/styles/global.css";
import "react-multi-carousel/lib/styles.css";
import "react-phone-input-2/lib/style.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  // </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Antd icons https://ant.design/components/icon
