import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {

  const wishlistArray = useSelector((state) => state.wishlistReducer)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const handlewishlist =(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div >
      <Row className='m-5 me-3 ' style={{ marginTop: "250px" }} >
          {wishlistArray?.length > 0 ?
          wishlistArray.map((item) => (<Col style={{marginTop:'100px'}} className='mb-1' sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
              <Card.Body>
                  <Card.Title>{item.title.slice(0, 20)}...</Card.Title>
                  <Card.Text>
                      <p>{item.description.slice(0, 40)}...</p>
                      <p className='fw-bolder'>Price:₹{item.price}</p>
                  </Card.Text>
                  <div className='d-flex alighn-items-center justify-content-between'>
                      <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
                      <Button  onClick={()=>handlewishlist(item)} variant="outline-success btn rounded"><i class="fa-solid fa-cart-plus"></i></Button>
                  </div>
              </Card.Body>
          </Card>
      </Col>))
          : <div style={{ height: "100vh" }} className='d-flex flex-column justify-content-center align-items-center'>
            <img height={'300px'} src="https://cdn.dribbble.com/users/68238/screenshots/5613387/cart.gif" alt="no image" />
            <h4>Your wishlist is empty</h4>
            <button className='btn btn-sucess rounded mt-3'><Link style={{ textDecoration: "none", color: 'white' }} to={"/"}>Back to home</Link></button>
          </div>}
      </Row>
    </div>
  )
}

export default Wishlist