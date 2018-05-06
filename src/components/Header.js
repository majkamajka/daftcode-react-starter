import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container header__container">
          <span className="header__back title">GO BACK</span>
          <img src="/arrow.png" alt="go back" />
          <img src="/src/assets/logo-spacex.svg" alt="spacex" />
        </div>
      </div>
    );
  }
}

export default Header;
