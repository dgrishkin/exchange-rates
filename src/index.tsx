import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import RootPage from "./pages/root-page";
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <RootPage/>
    </Provider>,
    document.getElementById("root")
)