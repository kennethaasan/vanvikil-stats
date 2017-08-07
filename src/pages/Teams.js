// @flow

import type { Players } from '../types';

import React, { Component } from 'react';
import { page } from '../hocs';

type Props = {
  feeds: {
    players?: Players,
  },
};

class Teams extends Component<void, Props, void> {
  render() {
    const { feeds } = this.props;
    const { players } = feeds;

    return (
      <div>
        <h1>
          {'A-lag'}
        </h1>
        <h1>
          {'B-lag'}
        </h1>
        {JSON.stringify(players)}
      </div>
    );
  }
}

export default page({
  nav: true,
  feeds: {
    players: {
      feed: 'players',
      required: true,
    },
  },
})(Teams);
