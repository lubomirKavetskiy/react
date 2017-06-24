import React, {Component} from 'react';

export default  class ComponentSecond extends Component {
    constructor(props){
        super(props);

        console.log("constructor");
    };

    componentWillMount(){
        console.log('componentWillMount');
    };

    componentDidMount(){
        console.log('componentDidMount');
    };

    componentWillUnmount(){
        console.log('componentWillUnmount');
    };

    render(){
        console.log('render');

        return(
            <div style={{background: 'yellow'}}>
                <h3>ComponentSecond</h3>
                <p>{ this.props.textuk }</p>
            </div>
        );
    };
};