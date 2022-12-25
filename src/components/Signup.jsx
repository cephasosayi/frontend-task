
import React from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap'
import SignupStyles from './Signup.module.css';

const Signup = () => {
  return (
      <Container className={`${SignupStyles.container} `}>
          <Col xs={12} sm={12} md={6} lg={4} >
              <div className={`${SignupStyles.desc} mt-lg-5`}>
                  <h2>Sign up</h2>
                  <p>Stop spending, start investing</p>
          </div>
          
          <div>
                  <Form className={`${SignupStyles.form} gap-3`}>
                  <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" className={`${SignupStyles.forminput}`} placeholder="Enter your First Name" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" className={`${SignupStyles.forminput}`} placeholder="Enter your Last Name" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" className={`${SignupStyles.forminput}`} placeholder="Enter your email" required />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupUserName">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" className={`${SignupStyles.forminput}`} placeholder="Choose username" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className={`${SignupStyles.forminput}`} placeholder="Password"  required/>
                      </Form.Group>
                      <Form.Check type='checkbox' label='By continuing, your agree to the terms and onditions' id="success"/>
                  
                      <Button variant="dark" size='lg' type="submit" className='d-block w-100 h-50'>
                         Signup
                      </Button>
                  </Form>
              </div>
            </Col>
    </Container>
  )
}

export default Signup