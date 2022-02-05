import styled from "styled-components";
import { useState } from "react";

export default function Overlay() {

    const [num, setNum] = useState(0);

    return (
        <Container>
            <h4>My Bag {num} items</h4>
            <div>Products here...</div>
            <ButtonContainer>
                <button>View Bag</button>
                <button>Checkout</button>
            </ButtonContainer>
        </Container>
    );
}
const Container = styled.div`
    width: 350px;
    height: 400px;
    top: 15rem;
    text-transform: none;
    box-shadow: 0px 1px 1px 0 #000;
    background-color: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    h4 {
        font-size: 1.2rem;
        font-weight: bold;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    height: 2rem;
    justify-content: space-evenly;
    button {
        text-transform: uppercase;
        font-size: 1rem;
        width: 130px;
        cursor: pointer;
        height: 3rem;
    }
    button:nth-child(1) {
        border: 1px solid #1d1f22;
        background: #fff;
        &:hover {
            background: #1d1f22;
            color: #fff;
        }
    }
    button:nth-child(2) {
        background: #52D67A;
        color: #fff;
        border: none;
        &:hover {
            box-shadow: 0px 0px 1px #1d1f22;
        }
    }
`;