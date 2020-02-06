import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from './img/p3.png'

class Comment extends Component {
  render() {
    return (
      <div>
        <h2><img src={Logo} alt='Logo' width='20' height='20' /> &nbsp; {this.props.comment.name}</h2>
        <p>{this.props.comment.message}</p>
        <p>{this.props.comment.editing}</p>
        <button class="btn btn-danger" onClick={() => this.props.dispatch({ type: 'EDIT_COMMENT', id: this.props.comment.id })}>Edit</button>&nbsp;
        <button class="btn btn-success" onClick={() => this.props.dispatch({ type: 'DELETE_COMMENT', id: this.props.comment.id })}>Delete</button>

      </div>
    )
  }

}


export default connect()(Comment);
