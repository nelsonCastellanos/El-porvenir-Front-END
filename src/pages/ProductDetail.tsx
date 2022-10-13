import { ReactElement, FC } from "react";
import Gallery from "../components/Carousel";
import "../styles/productDetail.css";

const ProductDetail: FC<any> = (): ReactElement => {
  return (
    <>
      <div id="product_detail_grid">
        <Gallery />

        <div className="column_detail">
          <h1>Nombre</h1>
          <p>En la mitología griega, Zeus es una divinidad a la que se denomina a veces con el título de «padre de los dioses y los hombres»,1​ que gobierna a los dioses del Olimpo como un padre a una familia, de forma que incluso los que no eran sus hijos naturales se dirigen a él como tal.2​ Es el rey de los dioses y supervisa el universo.3​ Es el dios del cielo y el trueno y por ende de la energía. Entre sus atributos se incluyen el cetro y la corona (como símbolos de su poder), el rayo, el águila, el toro y el roble. Además de su herencia indoeuropea, el clásico Zeus «recolector de nubes» también obtuvo ciertos rasgos iconográficos de culturas del antiguo Oriente Próximo, como el cetro. Zeus fue comúnmente representado por los artistas griegos en dos poses: de pie, avanzando con un rayo levantado en su mano derecha, y sentado majestuosamente.

Hijo de Cronos y Rea, era el más joven de sus descendientes. En la mayoría de las tradiciones aparece casado con Hera (su hermana y esposa, que engañó siendo un pájaro para casarse) aunque en el oráculo de Dódona su esposa era Dione, con quien según la Ilíada es padre de Afrodita.4​ Es conocido por sus numerosas aventuras y amantes, fruto de las cuales fueron muchas deidades y héroes, incluyendo Atenea, Apolo, Artemisa, Hermes, Perséfone, Dioniso, Perseo, Heracles, Helena, Minos, las Musas y ninfas como Eco. Con Hera suele decirse que Zeus fue padre de Ilitía, Ares, Enio, Hebe y Hefesto.5​

En griego, el nombre del dios es Zeús en el caso nominativo y Διός dios en el genitivo. Las formas más antiguas del nombre son las micénicas di-we y di-wo, escritas en lineal B.6​ La palabra Zeus está relacionada con dios y con Júpiter (de Dyu-piter *Dyeu-, 'luz' y piter, 'pater, padre'), y esta, a su vez, con brillo, luz diurna.7​

Su equivalente en la mitología romana era Júpiter; en la etrusca, Tinia; en el hinduismo, Diaus Pitar; en la egipcia, Amón; y en la cananea, Baal.8​</p>
          <h2>Precio</h2>
          
          <h3>Disponibles</h3>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
