import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./modules/home";
import entireReducer from "./modules/entire"
import detailReducer from "./modules/detail";
import mainSliceReducer from "./modules/main";

const store = configureStore({
  reducer: {
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer,
    main:mainSliceReducer
  }
})

export default store