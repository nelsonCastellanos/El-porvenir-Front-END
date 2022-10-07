import React, {ReactElement, FC,useEffect,useState,useRef} from "react";
import { getProducts } from "../services/HomeService";
import {Box, Typography} from "@mui/material";
import CardProduct from "../components/CardProduct"
import "../styles/products.css"

const Home: FC<any> = (): ReactElement => {
    const [list, setList] = useState<any[]>([]);
   
   
    const useIsMounted = () => {
        const isMounted = useRef(false);
        useEffect(() => {
          isMounted.current = true;
          getProducts()
          .then(items => {
            if(isMounted.current) {
              setList(items)
            }
          })
          return () => {
            isMounted.current = false;
          };
        }, []);
        return isMounted;
      };
console.log(useIsMounted())
console.log(list)
    return (
        <div>
        <Box sx={{
            flexGrow: 1,
            backgroundColor: 'whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3">Products</Typography>
        </Box>
        
   
   <div className="products_gallery">
   
   {list.map(item =>  <div className="product-item" key={item.code_siigo}>
    <CardProduct 
    name={item.name} 
    price={item.precio} 
    description={item.description} 
    img={item.cover_image}/>
    
    </div>)}
   
    

   </div>

  
        
        </div>
    );
};

export default Home;