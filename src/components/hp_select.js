import React from 'react';

const HpSelect = props => {
    console.log(props.characterList)

    const handleChange = evt => {
        props.handleSelect(evt.target.value)
    }

    const selectOptions = props.characterList.map(option => {
        return <option value={option.url}>{option.name}</option>
    })

    return(
       <select id='hp-select' defaultvalue='default' onChange={handleChange} >
            <options disabled value="default">Select filter...</options>
            {selectOptions}
       </select>
    )
}

export default HpSelect;