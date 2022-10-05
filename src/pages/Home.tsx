import React, { ReactElement, FC, useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { getList } from "../services/HomeService";
import Carousel from 'react-material-ui-carousel'
import MainFeaturedPost from "../components/MainFeaturedPost";

const Home: FC<any> = (): ReactElement => {
    const [slides, setSlide] = useState([]);
    const [sections, setSections] = useState([]);
    useEffect(() => {
        let mounted = true;
        getList()
        .then(items => {
            if(mounted) {
                const item = items?.items[0];
                setSlide(item.slider)
                setSections(item.secciones)
            }
        })
        return () => {mounted = false};
    }, []);


    return (
        <Box sx={{
            flexGrow: 1,
            flexDirection: "column",
            backgroundColor: 'whitesmoke',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Carousel  sx={{width: "100%", minHeight:"200px"}}>
            {slides.map((slide: any) =>{
                return ( 
                        <img
                            src={`${slide.value.imagen.full_url}`}
                            srcSet={`${slide.value.imagen.full_url}`}
                            alt={slide.value.imagen.alt}
                            loading="lazy"
                            style={{width: "100%"}}
                        />
                )
            })}
            </Carousel>

          
            <Typography variant="h3" gutterBottom margin="50px 0 50px 0;">
                <b>Descubre Más.</b>
            </Typography>

            {sections.map((slide: any) =>{
                return ( 
                    <MainFeaturedPost post={slide.value} />
                )
            })}
            
        </Box>
    );
};

export default Home;