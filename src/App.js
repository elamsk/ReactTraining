import React from 'react';
import logo from './logo.svg';
import './App.css';
import  CourseList from './courseList.component'

class App extends React.Component
{
  
   
 render()
 {
   //return <h1>{this.props.msg} </h1>
   return <div>
    <CourseList />
   </div>
 }
}

export default App;
