import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: "rom"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeLanguage } = languageSlice.actions

export const selectLanguage = state => state.language.language

export default languageSlice.reducer