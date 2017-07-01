import React from 'react';

import List from './List.js';
import ListItem from './ListItem.js';

export default () => {
  return (
    <div>
      <div>
        <h1>Creating a Leaderboard for FreeCodeCamp</h1>
        <h5>
          Code available at <a href='https://github.com/leogonzalez/fcc-leaderboard'>
           https://github.com/leogonzalez/fcc-leaderboard</a>
        </h5>
        <List/>
      </div>
    </div>
  );
}
