import React from 'react';

import List from './List.js';
import ListItem from './ListItem.js';

import {leaderboard } from '../api/fixtures.js';
import '../api/leaderboard.js';

// export default class App extends React.Compo




export default () => {
  return (
    <div>
      <div>
        <h1>Creating a Leaderboard for FreeCodeCamp</h1>
        <List list={leaderboard}/>
      </div>
    </div>
  );
}
