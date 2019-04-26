import React from 'react';
import { pics } from './CharacterPic';

const Character = props => {
    return (
        <div className="character grid-3">
            <img src={props.pic.url} />
            <p>{props.profile.name}</p>
        </div>
    )
}

export default Character;