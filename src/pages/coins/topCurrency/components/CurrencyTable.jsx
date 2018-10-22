import React from 'react';
import { Table, CardBody, Card }  from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MainPagination } from '../../../../components';


const TableRow = ({row, unit}) => (
    <tr>
        <th scope="row" key={'rank1'}>{row.rank}</th>
        <td key={'smybol2'}>{row.symbol}</td>
        <td key={'price3'}>{new Intl.NumberFormat('en-US',{style: 'currency', currency: `${unit}`}).format(row.price)}</td>
        <td key={'rank3'}>{new Intl.NumberFormat('en-US',{style: 'currency', currency: `${unit}`}).format(row.market_cap)}</td>
        <td key={'rank4'}>{new Intl.NumberFormat('en-US',{style: 'currency', currency: `${unit}`}).format(row.volume_24h)}</td>
        <td key={'rank5'}>{new Intl.NumberFormat().format(row.max_supply)} {row.symbol}</td>
        <td key={'rank6'} className={row.change_24h > 0 ? 'text-success' : 'text-danger'}>{row.change_24h} %</td>
    </tr>
)

function CurrencyTable(props) {
    return  (
        <div>
            <Card>
                <CardBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price <FontAwesomeIcon icon={props.convert} /></th>
                                <th>Market Cap</th>
                                <th>Volume (24h)</th>
                                <th>Max Supply</th>
                                <th>Change (24h)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.coins
                                .slice(props.currentPage * props.pageSize, (props.currentPage + 1) * props.pageSize)
                                .map((row, i) => {
                                    return <TableRow row={row} unit={props.unit} key={i}/>
                            })}
                        </tbody>
                    </Table>
                    <MainPagination 
                        currentPage={props.currentPage}
                        totalCount={props.totalCount}
                        pageSize={props.pageSize}
                        onCurrentPageChange={props.onClick}
                    />
                </CardBody>
            </Card>
        </div>
    );
}

export default CurrencyTable;

