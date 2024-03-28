import {createSlice,configureStore} from "@reduxjs/toolkit";

const cartInitialState={items:[],totalQty:0};

const cartslice=createSlice({
    name: 'cart',
    initialState:cartInitialState,
    reducers:{
        updateItems(state,action){
            state.items=action.payload;
            state.totalQty=(action.payload).length;
        }
    },
})


export const cartActions =cartslice.actions
export default cartslice.reducer