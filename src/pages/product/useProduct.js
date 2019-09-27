import { useEffect, useState } from 'react';
import api from '../../services/api';

export default function useProduct() {

    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const { id } = this.props.match.params;
        const response = api.get(`/products/${id}`);
    })
}