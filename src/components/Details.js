import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component {
  static propTypes = {
    launch: PropTypes.object.isRequired,
    launchSite: PropTypes.object.isRequired,
    rocket: PropTypes.object.isRequired,
  }

  renderDetailsItem = (title, value) => {
    return (
      <p className="details-spec__item">
        <span className="details-spec__item details-spec__item--lighter">{ title }:</span>
        &nbsp;{ value }
        {/* nie działa mi tutaj toUpperCase :( */}
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
    } = this.props.rocket;
    const { full_name, location, details } = this.props.launchSite;
    
    return (
      <div className="details">
        <div className="details__box">
          <h1 className="details__heading basic basic--semibold">DETAILS</h1>
          <p className="details__text basic">
            { this.props.launch.details }
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
