import React, { Component } from 'react'

//your code here
class Comment extends React.Component {
    render() {
      return (
        <div className="comment">
          {this.props.commentText}
        </div>
      )
    }
}

export default Comment