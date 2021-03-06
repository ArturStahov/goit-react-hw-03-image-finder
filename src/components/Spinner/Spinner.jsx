import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { SpinnerBlock } from './StyledComponent';

export default function Spinner() {
  return (
    <SpinnerBlock>
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    </SpinnerBlock>
  );
}
