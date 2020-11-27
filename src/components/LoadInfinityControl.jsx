import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckboxWrap = styled.label`
  width: max-content;
  display: block;
  margin: 0 auto;
`;
const Checkbox = styled.input`
  width: 17px;
  height: 17px;
`;
const CheckboxTitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: green;
  margin-right: 5px;
`;

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
