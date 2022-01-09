import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./routers/AppRouter";
import { store } from "./store/configureStore";
import "./firebase/firebase";
import { startSetCocktails } from "./firebase/firebaseFunctions";
import "./styles/styles.scss";

const jsx = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetCocktails()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
