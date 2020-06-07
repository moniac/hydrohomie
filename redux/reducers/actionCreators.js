import { ADDAMOUNTDRANK } from "./constants";
import { bindActionCreators } from "redux";
import { store } from "../configureStore";

const addAmountDrank = (payload) => ({
  type: ADDAMOUNTDRANK,
  payload: parseFloat(payload, 10),
});

export const boundaddAmountDrank = bindActionCreators(
  addAmountDrank,
  store.dispatch
);
