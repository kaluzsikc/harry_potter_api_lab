import React, { Component } from 'react';

class HpContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            characters:[],
            url: "http://hp-api.herokuapp.com/api/characters"
        }

        //bind
    }

    request(url){
        fetch(url)
        .then(response => response.json())
        .then(ourData => this.setState({characters: ourData}))
        .catch(error => console.log(error))
    }

    componentDidMount(){
        this.request(this.state.url)
       
    }

    render(){
        console.log(this.state.characters);
        return( 
            <div>
                <p>
                    Test Hp HpContainer
                </p>
            </div>
        )

    }

}

export default HpContainer;