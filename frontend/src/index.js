/*import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.min.css";
import App from "./App";

import { UserProvider } from "./context/UserContext";

//const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
    <UserProvider>
      <App />
    </UserProvider>,
    document.getElementById("root")
  );
  */



  import React from "react";
import ReactDOM from "react-dom/client";
import "bulma/css/bulma.min.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root")); // <-- Esto es importante

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);