import React from 'react';


const NasaCard = props => {
    return (
        <li className="nasa-card">
            <img src={props.url} />
            <h2>{props.title}</h2>
            <p>{props.date} </p>
            <p>{props.explanation} </p>
            <p>© {props.copyright} </p>
        </li>
    )
}

export default NasaCard
