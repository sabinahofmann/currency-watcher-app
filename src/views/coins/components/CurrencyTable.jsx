import React from 'react';
import { Table, CardBody, Card }  from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { MainPagination } from '../../../components';


const TableRow = ({row}) => (
    <tr>
        <th scope="row" key={'rank1'}>{row.rank}</th>
        <td key={'smybol2'}>{row.symbol}</td>
        <td key={'price3'}>{row.price}</td>
        <td key={'rank3'}>{row.market_cap}</td>
        <td key={'rank4'}>{row.volume_24h}</td>
        <td key={'rank5'}>{row.max_supply}</td>
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
                                    return <TableRow row={row} key={i}/>
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

