import React from 'react';
import { pics } from './CharacterPic';

const Character = props => {
    return (
        <div className="character grid-3">
            <img src={props.pic.url !== "" ? props.pic.url : "https://www.thinkgeek.com/images/products/additional/large/jnsm_sw_gold_logo_tee_dd.jpg"} />
            <p>{props.profile.name}</p>
        </div>
    )
}

export default Character;