import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './LeagueButtons.scss';

import Card from '../../common/Card';
import LinkButton from '../../common/LinkButton';

class LeagueButtons extends Component {
  render() {
    const { match } = this.props;

    return (
      <Card style="dark">
        <div styleName="card-content">
          <div>
            <LinkButton
              path={`${match.url}/createLeague`}
              label="Create League"
              style="green"
            />
          </div>
          <div>
            <LinkButton
              path={`${match.url}/joinLeague`}
              label="Join League"
              style="primary-inverse"
            />
          </div>
        </div>
      </Card>
    );
  }
}

export default CSSModules(LeagueButtons, styles);
