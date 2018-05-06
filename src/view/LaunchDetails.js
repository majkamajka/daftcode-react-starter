import React from 'react';
import PropTypes from 'prop-types';
import Fragments from 'react';
import Header from '../components/Header';
import NextLaunch from '../components/NextLaunch';
import Details from '../components/Details';
import Links from '../components/Links';
import Footer from '../components/Footer';

class LaunchDetails extends React.Component {
  static propTypes = {
    // from: PropTypes.number.isRequired,
    //to: PropTypes.number.isRequired,
  }

  state = {
    
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="launch-details">
          <div className="container launch-details__container">
            <NextLaunch />
            <Details />
          </div>
        </div>
        <Links />
        <Footer />
      </React.Fragment>
    );
  }
}

export default LaunchDetails;
