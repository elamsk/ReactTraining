import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Posts extends React.Component {

    constructor(props){
        super(props);
        this.state = {Posts:[]}
    }

    componentDidMount(){
    let apromise = axios.get("https://jsonplaceholder.typicode.com/posts");
    apromise.then(
    (response)=>{
        console.log('response', response.data);
        this.setState({Posts: response.data});
   
    },(error)=>{
        console.log('error', error);
    })
    }

renderPostsList(){
    if (this.state.Posts) {
      return (
        <ul>
          {this.state.Posts.map((post,i) => <li key={i}><Link to="/PostDetails">{post.title}</Link></li>)}
        </ul>
      )
    }
    return <p>Loading tasks...</p>
   };

    render(){
        let allpost = this.state.Posts.map(p => <li key={p.id}><Link to={'/PostDetails/'+p.id}>{p.title}</Link></li>)
       return <React.Fragment>
        <div className="jumbotron">
        <h2>All Post</h2>
        </div>
        <ul>
            {/* {this.renderPostsList()} */}
            {allpost}
        </ul>
        </React.Fragment>
    }
}