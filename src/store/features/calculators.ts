import { createSlice } from "@reduxjs/toolkit";
import type { CalculatorsState } from "types/calculators";

const initialState: CalculatorsState = {
  calculators: []
}

const calculatorsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {}
})
// export const {  } = calculatorsSlice.actions;
export default calculatorsSlice.reducer;