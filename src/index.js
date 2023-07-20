import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider, createStore } from "jotai";
import { textAtom } from "./jotai/atoms";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore();

const unsub = store.sub(textAtom, () => {
  console.log("Text has changed to: ", store.get(textAtom));
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <button onClick={() => unsub()}>ubsub</button>
  </React.StrictMode>,
);
