import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';
import moment from 'moment/moment.js';
import DateTime from 'react-datetime';


const InputField = ({ rowKey, row, save }) => {

    let input = <Input key={rowKey} type='text' name={rowKey} defaultValue={row[rowKey]} onChange={e => save(e, row)}/>;

    if(row[rowKey] instanceof Date){                
        input = <DateTime
                    onChange={e => save(new Date(e._d), row)}
                    defaultValue={moment(row[rowKey]).format('YYYY-MM-DD HH:mm')}
                    dateFormat='YYYY-MM-DD'
                    timeFormat='HH:mm'
                    inputProps={{ id: 'date', type: 'datetime-local', name: 'date' }}
                    utc={true}
                    displayTimeZone
                    closeOnSelect
                />;
    } 

    if(rowKey === 'id'){
        input = <Input key={rowKey} type='text' name={rowKey} value={row[rowKey]} readOnly/>;
    }

    if(typeof row[rowKey] === 'number' && rowKey !== 'id'){
        input = <Input key={rowKey} type='text' name={rowKey} defaultValue={new Intl.NumberFormat().format(row[rowKey])} onChange={e => save(e, row)}/>;
    }

    return input;
};

InputField.propTypes = {
    rowKey: PropTypes.string,
    row: PropTypes.object,
    save: PropTypes.func.isRequired,
};

export default InputField;