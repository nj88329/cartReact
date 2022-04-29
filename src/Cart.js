import React from 'react'
import Navbar from './Navbar';
import './App.css'
import { useSelector } from 'react-redux'
import { removeProduct,addProduct } from './slice/ProductSlice'
import Button from '@mui/material/Button';
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

const Cart = () => {

    const  products  = useSelector((state)=>
    state.product.product
  );

  const dispatch=useDispatch();

 const remove = (item) => {
     console.log('item',item)
       dispatch(removeProduct(products[item]))
 }

 const add = (item) =>{

    
    dispatch(addProduct(products[item]))
  
  }  


  return (
           
    <div className="cart">
   <Button style={{backgroundColor:'greenyellow'}}><Link to="/">HomePage</Link></Button> 
  
  { (products.length == 0)?'': <h2 style={{color:'blue'}}>CART ITEMS</h2>}
{
    (products.length == 0)?<h2>Cart is Empty</h2>:  
    products?.map((products,i)=>{
        return(
           
           
                      <div key={i} className="card" style={{width: '18 rem',marginTop:'150px',border:'groove', backgroundColor:'lightgreen'}}>
                       
                          <div className="card-body" style={{marginLeft:'70px'}}>
                          <img src={products.image} className="card-img-top" alt="..."/>
                           
                            <h2 className="card-title" style={{color:'Blue'}}>  {products.title}</h2>
                            <h3 style={{color:'purple'}}> Category : {products.category}</h3>
                            <h3 className="card-text" style={{color:'Red'}}>ABOUT : <p>{products.description}</p></h3>
                            <h3 style={{color:'Black'}}>Quantity (in Cart) : {products.qty}</h3>
                            <h3 style={{color:'Black'}}>Price(of one) : $ {products.price}</h3>
                            <h3 style={{color:'Black'}}>Amount : $ {products.amount}</h3>
                              
                            <Button style={{backgroundColor:'rebeccapurple'}}  onClick={(e)=>add(i)}>Increase the Quantity</Button>
                         
                            <Button style={{backgroundColor:'Black'}} onClick={(e)=>remove(i)}>Remove Item from Cart</Button>
                          </div>
                        </div>)
    })
            
          }     
      



    </div>



  )
}

export default Cart