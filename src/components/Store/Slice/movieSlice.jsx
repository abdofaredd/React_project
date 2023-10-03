// wishlistSlice.js

import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  // },
  // reducers: {
  //   addToWishlist: (state, action) => {
  //     state.wishlist.push(action.payload);
  //   },
  //   removeFromWishlist: (state, action) => {
  //     state.wishlist = state.wishlist.filter(
  //       (movie) => movie !== action.payload
  //     );
  //   },
  reducers: {
    addRemoveFavorite: (state, action) => {
      if (!state.some((item) => item.id === action.payload.id)) {
        return [
          ...state,
          {
            id: action.payload.id,
            // title: action.payload.title,
            // poster_path: action.payload.poster_path,
            // vote_average: action.payload.vote_average,
            // release_date: action.payload.release_date,
            // overview: action.payload.overview,
            // vote_count: action.payload.vote_count
          },
        ];
      }
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
  // },
});

export const { addRemoveFavorite } = wishlistSlice.actions;
export default wishlistSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const favoriteArray = createSlice({
//   name: "favoriteArray",
//   initialState: [],
//   reducers: {
//     addRemoveFavorite: (state, action) => {
//       if (!state.some((item) => item.id === action.payload.id)) {
//         return [
//           ...state,
//           {
//             id: action.payload.id,
//             title: action.payload.title,
//             poster_path: action.payload.poster_path,
//             vote_average: action.payload.vote_average,
//             release_date: action.payload.release_date,
//             overview: action.payload.overview,
//             vote_count: action.payload.vote_count
//           },
//         ];
//       }
//       return state.filter((item) => item.id !== action.payload.id);
//     },
//   },
// });

// export const { addRemoveFavorite } = favoriteArray.actions;
// export default favoriteArray.reducer;
