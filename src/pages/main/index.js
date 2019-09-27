import React, {} from 'react';

import {
         ProductList,
         Products,
         ProductDescription,
         ProductButton,
         Actions,
         ActionButtons
         } 
from './styles';

import useMain from './useMain';

import { Link } from 'react-router-dom';

export default function Main(props){

    const { nextPage, prevPage, products } = useMain();

         
    return (
        <ProductList>
            {products.map(product => (
                <Products key={product._id}>
                    <strong>{product.title}</strong>
                    <ProductDescription>{product.description}</ProductDescription>
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                </Products>
            ))}
            <Actions>
                <ActionButtons onClick={prevPage}>Anterior</ActionButtons>
                <ActionButtons onClick={nextPage}>Próxima</ActionButtons>
            </Actions>
        </ProductList>
    );
        
    }