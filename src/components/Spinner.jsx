import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styled from 'styled-components';

const SpinnerBlock = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export default function Spinner() {
  return (
    <SpinnerBlock>
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    </SpinnerBlock>
  );
}
