import { createSlice } from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

const initialState = {
      name:'',
      phone_Number:'',
      email:'',
      message:''
};

export const GmailSlice = createSlice({
    name:'gmail_Forms',
    initialState,
    reducers:{
       Informations(state,action){
        const {type,value} = action.payload;
        state[type] = value;
        console.log(initialState)
       }
    }
});


//Export the slioces actions HA!
export const {Informations} = GmailSlice.actions;


export default GmailSlice.reducer;