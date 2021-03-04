import React from "react";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import throttle from "lodash.throttle";
import rootReducer from "../reducer/rootReducer";
import { loadState, saveState } from "../localStorage";
import { applyMiddleware, createStore } from "redux";

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(logger, thunk)
);
    store.subscribe(throttle(() =>{
        saveState({
            cart: store.getState().cart
        })
    }, 1000))

export default store;
