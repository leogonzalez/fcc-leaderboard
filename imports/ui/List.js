import React from 'react';
import ListItem from './ListItem.js';

export default class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: props.list
    }
  }

  clickHandler(e){
    if (e.target.className==='last') {
      this.setState({
        list: this.props.list.sort((a,b) => {
          return (a.recent > b.recent ? -1 : +1);
        })
      });

    } else if (e.target.className==='recent') {
      this.setState({
        list: this.props.list.sort((a,b) => {
          return (a.alltime > b.alltime ? -1 : +1);
        })
      });
    }
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th onClick={this.clickHandler.bind(this)} className='last'>Last 30</th>
            <th onClick={this.clickHandler.bind(this)} className='recent'>All Time </th>
          </tr>
        </thead>
        <tbody>
        {this.state.list.map(function (ite) {
          return (<ListItem
                    key={ite.username}
                    username= {ite.username}
                    last= {ite.recent}
                    alltime= {ite.alltime}
                  />);
          }
        )}
        </tbody>
      </table>
    );
  }
}

ListItem.propTypes = {
  list: React.PropTypes.array
}
