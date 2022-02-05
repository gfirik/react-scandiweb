import styled from "styled-components";

export default function Cart() {
  return (
    <Container>
        <h1>Cart</h1>
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
`;