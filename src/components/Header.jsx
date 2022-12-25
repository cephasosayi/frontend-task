import React from 'react';
import HeaderStyles from './Header.module.css';
import cart from '../assets/imgs/cart.png';
import logo from '../assets/imgs/LOGO.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Nav, Navbar,Image, Button, ButtonGroup } from 'react-bootstrap';

const Header = () => {
  const { amount } = useSelector((state) => state.cart);

    return (
        <Container fluid>
        <Navbar expand='lg' className={`${HeaderStyles.navbar}`}>
            <Container>
                <Navbar.Brand className=''>
                        <Link to='/' >
                            <Image src={logo} alt='logo' className={`${HeaderStyles.brand}`} />
                        </Link>
                    </Navbar.Brand>
                <Navbar.Toggle arial-controls='navbar-nav' />
                    <Navbar.Collapse id='navbar-nav'>
                    <Nav className={`${HeaderStyles.nav} ms-auto me-auto`} >
                            {/* <Link to='/bond_offer'> */}
                            <Nav.Link as={Link} to='bond_offer' className={`${HeaderStyles.navLink}`}>
                                Bond Offer</Nav.Link>
                        {/* </Link> */}
                        <Nav.Link className={`${HeaderStyles.navLink}`}>ODM</Nav.Link>
                        <Nav.Link className={`${HeaderStyles.navLink}`}>Features</Nav.Link>
                    </Nav>
                    <div className='d-flex ms-lg-auto  '>
                        <ButtonGroup className={` g-5 ${HeaderStyles.btns}`}>
                            <Button variant='success' className='button2  '>Login</Button>
                                
                                <Link to='signup'>                                
                                 <Button variant='success' className={`${HeaderStyles.signup} button3 ms-lg-3`}>Sign Up</Button> </Link>
                               
                                
                        </ButtonGroup>
                    </div>
                    </Navbar.Collapse>
                    <div>
                    <Link to='cart'>
                            <Image src={cart} alt='cart' className={`${HeaderStyles.cart} `} />
                            <div className='amount-container'>
                            <p className='total-amount'>
                            
                            {amount}
                            </p>
                            </div>
                                </Link>
                    </div>
            </Container>                            
            </Navbar>
            </Container>
            
      
  )
}

export default Header