import { combineReducers } from "redux";
import { store } from "../index";
import authReducer from "./auth";
import generalReducer from "./general";
import profileReducer from "./profile";
import packageReducer from "./packages";
import persistedgeneralReducer from "./persisted-general";
import demoReducer from "./demo";
import notificationReducer from "./notification";
import paymentReducer from "./payments";
import teacherManagerReducer from "./teacher-manager";
import learningReducer from "./learning";

const combinedReducer = combineReducers({
  general: generalReducer,
  auth: authReducer,
  profile: profileReducer,
  package: packageReducer,
  demo: demoReducer,
  persistedGeneral: persistedgeneralReducer,
  notification: notificationReducer,
  payment: paymentReducer,
  teacherManager: teacherManagerReducer,
  learning: learningReducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "RESET") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
