import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, city, address} = property;
    return (
        <div id={`card-${index}`} className="card" style={{display: 'inline-block', margin: '10px'}}>
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span><p className="location">
                    {city}<br />
                    {address}
                </p>
             
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;