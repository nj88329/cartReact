import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
  name : 'product',
  initialState:{
      product:[],
      value:0
  },
  reducers:
  
   {
      addProduct(state, action) {
          const itemPresent = state.product.findIndex((item)=>
            item.id === action.payload.id
          );
        if(itemPresent >=0) {
            state.product[itemPresent].qty += 1;
            state.product[itemPresent].amount+=action.payload.price;
            state.value+=action.payload.price;
        }
        else{
            const product = { ...action.payload, qty:1, amount:action.payload.price}
            state.product=[...state.product,product];
            state.value+=action.payload.price
        }
      
      },
      removeProduct(state, action){
          console.log('i',action.payload)
        //  return state.product.filter((item)=>
        //          action.payload.id !== item.id 
        const item = state.product.findIndex((item)=>
            item.id === action.payload.id
          );
          console.log('item',item)
          
          let newarr=[]
          state.product.filter((val,i)=>{
                 if(i !== item){
                    newarr=[...newarr,val]
                    
                 }
                 else{
                  
                   state.value=Math.round(state.value-state.product[item].amount); 

                 }

          })
          state.product=newarr
      },
   }
})


export const { addProduct , removeProduct } = ProductSlice.actions;

export default ProductSlice.reducer;