import React, { Component } from 'react';
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Coins</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                      <Col sm="6">
                        <Card body>
                          <CardTitle>Stocks</CardTitle>
                          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                          <Button>Go somewhere</Button>
                        </Card>
                      </Col>
                    </Row>        
                </Container>
            </div>
        )
    }
}

export default Home;

