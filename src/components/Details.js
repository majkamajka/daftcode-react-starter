import React from 'react';

import launch_site from '../assets/launch_site.json';
import launch from '../assets/launch.json';
import rocket from '../assets/rocket.json';

class Details extends React.Component {

  renderDetailsItem = (title, value) => {
    const value1 = value;
    return (
      <p className="details-spec__item">
        <span className="details-spec__item details-spec__item--lighter">{ title }:</span>
        &nbsp;{ value1 }
      </p>
    );
  }

  render() {
    const {
      name,
      company,
      height,
      diameter,
      mass,
      first_flight,
      country,
      success_rate_pct,
      cost_per_launch,
      description,
    } = rocket;
    const { full_name, location, details } = launch_site;
    
    return (
      <div className="details">
        <div className="details__box">
          <h1 className="details__heading basic basic--semibold">DETAILS</h1>
          <p className="details__text basic">
            { launch.details }
          </p>
        </div>

        <div className="details__box">
          <h1 className="details__heading basic basic--semibold">ROCKET</h1>
          <div className="details__spec">
            <div className="details-spec__column">
              { this.renderDetailsItem('NAME', name) }
              { this.renderDetailsItem('COMPANY', company) }
              <p className="details-spec__item">
                <span className="details-spec__item details-spec__item--lighter">HEIGHT:</span>
                &nbsp;{ height.meters }M / { height.feet }FT
              </p>
              <p className="details-spec__item">
                <span className="details-spec__item details-spec__item--lighter">DIAMETER:</span>
                &nbsp;{ diameter.meters }M / { diameter.feet }FT
              </p>
              <p className="details-spec__item">
                <span className="details-spec__item details-spec__item--lighter">MASS:</span>
                &nbsp;{ mass.kg }KG / { mass.lb }LB
              </p>
            </div>
            <div className="details-spec__column">
              { this.renderDetailsItem('FIRST FLIGHT', first_flight) }
              { this.renderDetailsItem('COUNTRY', country) }
              <p className="details-spec__item">
                <span className="details-spec__item details-spec__item--lighter">SUCCESS RATE:</span>
                &nbsp;{ success_rate_pct }%
              </p>
              { this.renderDetailsItem('COST PER LAUNCH', cost_per_launch) }
            </div>
          </div>
          <p className="details__text basic">
            { description }
          </p>
        </div>

        <div className="details__box">
          <h1 className="details__heading basic basic--semibold">LAUNCH PAD</h1>
          <div className="details__spec">
            <div className="details-spec__column">
              { this.renderDetailsItem('NAME', full_name) }
            </div>
            <div className="details-spec__column">
              <p className="details-spec__item">
                <span className="details-spec__item details-spec__item--lighter">LOCATION:</span>
                &nbsp;{ location.name.toUpperCase() }, { location.region.toUpperCase() }
              </p>
            </div>
          </div>  
          <p className="details__text basic">
            { details }
          </p>
        </div>

      </div>
    );
  }
}

export default Details;
