import React from 'react';
import Character from './Character';

const CharacterList = props => {
    return (
        <div>
            {props.characters.map( elem => (
            <Character key={elem.created} profile={elem} />
            ))}
        </div>
        
    )
}

export default CharacterList;