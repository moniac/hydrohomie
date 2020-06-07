import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

// import { AsyncStorage } from "react-native";
// import { AsyncStorage } from "react-native";
import { allReducers } from "./reducers/RootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, applyMiddleware(createLogger()));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };
