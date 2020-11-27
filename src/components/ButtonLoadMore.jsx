import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: block;
  padding: 20px 10px;
  max-width: 250px;
  margin: 0 auto;
  border: none;
  border-radius: 0.5rem;
  background-color: green;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
`;

export default function ButtonLoadMore({ onLoad }) {
  return (
    <Button type="button" onClick={() => onLoad()}>
      LoadMore
    </Button>
  );
}

ButtonLoadMore.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
