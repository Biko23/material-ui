import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    reducers: {
        addNewCards: (state) => {
            console.log('Let us add new cards');
            state.cards.push(10);
            // let myCards = state.cards;
            // myCards.push(action);
            // return state.cards = myCards;
        }
    }
});

export const { addNewCards } = cardSlice.actions;

export default cardSlice.reducer;