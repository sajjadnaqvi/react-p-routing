import React from 'react';

class Service extends React.Component{
    
    render(){
        return(
            <h1>this is a{this.props.name} page</h1>
        );
    }
}

export default Service;