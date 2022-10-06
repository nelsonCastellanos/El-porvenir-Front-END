import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import CardProduct from "../components/CardProduct"
import "../styles/products.css"
import Grid from '@mui/material/Unstable_Grid2';
const Home: FC<any> = (): ReactElement => {
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

    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    <div className="product-item"><CardProduct/></div>
    

   </div>

  
        
        </div>
    );
};

export default Home;