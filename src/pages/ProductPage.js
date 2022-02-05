import { Link, useParams } from "react-router-dom";
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
                {thisProduct.products.filter(product => 
                    product.id === productId)[0].attributes.map(attribute =>
                        <AttrContainer key={attribute.id}>
                            <h3>{attribute.name}:</h3>
                            {attribute.items.map(item =>
                                <Attributes key={item.id}>
                                    <label 
                                        htmlFor={item.id} 
                                        style={{}}
                                    >{item.displayValue}
                                        <input type={'radio'} name={attribute.name} id={item.id} value={item.value}/>
                                    </label>
                                </Attributes>    
                            )}
                        </AttrContainer>
                    )
                }
                <div>
                    <h3>Price:</h3>
                    <h3>
                        {thisProduct.products.filter(product => product.id === productId)[0].prices[0].currency}
                        {thisProduct.products.filter(product => product.id === productId)[0].prices[0].amount}
                    </h3>
                </div>
                <button>
                    <Link to={`/cart`}>Add to Cart</Link>
                </button>
                <Description>
                    <p dangerouslySetInnerHTML={{__html: thisProduct.products.filter(product => product.id === productId)[0].description}}></p>
                </Description>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    max-width: 1400px;
    margin: 7rem auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
`;
const Left = styled.div`
    display: flex;   
    width: 55%;
    height: 70vh;
    justify-content: space-evenly;
`;
const Right = styled.div`
    height: 70vh;
    width: 35%;
    border: 1px solid #e6e6e6;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    button {
        text-transform: uppercase;
        background: #52D67A;
        color: #fff;
        border: none;
        font-size: 1.4rem;
        padding: 1.4rem;
        cursor: pointer;
    }
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
const AttrContainer = styled.div`
    width: 100%;
`;
const Attributes = styled.div`
    display: inline;
    width: 100%;
    label {
        margin: 0.8rem;
        padding: 0.4rem;
        border: 1px solid #000;
        input {
            margin-top: 1rem;
        }
    }
`;
const Description = styled.div`
    height: 2rem;
    width: 100%;
    overflow: hidden;
`;