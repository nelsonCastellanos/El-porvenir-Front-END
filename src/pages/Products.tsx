import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";
import CardProduct from "../components/CardProduct"

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
        
   
    <Box  sx={{ flexGrow: 1,mb:20,mt:10 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(5)).map((_, index) => (
          <Grid  display="flex" justifyContent="center" alignItems="center" xs={2}  sm={4} md={4} key={index}>
            <CardProduct></CardProduct>
          </Grid>
        ))}
      </Grid>
    </Box>

  
        
        </div>
    );
};

export default Home;