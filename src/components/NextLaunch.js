import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class NextLaunch extends React.Component {
  static propTypes = {
    launch: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="next-launch">
        <span className="next-launch__date basic basic--semibold">07 JULY 2018</span>
        <h1 className="next-launch__heading heading">IRIDUM NEXT 5 LAUNCH</h1>
        <Counter launch={ this.props.launch.launch_date_utc } />
        <img
          alt="rocket"
          className="next-launch__logo"
          src={ this.props.launch.links.mission_patch }
        />
      </div>
    );
  }
}

export default NextLaunch;
