import {createSlice,configureStore} from "@reduxjs/toolkit";

const cartInitialState={items:[],totalQty:0};

const cartslice=createSlice({
    name: 'cart',
    initialState:cartInitialState,
    reducers:{
        udt_cart_items(state,action){
            state.items=action.payload;
            state.totalQty=(action.payload).length;
        },
       
        // udt_and_add_cart_items(state,action){
        //     state.items=action.payload;
        //     state.totalQty=(action.payload).length;
        // },
        IncrementQty(state,action){
            const {id}=action.payload;
            const itemexist=state.items?.find((e)=>e.id==id)
            if(itemexist){
            const updatedQty=itemexist.qty+1
            itemexist.qty=updatedQty
            itemexist.net_amt=updatedQty*itemexist.prd_price
            const itemIndex=state.items?.findIndex((e)=>e.id==id)
                state.items[itemIndex]=itemexist
            }else{
                state.items=[...state.items,{...action.payload}]
            }
        },
        DecrementQty(state,action){
            const {id}=action.payload;
            const itemexist=state.items?.find((e)=>e.id==id)
            const updatedQty=itemexist.qty-1
            itemexist.qty=updatedQty
            itemexist.net_amt=updatedQty*itemexist.prd_price
            const itemIndex=state.items?.findIndex((e)=>e.id==id)
            if(itemexist){
                state.items[itemIndex]=itemexist
            }
        },
        DeleteCartItem(state,action){
            const {id}=action.payload;
            const filtereditems=state.items?.filter((e)=>e.id!=id)
            state.items=filtereditems
        }
    },
})


export const cartActions =cartslice.actions
export default cartslice.reducer