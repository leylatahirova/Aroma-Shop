import React from 'react';
import "../styles/SaleBanner.sass";
import { Container, Row } from 'react-bootstrap';

export default function SaleBanner() {
  return (
    <Container>
        <Row>
            <div className='offer-text'>
                <h3>Up To 50% Off</h3>
                <h4>Winter Sale</h4>
                <p>Him she'd let them sixth saw light</p>
                <button>Shop Now</button>
            </div>
        </Row>
    </Container>
  )
}
