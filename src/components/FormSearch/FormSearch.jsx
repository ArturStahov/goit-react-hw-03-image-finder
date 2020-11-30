import React, { Component } from 'react';
import { Form, Input } from './StyledComponent';
import PropTypes from 'prop-types';

export default class FormSearch extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleInput = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handlerForm = e => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.props.onSearch(inputValue);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handlerForm}>
        <Input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInput}
          placeholder="Search images and photos"
        />
      </Form>
    );
  }
}
