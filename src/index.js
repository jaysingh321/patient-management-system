import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import store from "./view/store/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-zupjw54lu4ni5t2t.us.auth0.com"
    clientId="AtQhsKDmxyzwhuejzatdfhK8EHWbknK1"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>
);
