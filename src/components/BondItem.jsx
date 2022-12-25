import React from 'react'
import CardStyles from './BondItem.module.css';
import { Button, Card, CardGroup, Container,Col, ListGroup, Row, Table } from 'react-bootstrap';
import logo2 from '../assets/imgs/logo2.png';
import favourite from '../assets/imgs/favourite.png';

const BondItem = ({id,title,name,minimum,percentage_per_year,interest_payment,opening,closing_date,settlemen,due_date}) => {
  return (<Container > 
    {/* <Row lg={4}> */}
      {/* <Col> */}
      <Card className={`${CardStyles.card}`}>
        {/* top  */}
        <div className='d-flex flex-row justify-content-between'>
        <div>{/* logo  */} <img src={logo2} alt='' className={`${CardStyles.logo2}`}/></div>
          <div className={`${CardStyles.badgeCont}`}> <h3 className='mt-1'>{title}</h3></div>
        </div>
        {/* desc  */}
        
          <div className={`${CardStyles.desc}`}>
            <h2>{name}</h2>
            <p>Due {due_date}</p>
          </div>
     
        {/* body  */}
        <div>
          <Table borderless className={`${CardStyles.table}`}>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td className={`${CardStyles.muted}`}>Minimum</td>
                <td className=' d-flex justify-content-end'>&#8358; {minimum}</td>
              </tr>
              <tr>
                <td className={`${CardStyles.muted}`}>% per year</td> 
                <td className=' d-flex justify-content-end'>{percentage_per_year}</td>
            </tr>        
              <tr>
                <td className={`${CardStyles.muted}`}>interest payment</td> 
                <td className=' d-flex justify-content-end'>{interest_payment}</td>
            </tr>
            <tr>
                <td className={`${CardStyles.muted}`}>opening</td>   
                <td className=' d-flex justify-content-end'>{opening}</td>
              </tr>
              <tr>              
                <td className={`${CardStyles.muted}`}>Closing date</td>
                <td className=' d-flex justify-content-end'>{closing_date}</td>
              </tr>
              <tr>
                <td className={`${CardStyles.muted}`}>Settlement</td>
                <td className=' d-flex justify-content-end'>{settlemen}</td>
            </tr>
            </tbody>
          </Table>
          {/* footer  */}
          <div className='d-flex justify-content-center'>
          <Button variant='success' className='button me-3'>Add to Cart </Button>
          <img src={favourite } alt='favourite' className={`${CardStyles.fav}`} />
          </div>
        </div>
        </Card> 
        {/* </Col> */}
      {/* // </Row> */}
    </Container>
  )
}

export default BondItem