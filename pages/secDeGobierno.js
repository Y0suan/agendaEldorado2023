import Header from '@/Component/Header';
import Nav from '@/Component/Nav';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import CardXl from '@/Component/CardXl';
import MediumCard from '@/Component/Card/MediumCard';
import EspacioPublicitario from '@/Component/EspacioPublicitario';
import Layout from '@/Component/Layoud';

const SecDeGobierno = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/secDeGob");
        setProducts(response.data);
      } catch (error) {
        console.error("Error al recuperar los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const filterProductsByCategory = (categoryName) => {
    const filteredProducts = products.filter(product => product.category.parent === categoryName);
    return filteredProducts;
  };
  const filteredProducts = filterProductsByCategory('656db17db237aa95e172dc61');

  return (
    <Layout>
      <div class='ContSec'>
        <div class='Cont' >
        <div class='img'>
          <h2>
            Secretaria de Gobierno
          </h2>
          <h3>
            Mantente al tanto de todo
          </h3>
        </div>
        </div>
      </div>
      <div className='ConSecretaria'>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.slice().reverse().map(product => (
            <MediumCard key={product.id} produc={product} />
          ))
        ) : (
          <p>No hay Eventos disponibles</p>
        )}
      </div>
    </Layout>
  )
}

export default SecDeGobierno;
