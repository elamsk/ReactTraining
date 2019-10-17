import React from 'react';

export default class LifeCycle extends React.Component {

    constructor(props,refs) {
        super(props);
        console.log("within constructor ");
        this.state = {compname: ""}
    }

    UNSAFE_componentWillMount() {
        console.log("within componentWillMount ");
    }

    //Page load
    componentDidMount() {
        console.log("within componentDidMount ");
        console.log(this.refs.txtComp);
    }

    // stop uncessaey re-render 
    shouldComponentUpdate() {
        console.log("within shouldComponentUpdate ");
        var compvalue = this.refs.txtComp.value;
        console.log(compvalue);
        console.log(compvalue.length);
if (compvalue.length > 3 ){
    return true;
}
        
        return false;// bizlogic
    }

    UNSAFE_componentWillUpdate() {
        console.log("within componentWillUpdate ");
    }

    componentDidUpdate() {
        console.log("within componentDidUpdate ");

    }

    // it will called when we deleting the dom
    componentWillUnmount() {
        console.log("within componentWillUnmount ");
        console.log("Any clean up code ");
    }

    ChangeHandler() {
        // change the innerhtml of h2
        console.log("within ChangeHandler ");

        console.log(this.refs.txtComp.value);
        this.setState({compname: this.refs.txtComp.value});
    }
    render() {

        console.log("within render ");
        console.log(this.state.compname);
        return <div>
            Company Name: <input type = "text"
        ref = "txtComp"
        onChange = {this.ChangeHandler.bind(this)}></input>
         <h2>{this.state.compname}</h2></div>;
    }
}