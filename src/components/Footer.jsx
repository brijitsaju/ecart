import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div style={{ width: '100%', height: '300pxx' }} className=' d-flex justify-content-center align-items-center flex-column' >

      <Row className="container footer d-flex justify-content-evenly align-items-center w-100">
        <Col>     
        <div className="website" style={{ width: '400px' }}>
          <h4>

            <i class="fa-solid fa-cart-shopping me-3"></i>{' '}
            E-CART
          </h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem e quia ea! Reprehenderit quo veritatis natus iste consequatur.</p>
          <p>sed odio in hic animi aperiam voluptatum</p>
        </div></Col>


        <Col>   <div className=" Links d-flex flex-column ms-4">
          <h3>Links</h3>
          <Link to={'/'} style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to={'/cart'} style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
          <Link to={'./wishlist'} style={{ color: 'white', textDecoration: 'none' }}>Waishlist</Link>
        </div></Col>


        <Col>    <div className=" Guides d-flex flex-column">
          <h3>Guides</h3>
          <Link to={'https://react.dev/'} style={{ color: 'white', textDecoration: 'none' }}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{ color: 'white', textDecoration: 'none' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ color: 'white', textDecoration: 'none' }}>Bootswatch</Link>
        </div></Col>

        <Col>    
        <div className=" Contact">
          <h3>Contact Us</h3>
          <div className="d-flex">
            <input type="email" className='form-control' placeholder='Enter Your Email' />
            <button className='btn btn-primary text-white ms-2'>Subscribe</button>
          </div>
          <div className='col-lg-3 col-sm-12 icons d-flex justify-content-evenly ms-5 mt-3'>
            <Link to={'https://www.instagram.com/'} style={{ color: 'white', textDecoration: 'none' }}><i class="fa-brands fa-instagram fa-2x me-4"></i></Link>
            <Link to={'https://www.facebook.com/'} style={{ color: 'white', textDecoration: 'none' }}><i class="fa-brands fa-facebook fa-2x me-4 "></i></Link>
            <Link to={'https://www.linkedin.com/'} style={{ color: 'white', textDecoration: 'none' }}><i class="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
            <Link to={'https://twitter.com/'} style={{ color: 'white', textDecoration: 'none' }}><i class="fa-brands fa-twitter fa-2x "></i></Link>

          </div>
        </div>
        </Col>
      </Row>





      <p> Copyright ©  2023,All Rights ® Reserverd by <span className='text-primary'>asdf</span></p>
    </div>
  )
}

export default Footer