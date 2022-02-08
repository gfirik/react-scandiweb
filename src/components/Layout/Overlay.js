import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Overlay() {
  const totalQuantity = useSelector((state) => state.basket.totalQuantity);
  const cartItems = useSelector((state) => state.basket.items);

  return (
    <Container>
      <h4>My Bag {totalQuantity} items</h4>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <ButtonContainer>
        <button>
          <Link to="/cart">View Bag</Link>
        </button>
        <button>Checkout</button>
      </ButtonContainer>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  width: 350px;
  height: 400px;
  top: 15rem;
  text-transform: none;
  box-shadow: 0px 1px 1px 0 #000;
  overflow-y: scroll;
  background: #fdfdfd;
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
    a {
      text-decoration: none;
      color: #1d1f22;
    }
    &:hover {
      background: #1d1f22;
    }
    &:hover a {
      color: #fff;
    }
  }
  button:nth-child(2) {
    background: #52d67a;
    color: #fff;
    border: none;
    &:hover {
      box-shadow: 0px 0px 1px #1d1f22;
    }
  }
`;
