import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Container>
            <Left>
                <Link to='/'>Home</Link>
                <Link to='/clothes'>Clothes</Link>
                <Link to='/tech'>Tech</Link>
                <Link to='/cart'>Cart</Link>
            </Left>
            <div>Ⓒ 2022</div>           
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #1d1f22;
    color: #fff;
    font-size: 1.2rem;
    margin-top: 4rem;
`;
const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    a {
        text-decoration: none;
        color: #fff;
    }
`;