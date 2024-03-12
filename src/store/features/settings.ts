import { createSlice } from "@reduxjs/toolkit";
import type { SettingsState } from "types/settings";

const initialState: SettingsState = {}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {}
})
// export const {  } = settingsSlice.actions;
export default settingsSlice.reducer;