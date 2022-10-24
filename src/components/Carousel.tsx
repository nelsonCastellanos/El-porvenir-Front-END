

import { ReactElement, FC} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "../styles/productDetail.css"
import {imgModel} from '../models/imageModel'
type Images={
    coverImage:imgModel,
    carouselImages:any;

}
const Gallery: FC<any> = ({coverImage,carouselImages}:Images): ReactElement => {

        return (
             
                <Carousel>
                    <div>
                        <img src={coverImage?.full_url??"https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"} alt="" />
                    </div>
                    
                        {carouselImages.map((item:imgModel) =>  
                        <div>
                            <img  src={item?.full_url} alt={item.alt} /> </div>  
                        )}
                    

                    
                   
                </Carousel>
         
        )
    
}
export default Gallery