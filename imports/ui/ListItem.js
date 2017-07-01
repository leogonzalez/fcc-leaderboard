import React from 'react';

export default class ListItem extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.position}</td>
        <td>{this.props.username}</td>
        <td>{this.props.last}</td>
        <td>{this.props.alltime}</td>
      </tr>
    );
  }
}

ListItem.propTypes = {
  position: React.PropTypes.number.isRequired,
  username: React.PropTypes.string.isRequired ,
  last: React.PropTypes.number.isRequired,
  alltime: React.PropTypes.number.isRequired
}
