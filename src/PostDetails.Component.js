import React from 'react';

// export class PostDetails extends React.Component {    
//     render(){

//         const {match} = this.props;
//         //console.log(match.params.id)
//         console.log(this.props.match.params.id);
//         return <h1>Post Details for {match.params.id }</h1>
//     }
// }

var PostDetails=(props)=>{

    return <h1>Post Details for {props.match.params.id}</h1>
}

export default PostDetails