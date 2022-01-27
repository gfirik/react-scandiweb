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
                            <img src={image} alt={'Product'} onClick={()=>(addImg(image))}/>)}
                </ImageSelections>
                <SelectedImageContainer>
                    <img src={image} alt={`Click to see the images`} />
                </SelectedImageContainer>
            </Left>

            <Right>
                <h1>{thisProduct.products.filter(product => product.id === productId)[0].name}</h1>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
`;
const Left = styled.div`
    display: flex;   
    width: 50%;
    justify-content: space-evenly; 
`;
const Right = styled.div`
    width: 50%;
`;
const ImageSelections = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    img {
        width: 100%;
        border: 1px solid #e6e6e6;
        margin-bottom: 1rem;
        transition: all 0.3s ease-in-out;
        &:hover, &:focus {
            border: 1px solid #1d1f22;
            cursor: pointer;
        }
    }
`;
const SelectedImageContainer = styled.div`
    width: 400px;
    height: 450px;
    display: flex;
    justify-content: center;
    img {
        width: 100%;
        height: auto;
    }
`;