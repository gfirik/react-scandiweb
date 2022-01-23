import {useParams} from "react-router-dom";
import { useQuery } from '@apollo/client';
import { CATEGORIES } from './../schema';

export default function ProductPage() {
    
    const { loading, error, data } = useQuery(CATEGORIES);

    const { productId } = useParams();
    const thisProduct = data.categories.find(category => category.products.find(product => product.id === productId));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;


    return (
        <div>
            <h1>{thisProduct.products.filter(product => product.id === productId)[0].name}</h1>
        </div>
    )
}
