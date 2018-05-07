import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__go-back-wrapper">
          <img
            src={require('../assets/arrow.svg')}
            alt="go back"
            className="header__arrow"
          />
          <span className="header__arrow-line" />
          <span className="header__back title">GO BACK</span>
        </div>
        <img
          alt="spacex"
          className="header__logo"
          src={require('../assets/logo-spacex.svg')}
        />
        <div className="header__placeholder" />
      </div>
    </div>
  );
}

export default Header;
