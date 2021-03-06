import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdapter = createEntityAdapter();
const initialState = contactsAdapter.getInitialState();

export const contactSelectors = contactsAdapter.getSelectors(
  (state) => state.contacts
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactsAdapter.addOne,
    addContacts: contactsAdapter.addMany,
    deleteContact: contactsAdapter.removeOne,
    deleteAllContacts: contactsAdapter.removeAll,
    updateContact: contactsAdapter.updateOne,
  },
});

export const {
  addContact,
  addContacts,
  deleteContact,
  deleteAllContacts,
  updateContact,
} = contactsSlice.actions;
export default contactsSlice.reducer;
