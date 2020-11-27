import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

const ButtonScTop = styled.a`
  display: block;
  position: fixed;
  right: 5px;
  bottom: 10px;
  background-color: transparent;
  cursor: pointer;
  &:hover .icon {
    color: green;
  }
`;

export default function ButtonScrollTop() {
  return (
    <ButtonScTop href="#page-header">
      <FontAwesomeIcon
        className="icon"
        icon={faChevronCircleUp}
        color="grey"
        size="3x"
      />
    </ButtonScTop>
  );
}
