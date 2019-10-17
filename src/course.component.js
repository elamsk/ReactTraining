import React from 'react';

export  default class Course extends React.Component
{

    constructor(props){ 
        super(props);
        this.state = {count:this.props.Courses.Like};
    }

    IncrementLikes()
    {
        this.setState({count:this.state.count+1});
    }
 render()
 {
     return <React.Fragment>
         <div className='col-md-4'>
        <h2>{this.props.Courses.Name}</h2> 
        <button onClick={this.props.ParentHandler.bind(this,this.props.Courses.Id)}>delete</button>
        <img src={this.props.Courses.imageurl} height="100px" width="100px" alt="imagelogo"></img> <br />
        <span ><b>Duration :</b></span> { this.props.Courses.duration}<br />
        <b>Location :</b> { this.props.Courses.location} <br />
        <b>Rating :</b> { this.props.Courses.rating } <br />
        <b>Price :</b> { this.props.Courses.price } <br />
        <button className="btn btn-primary btn-lg" onClick={this.IncrementLikes.bind(this)}>
            <span className="glyphicon glyphicon-thumbs-up"> { this.state.count}</span></button>
            </div>
     </React.Fragment>
 }
}