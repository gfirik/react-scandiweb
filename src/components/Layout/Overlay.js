import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GetCurrencySymbol from "../functions/currency";

export default function Overlay() {
  const totalQuantity = useSelector((state) => state.basket.totalQuantity);
  const cartItems = useSelector((state) => state.basket.items);
  const totalAmount = Number(useSelector((state) => state.basket.totalAmount));
  const currency = GetCurrencySymbol(
    useSelector((state) => state.basket.items.currency)
  );
  return (
    <Container>
      <h4>My Bag {totalQuantity} items</h4>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <section>
              <h3>{item.name}</h3>
              <h4>
                {GetCurrencySymbol(item.currency)} {item.totalPrice.toFixed(2)}
              </h4>
              <Attributes>
                {item.selectedAttrs
                  ? item.selectedAttrs.map((attr, index) => (
                      <button
                        key={index}
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
              </Attributes>
            </section>
            <section>
              <div>
                <button>+</button>
                <p>{item.quantity}</p>
                <button>-</button>
              </div>
              <img src={item.image} alt={item.name} />
            </section>
          </div>
        ))}
        <Price>
          <h3>Total:</h3>
          <h3>
            {currency} {totalAmount.toFixed(2)}
          </h3>
        </Price>
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
const Container = styled.section`
  position: fixed;
  width: 350px;
  max-height: 400px;
  top: 5rem;
  right: 10rem;
  text-transform: none;
  box-shadow: 0px 1px 1px 0 #000;
  overflow-y: scroll;
  background: #fdfdfd;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0.5rem 0;
      border-bottom: 1px solid #e6e6e6;
      section {
        width: 50%;
        div {
          border-bottom: none;
        }
      }
      section:last-child {
        div {
          display: flex;
          transition: all 0.3s ease-in-out;
          flex-direction: column;
          button {
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            cursor: pointer;
            background: #fff;
            &:hover {
              background: #ccc;
            }
          }
        }
        display: flex;
        flex-direction: row;
      }
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
`;
const Attributes = styled.div`
  width: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: none;
  button {
    margin: 0.2rem;
    border: 1px solid #ccc;
    background: #1d1f22;
    color: #fff;
    width: 30px;
    height: 30px;
    &:hover {
      box-shadow: 0px 0px 1px 0px #000;
    }
  }
`;
const ButtonContainer = styled.section`
  display: flex;
  width: 100%;
  height: 2rem;
  justify-content: space-evenly;
  margin: 1rem auto;
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
const Price = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
