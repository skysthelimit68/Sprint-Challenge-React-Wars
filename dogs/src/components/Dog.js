import React from 'react';
import "./Dog.css";

const Dog = props => {
    return (
        <div className="dog-wrapper">
            <img src={props.dog} />
        </div>
    )
}

export default Dog;