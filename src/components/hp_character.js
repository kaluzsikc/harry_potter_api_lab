import React from 'react';

const HpCharacter = (props) => {

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.substr(1);
    }

    const name = props.details.name;
    const species = capitalizeFirstLetter(props.details.species);
    const gender = capitalizeFirstLetter(props.details.gender);
    const img = props.details.image;
    const dob= props.details.yearOfBirth;
    const house = props.details.house;
    const ancestry = capitalizeFirstLetter(props.details.ancestry);
    const patronus = capitalizeFirstLetter(props.details.patronus);
    const actor = props.details.actor;

    const alive = props.details.alive ? "Alive" : "Dead";

    let position = "None";
    const student = props.details.hogwartsStudent; 
    const staff = props.details.hogwartsStaff;
    if(student){
        position = "Student";
    }
    if (staff) {
        position = "Staff";
    }
   
    let wandWood = capitalizeFirstLetter(props.details.wand.wood);
    let wandCore = capitalizeFirstLetter(props.details.wand.core);
    let wand = "No wand";
    if (wandWood){
        if (!wandCore) {
            wandCore = "No wand core"
        }
        wand = wandWood + ` (${wandCore})`
    }
   
   

    return(
        <div>
            <img src={img} alt="character imagine" width="100px" height="150px" />   
            <ul>
                <li><h2>Name: {name}</h2></li>
                <li>Species: {species}</li>
                <li>Gendre: {gender}</li>
                <li>DOB: {dob}</li>
                <li>House: {house}</li>
                <li>Ancestry: {ancestry}</li>
                <li>Wand: {wand}</li>
                <li>Patronus: {patronus}</li>
                <li>Alive or Dead: {alive}</li>
                <li>Actor: {actor}</li>
                <li>School Position: {position}</li>
            </ul>
        </div>
    )
} 

export default HpCharacter;