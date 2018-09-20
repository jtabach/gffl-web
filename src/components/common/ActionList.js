import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import styles from './ActionList.scss';

class ActionList extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    buttonType: PropTypes.string.isRequired
  };

  handleClickOutside = evt => {
    this.props.onHandleClickOutside(this.props.buttonType);
  };

  render() {
    const { children } = this.props;

    return (
      <div styleName="actions">
        <ul styleName="actions__list">
          {children.length === 1 ? (
            this.props.children.map(child => {
              return (
                <li styleName="actions__list--item" key={Math.random()}>
                  {child}
                </li>
              );
            })
          ) : (
            <li styleName="actions__list--item" key={Math.random()}>
              {children}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default onClickOutside(CSSModules(ActionList, styles));
