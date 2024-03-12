import { Action, combineReducers } from "@reduxjs/toolkit";
import settings from "@store/features/settings";
import calculators from "@store/features/calculators";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import type { SettingsState } from "types/settings";
import type { CalculatorsState } from "types/calculators";

const persistConfig = {
  key: 'elgainulator-',
  storage,
  throttle: 200
}

export default combineReducers({
  calculators: persistReducer<CalculatorsState, Action>({
    ...persistConfig,
    key: persistConfig.key + 'calculators',
    // blacklist: [],
    // whitelist: []
  }, calculators),
  settings: persistReducer<SettingsState, Action>({
    ...persistConfig,
    key: persistConfig.key + 'settings',
    // blacklist: [],
    // whitelist: []
  }, settings)
});