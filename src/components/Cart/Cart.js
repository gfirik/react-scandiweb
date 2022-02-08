import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Cart() {
  const totalQuantity = useSelector((state) => state.basket.totalQuantity);
  const quantity = useSelector((state) => state.basket.items.quantity);
  const cartItems = useSelector((state) => state.basket.items);

  return (
    <Container>
      <h1>Cart</h1>
      <p>{totalQuantity} items</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <Left>
              <h3>{item.name}</h3>
              <h4>
                {item.currency} {item.amount}
              </h4>
              <button>{item.selectedAttr}</button>
            </Left>
            <Right>
              <div>
                <button>+</button>
                <span>
                  <p>{quantity}</p>
                </span>
                <button>-</button>
              </div>
              <img src={item.image} alt={item.name} />
            </Right>
          </li>
        ))}
      </ul>
    </Container>
  );
}
const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  li {
    list-style: none;
    width: 100%;
    display: flex;
    height: 200px;
    border: 1px solid #ccc;
    justify-content: space-between;
    margin-top: 3rem;
  }
`;
const Left = styled.div`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }
  h4 {
    font-weight: 800;
    font-size: 1.2rem;
  }
  button {
    width: 40px;
    height: 40px;
    color: #fff;
    border: none;
    background: #1d1f22;
    cursor: pointer;
  }
`;
const Right = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  div {
    height: 100%;
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    button {
      width: 50px;
      font-size: 2.5rem;
      height: 50px;
      background: #fff;
      border: 1px solid #ccc;
      cursor: pointer;
      &:hover {
        background: #ccc;
      }
    }
  }
  img {
    width: 200px;
    height: 100%;
  }
`;
