import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import NextLaunch from '../components/NextLaunch';
import Details from '../components/Details';
import Links from '../components/Links';
import Footer from '../components/Footer';

class LaunchDetails extends React.Component {
  static propTypes = {
    launch: PropTypes.object.isRequired,
    launchSite: PropTypes.object.isRequired,
    rocket: PropTypes.object.isRequired,
  }

  render() {
    const { launch, launchSite, rocket } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="launch-details">
          <div className="container launch-details__container">
            <NextLaunch launch={ launch } />
            <Details
              launch={ launch }
              launchSite={ launchSite }
              rocket={ rocket }
            />
          </div>
        </div>
        <Links launch={ launch } />
        <Footer />
      </React.Fragment>
    );
  }
}

export default LaunchDetails;
