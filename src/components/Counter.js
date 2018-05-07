import React from 'react';
import PropTypes from 'prop-types';
import date from 'date-fns';

class Counter extends React.Component {
  static propTypes = {
    launch: PropTypes.string.isRequired,
  }
// czasu brak :(
  render() {
    return (
      <p className="next-launch__counter basic">{date.distanceInWordsToNow(this.props.launch, { addSuffix: true })} TO START</p>
    );
  }
}

export default Counter;
