import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  // Here in 'whitelist', we define the reducers which we want to save in the persistence storage.
  whitelist: ["auth", "profile", "persistedGeneral", "demo", "teacherManager", "learning"],
  // Here in 'blacklist', we define the reducers which we do not want to save in the persistence storage.
  blacklist: ["package", "general", "notification"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
