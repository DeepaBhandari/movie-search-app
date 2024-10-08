import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

test("renders the app component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
