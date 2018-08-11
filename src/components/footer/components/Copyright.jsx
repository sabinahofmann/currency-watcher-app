import React from 'react';
import { Container } from 'reactstrap';

const Copyright = () => (
  <div className="footer-copyright">
    <Container fluid>
        &#169; Currency Ticker {new Date().getFullYear()}. All rights reserved.
    </Container>
  </div>
);

export default Copyright;