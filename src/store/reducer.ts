import { Action, combineReducers } from "@reduxjs/toolkit";
import settings from "@store/features/settings";
import core from "@store/features/core";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import type { SettingsState } from "types/settings";
import type { CoreState } from "types/core";

const persistConfig = {
  key: 'elgainulator-',
  storage,
  throttle: 200
}

export default combineReducers({
  core: persistReducer<CoreState, Action>({
    ...persistConfig,
    key: persistConfig.key + 'core',
    // blacklist: [],
    // whitelist: []
  }, core),
  settings: persistReducer<SettingsState, Action>({
    ...persistConfig,
    key: persistConfig.key + 'settings',
    // blacklist: [],
    // whitelist: []
  }, settings)
});