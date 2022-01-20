import { BsCart } from "react-icons/bs";
import styled from "styled-components";
import { useState } from "react";

export default function Product({ id, image, name, prices, inStock }) {

    const [product, setProduct] = useState(null);
    const showProductPage = (product) => {
        setProduct(product);
    };

    return (
        <Card 
            key={id}
        >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <h4>{prices ? 
                prices.map((price) => (
                    <span key={price.currency}>
                        {price.currency} {price.amount}
                         
                    </span>
                )) : <h1>$0.00</h1>}
            </h4>
            {!inStock ? <h5>Out of Stock</h5> : <button
                onClick={() => showProductPage(product)}
            ><BsCart size={20}/></button> }
        </Card>
    )
}

const Card = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 1rem;
    &:hover {
        box-shadow: 0 0 4px rgba(0,0,0,0.5);    
        button {
            display: block;
        }
    }
    img {
        width: 100%;
        height: 75%;
    }
    h3 {
        font-size: 1.5rem;
    }
    h4 {
        font-size: 1.2rem;
        font-weight: bold;
    }
    h5 {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 11;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.1);
        font-size: 1.4rem;
        font-weight: lighter;
        display: grid;
        place-items: center;
        text-transform: uppercase;
    }
    button {
        display: none;
        position: absolute;
        border: none;
        background-color: #52D67A;
        color: #fff;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
        right: 1rem;
        top: 70%;
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: translateY(-0.5rem);
        }
    }
`;