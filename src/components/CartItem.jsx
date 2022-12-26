import React, {useState} from 'react'
import { Col, Container, Row , Card, Image, Button, ListGroup} from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import CartStyles from './CartItem.module.css';
import { removeItem, increase, decrease} from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import logo from '../assets/imgs/logo2.png'
import add from '../assets/imgs/add.png'
import remove from '../assets/imgs/remove.png'


const CartItem = ({ value, amount, id, img, name, }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Card className={`${CartStyles.cardcontainer} mb-3`} >
           <div className={`${CartStyles.card} d-flex flex-lg-row justify-content-between  `}>
            {/* check box  */}
            <div className='justify-content-center mt-auto mb-auto'>
              
              <FormCheckInput  className={`${CartStyles.customcheckbox }  btn-success`} />
            </div>
            {/* logo  */}
            <div  className='justify-content-center mt-auto mb-auto'>
              <Image src={logo} alt='' className={`${CartStyles.logo}`} />
            </div>
            
              {/* desc  */}
            <div  className='justify-content-center mt-auto mb-auto'>
              <h2 className={`${CartStyles.desc}`}>{name}</h2>
            </div>
            {/* buttons  */}

            <div  className='justify-content-center mt-auto mb-auto'>
              <Button
                variant='btn-outline-success'
                className='btn-outline-success'>
                Authorize
              </Button>

              <Button
                variant='btn-outline-danger'
                className='link-danger' onClick={() => dispatch(removeItem(id))}>
                delete
              </Button>
            </div>

            {/* value */}

            <div className={`${CartStyles.value}justify-content-center mt-auto mb-auto`}>
              <div className='me-auto d-flex'>
                <p className={`${CartStyles.valueDesc} fs-6 `}>Value(&#8358;)</p>
                
              </div>
              
              <ListGroup >
                <ListGroup.Item className={`${CartStyles.list} d-flex flex-lg-row justify-content-between mt-auto mb-auto`}>
                <p className=' '>
                {value}
                </p>
                
                  <Button
                  className={`${CartStyles.Cartbtn}`}
                      variant='outline' onClick={() => {
                        if (amount === 1) {
                          dispatch(removeItem( id));
                          return;
                        } 
                          dispatch(decrease({id}))
                        
                        
                        
                  }} >
                      <img
                        src={remove} alt=' '
                        className={`${CartStyles.amtbtn}`} />
                    </Button>
                  <p className='text-center fw-medium '>{amount} </p>
                <Button
                  className={`${CartStyles.Cartbtn} `}
                      variant='outline'onClick={() => { dispatch(increase({ id })) }}> <img
                  src={add} alt=' '
                  className={`${CartStyles.amtbtn}`} /> </Button>

                </ListGroup.Item>
              </ListGroup>

              </div>
            </div>
            
          </Card>        
        </Col>
      </Row>      
    </Container>
  )
}

export default CartItem;