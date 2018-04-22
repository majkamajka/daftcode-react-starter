import React from 'react';
import PropTypes from 'prop-types';

import './Counter.scss';

class Counter extends React.Component {
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  }

  state = {
    from: this.props.from,
    to: this.props.to,
    interval: null,
    timerOn: true,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  stopTimer = (from, to) => {
    clearInterval(this.state.interval);
    this.setState({
      timerOn: false,
    });
  }

  startTimer = () => {
    if (this.state.from === this.state.to) return;
    const timer = setInterval(() => {
      const { from, to } = this.state;
      from === to + 1 ? this.stopTimer(from, to) : null;
      this.setState({
        from: from - 1,
      });
    }, 1000);
    this.setState({
      interval: timer,
      timerOn: true,
    });
  }

  handleTimerClick = () => {
    const { from, to, timerOn } = this.state;
    timerOn ? this.stopTimer(from, to) : this.startTimer();
  }

  renderTimer() {
    const { from } = this.state;
    const rawMinutes = from < 60 ? 0 : Math.floor(from / 60);
    const rawSeconds = from - rawMinutes * 60;
    const minutes = rawMinutes < 10 ? `0${rawMinutes}` : rawMinutes;
    const seconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds;
    return <p>{ minutes } : { seconds }</p>;
  }

  render() {
    const styles = {
      color: '#009500',
      fontFamily: 'VT323',
      fontSize: '36px',
      border: '1px dashed #009500',
      padding: '30px',
      display: 'inline-block',
      cursor: 'pointer',
    };
    return (
      <h1 onClick={ this.handleTimerClick } style={ styles }>
        { this.renderTimer() }
      </h1>
    );
  }
}

export default Counter;
