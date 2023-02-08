import { createStore, combineReducers, applyMiddleware } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { students, isLoading } from "./students/reducers";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const reducers = {
  students,
  isLoading,
};

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
