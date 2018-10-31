import React, { Component } from 'react';
import HpList from '../components/hp_list';
import HpSelect from '../components/hp_select';

class HpContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            characters:[],
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    request(url){
        fetch(url)
        .then(response => response.json())
        .then(ourData => this.setState({characters: ourData}))
        .catch(error => console.log(error))
    }

    componentDidMount(){
        this.request(this.props.characterList[0].url)
       
    }

    handleSelect(url) {
        this.request(url);
    }

    render(){
        console.log("characters: ", this.state.characters);
        return( 
            <div>
                <HpSelect characterList={this.props.characterList} handleSelect = {this.handleSelect} />
                <HpList characters={this.state.characters}/>
            </div>
        )

    }

}

export default HpContainer;