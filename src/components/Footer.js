import React from 'react';
import PropTypes from 'prop-types';

class Footer extends React.Component {
  static propTypes = {
    // from: PropTypes.number.isRequired,
    //to: PropTypes.number.isRequired,
  }

  state = {
    
  };

  render() {
    return (
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__social">
            <p>FOLLOW SPACEX</p>
            <span>|</span>
            <ul className="footer__social-list">
              <li className="footer__social-list-item">TWITTER</li>
              <li className="footer__social-list-item">YOUTUBE</li>
              <li className="footer__social-list-item">FLICKR</li>
              <li className="footer__social-list-item">INSTSAGRAM</li>
            </ul>
          </div>
          <p>2018 SPACE EXPLORATION TECHNOLOGIES CORP.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
