import React from 'react';

import List from './List.js';
import ListItem from './ListItem.js';

export default () => {
  return (
    <div>
      <div className='page-content'>
        <h1 className='header'>Creating a Leaderboard for FreeCodeCamp</h1>
        <h3>
          Code available at <a href='https://github.com/leogonzalez/fcc-leaderboard'>
           https://github.com/leogonzalez/fcc-leaderboard</a>

          <p>User stories: </p>
          <p>User Story: I can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days.</p>
          <p>User Story: I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.</p>
          <p>User Story: I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total.</p>
          <h4>Click on the headers!</h4>
        </h3>
        <List className='table-container'/>
      </div>
    </div>
  );
}
