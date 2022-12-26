import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap';
import CartStyles from './Cart.module.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import left from '../assets/imgs/left.png'


const Cart = () => {
  const {cartItems, amount, total} = useSelector((store) => store.cart)
  if (amount < 1) {
    return (
        <section >
            <header className='d-flex flex-column mt-5 me-auto ms-auto'>
                <h2 className='text-center'>Your Cart</h2>
                <h4 className='text-center'>is currently empty</h4>
          <Link to='/bond_offer'>
            <p className={`${CartStyles.back}`}>
              <img src={left} alt='' /> Back to Shop </p>
          </Link>
            </header>
        </section>
    )
}
  return (<Container fluid>
      {/* <Row> */}
        {
      cartItems.map((item) => {
        return <CartItem key={item.id} {...item} className='mb-3' />
      })
        }
      {/* </Row> */}
    <Container fluid className='d-flex  justify-content-center mt-lg-4'>
      <Card className={`${CartStyles.card} `}>
    <div className='d-flex flex-row justify-content-between '>
      {/* first sub section  */}
      <div>
        <div className=' d-flex flex-lg-row mb-lg-4 justify-content-between'>
          <p>Fees + Taxes</p> 
          <p> &#8358; 200 </p>
        </div>

        <div>
          <p className={`${CartStyles.totaldesc}`}>This is 730 days savings bonds, you have  fixed income</p>
        </div>
      </div>
      <div className={`${CartStyles.buycont} d-flex flex-column ms-auto`}>
        <p className='ms-5'>Total Buy </p> 
        <h4 className='me-4 mt-0 p-0 m-0 '>&#8358;{total.toFixed(2)} </h4> 
      </div>
        </div>
        </Card>
    </Container>
     {/* btn  */}
     <div className='d-flex flex-row ms-lg-auto mt-lg-5'>
          <Button variant='success' className='button ms-auto'>Check Out</Button>
        </div>
    </Container>
  )
}

export default Cart;