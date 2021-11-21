import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// Store
import store from "./store/store";
// App
import App from "./app";
// Components
import Loading from "./components/Loading";
import Cursor from "./components/Cursor";
// Styles
import "animate.css";
import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import "./assets/css/output.css";
import "./assets/css/styles.css";

/**
 * Render
 */
ReactDOM.render(
  <React.StrictMode>
    <Cursor />
    <React.Suspense fallback={<Loading.Fallback />}>
      <Provider store={store}>
        <Router>
          <Switch>
            <App />
          </Switch>
        </Router>
      </Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
