import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { basketActions } from "../../store/basketSlice";
import ProductItemAttributes from "./ProductItemAttributes";
import GetCurrencySymbol from "../functions/currency";

const ProductItem = (props) => {
  const { attributes, prices, id, inStock } = props.product;
  const [selectedAttr, setSelectedAttr] = useState(null);
  const dispatch = useDispatch();
  // console.log(props.product);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      basketActions.addToBasket({
        id,
        name: props.product.name,
        amount: prices[0].amount,
        currency: prices[0].currency,
        quantity: 1,
        selectedAttr: selectedAttr,
        image: props.product.gallery[0],
        attributes: attributes,
      })
    );
  };
  const attributesHandler = (attributes) => {
    setSelectedAttr(attributes);
  };
  return (
    <Container>
      {attributes.map((attribute) => (
        <AttrContainer key={attribute.id}>
          <h3>{attribute.name}:</h3>
          <div>
            {attribute.items.map((item) => (
              <ProductItemAttributes
                key={item.id}
                item={item}
                name={attribute.name}
                onSelectAttr={attributesHandler}
                inStock={inStock}
              />
            ))}
          </div>
        </AttrContainer>
      ))}
      <div>
        <h3>Price:</h3>
        <h3>
          {GetCurrencySymbol(prices[0].currency)}
          {prices[0].amount}
        </h3>
      </div>
      {inStock ? (
        <button onClick={submitHandler}>Add to Cart</button>
      ) : (
        <button disabled style={{ background: "#1d1f22" }}>
          Out of Stock
        </button>
      )}
    </Container>
  );
};
const Container = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  button {
    color: #fff;
    &:hover {
      box-shadow: 0px 0px 1px #1d1f22;
    }
  }
`;
const AttrContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;
  }
`;

export default ProductItem;
