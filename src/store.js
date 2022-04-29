import  { configureStore } from '@reduxjs/toolkit';

import productReducer from '../src/slice/ProductSlice';
import {
    persistReducer, 
   persistStore,

} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
   key:'persist-store',
   storage
}




const persistedReducer = persistReducer(persistConfig,productReducer);

export const store = configureStore({
   reducer : {product:persistedReducer},

});

export const persistor = persistStore(store); 

export default store;