import React from 'react';
import { 
    Button, Form, Input, CustomInput, Row, Col, Label, FormGroup,
    UncontrolledCollapse, CardBody, Card 
} from 'reactstrap';
import DateTime from 'react-datetime';


const CoinForm = (props) => (
    <div className="coinForm">
        <Button color="primary" id="toggler">
            Add Coin/Token
        </Button>
        <UncontrolledCollapse toggler="#toggler">
            <Card>
                <CardBody>
                    <Form onSubmit={props.onSubmit}>
                    <Row form>
                    <Col xs="11">
                        <Row>
                            <Col xs="5">
                                <Row>
                                    <Col xs="8">
                                        <FormGroup>
                                            <Label for="date">Date</Label>
                                            <DateTime
                                                dateFormat='YYYY-MM-DD'
                                                timeFormat='HH:mm'
                                                inputProps={{ id: 'date', type: 'datetime-local' }}
                                                utc={true}
                                                closeOnSelect/>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="4">                            
                                        <FormGroup>
                                            <Label for="coin_token">Coin/Token</Label>
                                            <CustomInput type="select" id="coin_token" name="coin_token" required>
                                                <option value="">Select</option>
                                                <option>BTC</option>
                                                <option>ETH</option>
                                                <option>XRP</option>
                                                <option>NEM</option>
                                            </CustomInput>
                                        </FormGroup> 
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="7">
                            <Row>
                            <Col xs="3">
                                <FormGroup>
                                    <Label for="amount">Amount</Label>
                                    <Input type="text" name="amount" id="amount" required/>
                                </FormGroup>  
                            </Col>
                            <Col xs="3">
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="number" name="exchange" id="exchange" step="0.01" min="0" required/>
                                </FormGroup>
                            </Col>
                            <Col xs="3">
                                <FormGroup>
                                    <Label for="purchase_price">Purchase price</Label>
                                    <Input type="number" name="purchase_price" id="purchase_price" step="0.01" min="0" required/>
                                </FormGroup>  
                            </Col>
                            <Col xs="3">    
                                <FormGroup>
                                    <Label for="unit">Unit</Label>
                                    <CustomInput type="select" id="unit" name="unit" required>
                                        <option value="">Select</option>
                                        <option>BTC</option>
                                        <option>EUR</option>
                                        <option>USD</option>
                                    </CustomInput>
                                </FormGroup>
                            </Col>
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="1">
                        <div className="h-50 d-inline-block"></div>
                        <Button color="primary" className="mt-4">Add</Button> 
                    </Col>
                    </Row>
                    </Form>
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>
);

export default CoinForm;
