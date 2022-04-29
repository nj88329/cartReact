import React,{ useState} from 'react';
import Button from '@mui/material/Button';
import { useParams, Link , BrowserRouter} from 'react-router-dom';
import { useEffect } from 'react';

const Details = () => {
  
  const [product, setProduct] = useState({});

  const item = useParams();
  console.log('par',item.i); 
   
  
  
    useEffect(() => {
      const fetchData =  () => {
        fetch(`https://fakestoreapi.com/products/${item.i}`)
          .then(res=>res.json())
          .then(json=>setProduct(json))
      }
  
      fetchData();
    }, []);
  

  return <>
         
        
         


          { 
            item?
            <>
           
                      <div className="card" style={{width: '18 rem',marginTop:'150px',border:'groove', backgroundColor:'lightcoral'}}>
                       
                          <div className="card-body" style={{marginLeft:'70px'}}>
                          <img src={product.image} className="card-img-top" alt="..."/>
                            <h2 className="card-title">Name : {product.title}</h2>
                            <h3 className="card-text" style={{color:'yellow'}}>About Product : {product.description}</h3>
                           <Button style={{backgroundColor:'greenyellow'}}>

                           <Link to ="/"> Go Back</Link>

                           </Button>  
                          </div>
                        </div>
                      
              </>   : ''
          }     
      

        </>

}

export default Details;