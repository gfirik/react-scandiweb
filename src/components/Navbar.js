import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './../index.css';
import { RiShoppingBag3Fill } from 'react-icons/ri';
import { BsCart } from 'react-icons/bs';

export default function Navbar({ data }) {

    const [activeCategory, setActiveCategory] = useState({
        activeObject:  'all',
        objects: ['all', 'clothes', 'tech']
    });

    return (
        <NavbarContainer>
            {/* Category Navigation */}
            <NavLeft>
                {activeCategory.objects.map(object => (
                    <div key={object}>
                        <Link 
                            to={object === 'all' ? '/' : `/${object}`}
                            onClick={() => setActiveCategory({
                                activeObject: object,
                                objects: activeCategory.objects
                                
                            })} 
                            style={activeCategory.activeObject === object ? {color: '#52D67A'} : {}}
                        >{object}</Link>
                    </div>
                ))}
            </NavLeft>

            {/* Home Page Navigation Button & Logo */}
            <NavIcon>
                <Link to='/'>
                    <RiShoppingBag3Fill size={50} />
                </Link>
            </NavIcon>
            
            {/* Currency Toggler & Cart Icon */}
            <NavRight>
                <div>
                    <select>
                        {
                            data.currencies.map((currency) => (
                            <option key={currency} 
                            >
                                {currency}
                            </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <BsCart size={24} />
                    <span className='nav-num'>0</span>
                </div>
            </NavRight>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1111;
    box-shadow: 0px 0px 1px #000;
    text-transform: uppercase;
`;
const NavLeft = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        margin: 0 1rem;
        cursor: pointer;    
        a {
        color: #1d1f22;
            text-decoration: none;
        }
    }
`;
const NavIcon = styled.div`
    cursor: pointer;
    a {
        color: #52D67A;
    }
`;
const NavRight = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
        margin: 0 1rem;
        cursor: pointer;
        position: relative;
        .nav-num {
            position: absolute;
            width: 1.4rem;
            height: 1.4rem;
            font-size: 1.2rem;
            text-align: center;
            background: #1d1f22;
            color: #fff;
            border-radius: 50%;
            top: -0.5rem;
            right: -0.5rem;
        }
    }
`;