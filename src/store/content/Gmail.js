import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      name:'',
      phone:'',
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
       },
       clear_Message(state,action){
          return{
            ...state,
            name:'',
            phone:'',
            email:'',
            message:''
          }
       }
    }
});

export const { Informations,clear_Message } = GmailSlice.actions;


export default GmailSlice.reducer;