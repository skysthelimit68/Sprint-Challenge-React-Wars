import React from 'react';
import Dog from "./Dog";

const DogList = props => {
    return (
        props.list.map(elem => (
            <Dog dog={elem}/>
        ))
        
    )
}

export default DogList;