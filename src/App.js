import './index.css';
import React from 'react';
import { useQuery } from '@apollo/client'
import { CATEGORIES } from './schema';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Tech from './pages/Tech';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

export default function App() {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <Router>
      <Navbar data={data} />
      <Container>
        <Routes>
        {/* I tried to use filter to filter the data and then map over it to get the products, but it didn't work. 
          I'm not sure why, but I'm going to leave it here for now and use router element attributes. */}
          <Route path="/" element={<Home/>} />
          <Route path="/clothes" element={<Clothes/>} />
          <Route path="/tech" element={<Tech/>} />
          <Route path="/clothes/:productId" element={<ProductPage/>}/>
          <Route path="/tech/:productId" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  color: #1d1f22;
`;
