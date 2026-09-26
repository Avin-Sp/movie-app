import { createSlice } from "@reduxjs/toolkit";

const savedFavorites =
  JSON.parse(localStorage.getItem("favorites")) || [];

const initialState = {
  items: savedFavorites,
};

const favoritesSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.items.some(
        (movie) => movie.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);

        localStorage.setItem(
          "favorites",
          JSON.stringify(state.items)
        );
      }
    },

    removeFromFavorites: (state, action) => {
      state.items = state.items.filter(
        (movie) => movie.id !== action.payload
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;