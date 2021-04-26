import React, { Component } from 'react';

//APP
export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    <div className="overview-container">
      <h1>{this.props.title}</h1>
      <p>{this.props.description} <br />
      <em>dates: </em>{this.props.date} <br/>
      <em>category: </em>{this.props.category}</p>
    </div>
  )};
}