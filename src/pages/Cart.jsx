import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromcart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer)
  console.log(cartArray);
  const dispatch = useDispatch()
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const getTotal = () => {
    if (cartArray.length > 0) {
      setTotal(cartArray.map(item => item.price).reduce((p1, p2) => p1 + p2))
    }
    else {
      setTotal(0)
    }

  }

  const checkout = () => {
    dispatch(emptyCart())
    alert('thank you...your order is sucessfuly placed')
    navigate('/')
  }

  useEffect(() => {
    getTotal(

    )
  }, [cartArray])



  return (
    <div className='d-flex justify-content-between' style={{ marginTop: '150px' }}>
      <div className='row w-100 '>
        {cartArray?.length > 0 ?
          <div className='col-lg-6 m-5'>
            <table className='table border shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>

                {cartArray.map((item, index) => (<tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td><img style={{ height: "100px", width: "100px" }} src={item.thumbnail} alt="" /></td>
                  <td>{item.price}</td>
                  <td> <Button onClick={() => dispatch(removeFromcart(item.id))} variant="outline-success btn rounded"><i class="fa-solid fa-trash"></i></Button></td>
                </tr>))}
              </tbody>
            </table>
          </div>


          : <div style={{ height: "100vh" }} className='d-flex flex-column justify-content-center align-items-center'>
            <img height={'300px'} src="https://cdn.dribbble.com/users/68238/screenshots/5613387/cart.gif" alt="no image" />
            <h4>Your Cart is empty</h4>
            <button className='btn btn-sucess rounded mt-3'><Link style={{ textDecoration: "none", color: 'white' }} to={"/"}>Back to home</Link></button>
          </div>
        }
        <div class="card me-5 d-flex justify-content-center " style={{ width: '18rem' }}>
          <div class="card-body">
            <h2 class="card-title text-primary">Cart Summary</h2>
            <h6>total number of products:  <span className='text-primary fw-bolder fs-2 ms-3'>{cartArray.length}</span></h6>
            <h6>total number of price: <span className='text-primary fw-bolder fs-2 ms-3'>{total}</span> </h6>
            <button onClick={checkout} type="button" class="btn btn-success rounded">Check out</button>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart