import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phones: {}
}

const phoneSlice = createSlice ({
  name: "phones",
  initialState,
  reducers: {
    addPhones:(state, { payload }) => {
      state.phones = payload;
    },
  },
});

export const  { addPhones } = phoneSlice.actions;
export const getAllPhones = (state) => state.phones.phones;
export default phoneSlice.reducer;
