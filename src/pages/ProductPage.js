import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { CATEGORIES } from './../schema';
import styled from "styled-components";
import { useState } from "react";

export default function ProductPage() {
    
    const { loading, error, data } = useQuery(CATEGORIES);

    const { productId } = useParams();
    const thisProduct = data.categories.find(category => category.products.find(product => product.id === productId));

    const [image, setImg] = useState(thisProduct.products.filter(product => 
        product.id === productId)[0].gallery[0]);
    const addImg = (img) => {
        setImg(img);
    }; 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;


    return (
        <Container>
            <Left>
                <ImageSelections>
                    {thisProduct.products.filter(product => 
                        product.id === productId)[0].gallery.map(image => 
                            <img key={image} src={image} alt={'Product'} onClick={()=>(addImg(image))}/>)}
                </ImageSelections>
                <SelectedImageContainer>
                    <img src={image} alt={`ProductImage`} />
                </SelectedImageContainer>
            </Left>

            <Right>
                <h1>{thisProduct.products.filter(product => product.id === productId)[0].name}</h1>
                <div>{
                    thisProduct.products.filter(product => product.id === productId)[0].attributes.map(attribute =>
                        <div key={attribute.id}>
                            <h3>{attribute.name}</h3>
                            {attribute.items.map(item =>
                                <div key={item.id}>
                                    <input type={'button'} name={item.name} value={item.displayValue}/>
                                </div>    
                            )}
                        </div>
                    )
                }</div>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;
const Left = styled.div`
    display: flex;   
    width: 55%;
    justify-content: space-between;
`;
const Right = styled.div`
    width: 35%;
    border: 1px solid #e6e6e6;
`;
const ImageSelections = styled.div`
    display: flex;
    flex-direction: column;
    width: 5rem;
    img {
        width: 100%;
        height: 5rem;
        margin-bottom: 1rem;
        transition: all 0.3s ease-in-out;
        &:hover, &:focus, &:active {
            outline: 1px solid #1d1f22;
            cursor: pointer;
        }
    }
`;
const SelectedImageContainer = styled.div`
    width: 450px;
    max-height: 60vh;
    display: flex;
    justify-content: center;
    img {
        width: 100%;
        height: auto;
    }
`;