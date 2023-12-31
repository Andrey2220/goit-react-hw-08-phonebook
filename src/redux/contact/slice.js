import { addNewContactThunk, deleteContactThunk, getAllthunk, updateContactThunk } from "./thunk";
import { handlerAddNewContact, handlerAllProducts, handlerDeleteContact, updateContactContact } from "./handlers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isLoggedUser: false,
    contacts: {
        items: [],
    },
    filter: "",
    dataForUpdate: ''
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllthunk.fulfilled, handlerAllProducts)
            .addCase(addNewContactThunk.fulfilled, handlerAddNewContact)
            .addCase(deleteContactThunk.fulfilled, handlerDeleteContact)
            .addCase(updateContactThunk.fulfilled, updateContactContact)
    },
    reducers: {
        setFilter: (state, { payload }) => { state.filter = payload },
        closeModal(state) { state.dataForUpdate = '' },
        openChangeModal(state, { payload }) {
            state.dataForUpdate = payload;
        }
    }
})

export const reducerContacts = contactSlice.reducer;
export const { closeModal, setFilter, openChangeModal } = contactSlice.actions;
