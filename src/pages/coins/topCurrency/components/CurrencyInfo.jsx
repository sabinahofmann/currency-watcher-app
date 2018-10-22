import React from 'react';
import { Button, Card, CardText, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import 'moment-timezone';

function CurrencyInfo(props) {
    return  (
        <div>
            <Card>
                 <CardBody>
                <CardText>
                    Last update:  
                        <Moment unix>{props.lastUpdate}</Moment>
                    </CardText>
                    <Button size="sm" className="mr-1 w-25" onClick={props.onClick} value="EUR">
                        <FontAwesomeIcon icon='euro-sign'/>
                    </Button>
                    <Button size="sm" className="mr-1 w-25" onClick={props.onClick} value="USD">
                        <FontAwesomeIcon icon='dollar-sign'/>
                    </Button>
                    <Button size="sm" className="mr-0 w-25" onClick={props.onClick} value="BTC">
                        <FontAwesomeIcon icon={['fab', 'btc']}/>
                    </Button>
                </CardBody>
            </Card >
        </div>
    );
}

export default CurrencyInfo;

