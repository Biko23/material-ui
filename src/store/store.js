import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import securitySlice from "./securitySlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer:{
        cards: cardsSlice,
        user: userSlice,
        security: securitySlice
    }
})