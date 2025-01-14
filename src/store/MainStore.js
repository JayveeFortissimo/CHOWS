import {configureStore} from '@reduxjs/toolkit';
import GmailSlice from './content/Gmail.js';

 const Mainstore = configureStore({
    reducer:
    {
        GmailSlice
    }
});


export default Mainstore;