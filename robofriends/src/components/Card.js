import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='Robo' height='200' width='250' />
            <div>
                <h2> {name} </h2>
                <p> {email} </p>
            </div>
        </div>
    );
}

export default Card;