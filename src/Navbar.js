import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './App.css';
 import {Link  } from 'react-router-dom';
import  Button  from '@mui/material/Button'; 
const Navbar = () => {

  
    const  products  = useSelector((state)=>
      state.product.product
    );
    
    const value = useSelector((state)=>
    state.product.value
    )



  return (
    <div className='nav'> 
    
            <Box sx={{ flexGrow: 0.5 }}  >
          
                   <AppBar position="fixed">
                      
                    
                    <Box style={{textAlign:'right',display:'inline'}}>
                    
                    <ShoppingCartIcon style={{backgroundColor:'red',marginRight:'20px',marginTop:'10px'}} > {value}</ShoppingCartIcon>
                     <h2 style={{marginTop:'-35px',marginRight:'12px',color:'yellow',borderRadius:'100%'}}> { products.length }</h2>
                     <h2>Amount : $ {value}</h2>
                    </Box>
                  </AppBar>
            </Box>

    </div>
 
  )
}

export default Navbar