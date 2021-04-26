import React, { Component } from 'react';
import Overview from './overview';

//APP
export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="post-container">
      <Overview title={this.props.title} 
                description={this.props.description} 
                date={this.props.date}
                category={this.props.category}>         
      </Overview>
      <hr />
      {this.props.rendering}
    </div>
  )};
}