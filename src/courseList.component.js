import React from 'react';
import Course from './course.component';

export  default class CourseList extends React.Component{
    
    constructor(props){ 
        super(props);
        this.state = {
            Courses : [
        { Id:1, Name: 'React', duration: '10 Days', location: 'Hyderabad', rating: 5, imageurl: "https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0", price: 200, Like: 10 },
        { Id:2, Name: 'React1', duration: '11 Days', location: 'Hyderabad1', rating: 6, imageurl: "https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0", price: 300, Like: 11 },
        { Id:3, Name: 'React2', duration: '12 Days', location: 'Hyderabad2', rating: 7, imageurl: "https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0", price: 400, Like: 12 },
        { Id:4, Name: 'React3', duration: '12 Days', location: 'Hyderabad2', rating: 7, imageurl: "https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0", price: 400, Like: 12 },
        { Id:5, Name: 'React4', duration: '12 Days', location: 'Hyderabad2', rating: 7, imageurl: "https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0", price: 400, Like: 12 }
    ]
    }
}
    DeleteAcourse_parent(theId){
        console.log('inside parent');
        var newcourseList= this.state.Courses.filter(c=>c.Id!==theId);
        this.setState({Courses:newcourseList});
    }

 render() {
    var compoentInstancstobeCreated = this.state.Courses.map(c=> <Course  Courses={c} key={c.Id}
         ParentHandler={this.DeleteAcourse_parent.bind(this)} />)

     return <React.Fragment>
        <div className='jumbotron'>
        <h1>Online Course</h1>
        </div>
        <div className='row'>
           {compoentInstancstobeCreated}
           </div>
           </React.Fragment>
 }
}           