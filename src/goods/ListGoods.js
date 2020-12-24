import React from 'react';
import PropTypes from 'prop-types';
import GoodItem from './Good';

function ListGoods(props) {
    return (
        <ul>
            {props.good.map(item => {
                return <GoodItem good={item} key={item.id} onClick={props.onChangeGood}/>
            })}
        </ul>
    )
}

ListGoods.propTypes = {
    good: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeGood: PropTypes.func.isRequired
}
export default ListGoods

