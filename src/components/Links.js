import React from 'react';
import PropTypes from 'prop-types';

import launch from '../assets/launch.json';

class Links extends React.Component {
  renderLink = (title, link) => <a className="links__link" href={ link }>{ title }</a>;

  render() {
    const { links } = launch;
    return (
      <div className="links">
        <h1 className="links__heading heading">MISSION LINKS</h1>
        <div className="links__links-wrapper">
          { this.renderLink('REDDIT CAMPAIGN', links.reddit_campaign) }
          { this.renderLink('PRESSKIT', links.presskit) }
          { this.renderLink('MISSION VIDEO', links.video_link) }
        </div>
      </div>
    );
  }
}

export default Links;
