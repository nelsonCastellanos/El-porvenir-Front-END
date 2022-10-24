import { ReactElement, FC,useEffect,useState} from "react";
import { useParams} from "react-router-dom";
import Gallery from "../components/Carousel";
import { getProductbyId } from "../services/HomeService";
import "../styles/productDetail.css";

const ProductDetail: FC<any> = (): ReactElement => {
  const [productDetail, setProductDetail] = useState<any[]>([]);
  interface Product {
    idProduct: number ;
  }
  let { id } = useParams();
  const product: Product = {
    idProduct: parseInt(id??""),
    
  };

    useEffect(() => {
   
      getProductbyId(product.idProduct)
      .then(items => {
        console.log(items)
        setProductDetail(items)
        
        
      })
      return () => {
      
      };
    }, [product.idProduct]);
   


  return (
    <>
      <div id="product_detail_grid">
        <Gallery 
        coverImage={productDetail[0]?.cover_image}  
        carouselImages={productDetail[0]?.images ?? []}  
        />

        <div className="column_detail">
          
          <h1>{productDetail[0]?.name}</h1>
          <p>{productDetail[0]?.description}​</p>
          <h2>Precio: {productDetail[0]?.precio} COP</h2>
          
          <h3>Disponibles: {productDetail[0]?.cantidad}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
