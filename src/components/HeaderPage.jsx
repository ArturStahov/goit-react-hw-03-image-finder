import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  padding: 50px 0px 20px;
  width: 100%;
  background-color: grey;
`;

export default function HeaderPage({ children }) {
  return (
    <Header id="page-header">
      <nav>{children}</nav>
    </Header>
  );
}
