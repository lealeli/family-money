import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5 rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    a: {
        textDecoration: `none`,
        color: `black`,
    }
}

function GoodItem({good}) {
    const {removeGood} = useContext(Context)

    return (
        <li style={styles.li}>
            <span>{good.tag.join(', ')}</span>
            <span>{good.price}</span>
            <span>{good.date}</span>
            <span>{good.comment}</span>

            <button onClick={() => {removeGood(good.id)}}>&times;</button>
        </li>
    )
}

GoodItem.propTypes = {
    good: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default GoodItem
