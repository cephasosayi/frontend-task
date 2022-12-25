import React from 'react'
import { Card, CardGroup, Container, Col,Row } from 'react-bootstrap';
import BondOfferStyles from './BondOffer.module.css';
import BondsData  from '../assets/dummy';
import BondItem from './BondItem';


const BondOffer = () => {

  return (
      <Container fluid className={`${BondOfferStyles.container}`}>
      <Row xs={1} sm={1} md={2} lg={2} xl={3} xxl={4} className='mt-5 '>
          {
            BondsData.map((bonds) => (
                // <CardGroup>
                <Col className='gap-5 d-flex py-2'>
                <BondItem key={bonds.id}
                  {...bonds}

                />
                </Col>
                  // </CardGroup>
            ))
          }
          </Row>          
    </Container>
  )
}

export default BondOffer