import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            username: '',
            companyID: '',
            functionalGroups: []
        }},
    reducers: {
        addFirstName: (state, action) => {
            console.log('In addFirstName. action: ', action);
            // let userFirstName = action;
            state.user.firstName = action.payload;

        },
        addLastName: (state, action) => {
            console.log('In addLastName. action: ', action);
            // let userFirstName = action;
            state.user.lastName = action.payload;

        },
        addEmail: (state, action) => {
            console.log('In addEmail. action: ', action);
            // let userFirstName = action;
            state.user.email = action.payload;

        },
        addPhone: (state, action) => {
            console.log('In addPhone. action: ', action);
            // let userFirstName = action;
            state.user.phoneNumber = action.payload;

        },
        addUsername: (state, action) => {
            console.log('In addUsername. action: ', action);
            // let userFirstName = action;
            state.user.username = action.payload;

        },
        addCompanyID: (state, action) => {
            console.log('In addCompanyID. action: ', action);
            // let userFirstName = action;
            state.user.companyID = action.payload;

        },
        addFunctinalGroups: (state, action) => {
            console.log('In addFunctinalGroups. action: ', action);
            if(state.user.functionalGroups.includes(action.payload)) {
                let index = state.user.functionalGroups.indexOf(action.payload);
                state.user.functionalGroups.splice(index, 1);              
            } else {
                state.user.functionalGroups.push(action.payload);
            }
            // if(state.user.functionalGroups.length === 0) {
            //     console.log(state.user.functionalGroups);
            //     state.user.functionalGroups.push(action.payload);
            //     console.log(state.user.functionalGroups);
            // } else {
            //     if(state.user.functionalGroups.includes(action.payload)){
            //         console.log(state.user.functionalGroups);
            //     }
            // }
        }
    }
});

export const { addFirstName, addCompanyID, addEmail, addFunctinalGroups, addLastName, addPhone, addUsername } = userSlice.actions;

export default userSlice.reducer;