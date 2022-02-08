import { useRef } from "react";
import styled from "styled-components";

const ProductItemAttributes = (props) => {
  const { item, inStock } = props;
  const inputRef = useRef();

  const onChangeHandler = (e) => {
    e.preventDefault();
    props.onSelectAttr(inputRef.current.value);
  };

  return (
    <Attributes
      htmlFor={item.id}
      style={props.name === "Color" ? { background: item.value } : null}
    >
      {props.name === "Color" ? null : item.displayValue}
      <input
        type={"radio"}
        name={props.name}
        id={item.id}
        value={item.value}
        ref={inputRef}
        onClick={inStock ? onChangeHandler : null}
      />
    </Attributes>
  );
};
const Attributes = styled.label`
  outline: 1px solid #1d1f22;
  cursor: pointer;
  padding: 0.4rem;
  margin-right: 1rem;
  min-width: 2rem;
  min-height: 1rem;
  text-align: center;
  input {
    display: none;
  }
`;
export default ProductItemAttributes;
