import {ReactElement, FC,useEffect,useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../services/HomeService";
import {Box, Typography} from "@mui/material";
import CardProduct from "../components/CardProduct"
import "../styles/products.css"

const Home: FC<any> = (): ReactElement => {

    const [list, setList] = useState<any[]>([]);
    const navigate = useNavigate();
    const goToDetailProduct = (productID:number) =>
    
   { return (event: React.MouseEvent) => {
    console.log(productID)
      navigate({
        pathname: `product/${productID}`
      });
      event.preventDefault();}
    }
   
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
  
   {useIsMounted()?list.map(item =>  <div onClick={goToDetailProduct(item.code_siigo)} className="product-item" key={item.code_siigo}>
    <CardProduct 
    name={item.name} 
    price={item.precio} 
    description={item.description} 
    img={item.cover_image}/>
    
    </div>):<>Error cargando productos</>}
   
    

   </div>

  
        
        </div>
    );
};

export default Home;