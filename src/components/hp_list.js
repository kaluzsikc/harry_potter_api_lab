import React from 'react';
import HpCharacter from './hp_character';

const HpList = (props) => {

    const characters = props.characters.map((char, index) => {
        return <HpCharacter details ={char} key= {index} />
    })

    return(
        <div className="hp-list">
           {characters}
        </div>
    )
}

export default HpList; 