import React, { Component } from 'react';

class HpContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            characters:[]
        }

        //bind
    }

    render(){
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