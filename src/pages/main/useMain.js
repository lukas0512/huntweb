import  {useEffect, useState } from 'react';
import api from '../../services/api';

function useMain(){
    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState([]);
    const [page, setPage] = useState(1);


    useEffect( () => { 
        async function loadProducts() {
            const response = await api.get(`/products?page=${page}`);
            
            setProducts(response.data.docs);
            setProductInfo(response.data)
            
        }
        loadProducts();
    },[page])

    const nextPage = () => {
        if (parseInt(productInfo.page) === productInfo.pages) return;
        let newPage = page +1 ;
        setPage(newPage);
    } 
    const prevPage = () => {
        if (parseInt(productInfo.page) === 1) return;
        let newPage = page - 1 ;
        setPage(newPage);
    }

    return {
        nextPage,
        prevPage,
        products,
        page,
        productInfo
    }
}
export default useMain;