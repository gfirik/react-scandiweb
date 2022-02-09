import styled from "styled-components";
import { useSelector } from "react-redux";
import GetCurrencySymbol from "../functions/currency";

export default function Cart() {
  const totalQuantity = useSelector((state) => state.basket.totalQuantity);
  const cartItems = useSelector((state) => state.basket.items);
  const totalAmount = Number(useSelector((state) => state.basket.totalAmount));
  const currency = GetCurrencySymbol(
    useSelector((state) => state.basket.items.currency)
  );

  return (
    <Container>
      <h1>Cart</h1>
      <h2>{totalQuantity} products</h2>
      <h3>
        Total: {currency} {totalAmount.toFixed(2)}
      </h3>

      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <Left>
              <h3>{item.name}</h3>
              <h4>
                {GetCurrencySymbol(item.currency)} {item.totalPrice.toFixed(2)}
              </h4>
              <div>
                {item.selectedAttrs
                  ? item.selectedAttrs.map((attr) => (
                      <button
                        key={attr}
                        style={
                          String(attr).charAt(0) === "#"
                            ? { background: attr }
                            : {}
                        }
                      >
                        {String(attr).charAt(0) === "#" ? null : attr}
                      </button>
                    ))
                  : "No attributes"}
              </div>
            </Left>
            <Right>
              <div>
                <button>+</button>
                <span>
                  <p>{item.quantity}</p>
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
  padding: 2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-weight: bold;
    margin-top: 1rem;
  }
  h3 {
    font-weight: bold;
    margin-top: 1rem;
  }
  li {
    list-style: none;
    width: 100%;
    display: flex;
    height: 200px;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
    margin-top: 3rem;
    padding: 2rem;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  h3 {
    font-size: 2.5rem;
    font-weight: 400;
  }
  h4 {
    font-weight: 800;
    font-size: 1.2rem;
  }
  div {
    display: flex;
    button {
      font-size: 1.4rem;
      width: 50px;
      height: 50px;
      color: #fff;
      border: 1px solid #ccc;
      background: #1d1f22;
      cursor: pointer;
      margin-right: 1rem;
    }
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
    transition: all 0.3s ease-in-out;
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
