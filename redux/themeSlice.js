import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'dark',
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "dark" ? "light-mode" : "dark"
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
