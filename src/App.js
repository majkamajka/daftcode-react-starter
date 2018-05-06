import { hot } from 'react-hot-loader';
import * as React from 'react';
import LaunchDetails from './view/LaunchDetails';

import './styles/main.scss';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LaunchDetails
        
      />
    );
  }
}

export default hot(module)(App);

// launch={launch}
//         launchSite={launchSite}
//         rocket={rocket}