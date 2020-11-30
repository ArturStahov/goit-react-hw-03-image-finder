import React, { Component } from 'react';
import { CheckboxWrap, Checkbox, CheckboxTitle } from './StyledComponent';
import PropTypes from 'prop-types';

export default class LoadInfinityControl extends Component {
  static propTypes = {
    onCheckChange: PropTypes.func.isRequired,
  };

  state = {
    isInfinityLoad: false,
  };

  handleCheckbox = e => {
    const { checked } = e.target;
    this.setState({
      isInfinityLoad: checked,
    });
    this.props.onCheckChange(checked);
  };

  render() {
    const { isInfinityLoad } = this.state;
    return (
      <CheckboxWrap>
        <CheckboxTitle>use infinity scroll:</CheckboxTitle>
        <Checkbox
          type="checkbox"
          checked={isInfinityLoad}
          onChange={this.handleCheckbox}
        />
      </CheckboxWrap>
    );
  }
}
