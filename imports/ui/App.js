import React from 'react';

import List from './List.js';
import ListItem from './ListItem.js';

import { list } from './fixtures.js';

export default () => {
  return (
    <div>
      <div>
        <h1>Creating a Leaderboard for FreeCodeCamp</h1>
        <List list={list}/>
      </div>
    </div>
  );
}
