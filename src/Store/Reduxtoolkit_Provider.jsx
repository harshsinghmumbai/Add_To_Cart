"use client";
import { Provider } from "react-redux";
import store from "./store";

const Reduxtoolkit_Provider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Reduxtoolkit_Provider;
