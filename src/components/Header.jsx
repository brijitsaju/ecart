import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
function Header() {
const wishlist =useSelector((state)=>state.wishlistReducer)
//state represents  store
console.log(wishlist);


const cart =useSelector((state)=>state.cartReducer)
console.log(cart);
    return (
        <Navbar expand="lg" className="bg-primary fixed-top">
            <Container style={{marginTop:"20px"}}>
                <Navbar.Brand >
                    <Link to={"/"} style={{ textDecoration: 'none' }}> <i class="fa-solid fa-cart-shopping me-3"></i>{' '}
                        E-CART</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='btn border rounded border-light' ><Link to={"/wishlist"} style={{ textDecoration: 'none' }}><i class="fa-solid fa-heart"></i> Wishlist<Badge bg="secondary border-rounded ms-2">{wishlist.length}</Badge></Link></Nav.Link>
                        <Nav.Link ><Link to={"/cart"} style={{ textDecoration: 'none' }}><i class="fa-solid fa-cart-shopping"></i> Cart<Badge bg="secondary ms-2">{cart.length}</Badge></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header