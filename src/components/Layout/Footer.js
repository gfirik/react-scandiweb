import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <Left>
        <Link to="/">Home</Link>
        <Link to="/clothes">Clothes</Link>
        <Link to="/tech">Tech</Link>
        <Link to="/cart">Cart</Link>
      </Left>
      <Right>
        <span>Ⓒ {new Date().getFullYear()}</span>
        <span>
          Made by <a href="https://github.com/gfirik">Firdavs Gafurjonov</a>
        </span>
        <a href="mailto:firdavs.gafurjonov@gmail.com" target="__blank">
          hire/mail me
        </a>
      </Right>
    </Container>
  );
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
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #52d67a;
    }
  }
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
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
