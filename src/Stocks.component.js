import React from 'react';
import axios from 'axios';

export class Stocks extends React.Component{

    constructor(props){
        super(props);
        this.state = {stocks:[]}
    }

    componentDidMount(){
        console.log('response');

    let apromise = axios.get("https://api.data.gov.in/resource/4240f820-b78d-4f42-bd12-dfab151282f5?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=200");
    apromise.then(
    (response)=>{
        console.log('response', response.data);
        this.setState({stocks: response.data});
   
    },(error)=>{
        console.log('error', error);
    })
    }

    render(){
        return <h1>Stocks</h1>
    }
}