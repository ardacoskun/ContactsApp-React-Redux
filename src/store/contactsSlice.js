import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdapter = createEntityAdapter();
const initialState = contactsAdapter.getInitialState();

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactsAdapter.addOne,
  },
});

export const { addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
