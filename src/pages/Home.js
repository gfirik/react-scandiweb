import { useQuery } from '@apollo/client'
import { CATEGORIES } from '../schema';
import Product from '../components/Product';
import styled from 'styled-components';

export default function Home() {

    const { loading, error, data } = useQuery(CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <Container>
            {data.categories.map((category) => (
                <ProductFeed key={category.name}>
                    <h2>{category.name}</h2>
                    <ProductCards>
                        {category.products.map((product) => (
                            <Product 
                                key={product.id}
                                id={product.id}
                                image={[product.gallery]}                
                                name={product.name}
                                prices={[product.prices]}
                                currency={product.prices[0].currency}
                                amount={product.prices[0].amount}
                                inStock={product.inStock}
                                category={category.name}
                            />
                        ))}
                    </ProductCards>
                </ProductFeed>
            ))}
        </Container>
    )
}

const Container = styled.div`
    max-width: 1400px;
    margin: 5rem auto;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const ProductFeed = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 2rem;
    h2{
        font-size: 1.5rem;
        text-transform: uppercase;
        margin: 2rem 4rem;
    }
`;
const ProductCards = styled.div`
    display: grid;
    width: 100%;
    grid-row-gap: 2rem;
    place-items: center;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
`;