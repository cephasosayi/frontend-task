import React from 'react'
import { Button, Container, Image, Row, Col, ButtonGroup } from 'react-bootstrap'
import HeroStyles from './Hero.module.css';
import heroimg from '../assets/imgs/Component3.png'
import play from '../assets/imgs/play.png'
import right from '../assets/imgs/right.svg'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
      <Container fluid className={`${HeroStyles.container}`}>
          <Row lg={2} sm={1} md={2} xs={1}>
              {/* left column  */}
              <Col xs={12} sm={12} md={6} lg={6} className={`${HeroStyles.col1}`}>
                  <h1 className={`${HeroStyles.headerText}`}>Subscribe to FGN Saving Bond</h1>
                  <p className={`${HeroStyles.desc}`}>Loan and get paid with interest</p>

                  <ButtonGroup className={`${HeroStyles.herobtngroup} gap-3`}>
                      <Link to='/bond_offer'>
                          <Button className='button' variant='success' >Get Started
                          <Image src={right} alt='' className={`${HeroStyles.righticon} ms-2`} />
                          </Button>
                    </Link>
                      <Button className={`${HeroStyles.playbtn}`} variant='success' >
                          <Image src={play} alt='play' className={`${HeroStyles.playicon} me-2 ms-3 `} /> See Video
                      </Button>
                  </ButtonGroup>
                  

              </Col>
              
              {/* right column  */}

              <Col xs={12} sm={12} md={6} lg={6}>
                  <div className={`${HeroStyles.heroimgContainer}`}>
                      <Image src={heroimg} alt='' className={`${HeroStyles.heroimg}`} />
                  </div>
                  
            </Col>

          </Row>          
      </Container>
  )
}

export default Hero