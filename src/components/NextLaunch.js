import React from 'react';
import PropTypes from 'prop-types';

class NextLaunch extends React.Component {
  static propTypes = {
    // from: PropTypes.number.isRequired,
    //to: PropTypes.number.isRequired,
  }

  state = {
    
  };

  render() {
    return (
      <div className="next-launch">
        <span className="next-launch__date basic basic--semibold">07 JULY 2018</span>
        <h1 className="next-launch__heading heading">IRIDUM NEXT 5 LAUNCH</h1>
        <p className="next-launch__counter basic">counter TO START</p>
        <img src="" alt="rocket" />
{/* <hr />
        <p className="heading">HEADER 1234<br/>.heading<br/><br/></p>
        <p className="heading-small">HEADER 1234<br/>.heading-small<br/><br/></p>
        <p className="heading-small heading-small--semibold">HEADER 1234<br/>.heading-small heading-small--semibold<br/><br/></p>
        <p className="basic">HEADER 1234<br/>.basic<br/><br/></p>
        <p className="basic basic--semibold">HEADER 1234<br/>.basic basic--semibold<br/><br/></p> */}

      </div>
    );
  }
}

export default NextLaunch;
