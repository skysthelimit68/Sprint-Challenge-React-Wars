import React from 'react';
import Character from './Character';

const CharacterList = props => {
    
    return (
        <div className="characterList" >
            {props.characters.map( (elem , index)  => (
                
            <Character key={elem.created} profile={elem} pic={props.pics[ (props.picMult) + index]} />
            ))}
        </div>
    )
}

export default CharacterList;