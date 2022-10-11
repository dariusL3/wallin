import styled from 'styled-components/native';
import React from 'react';
import { RefreshControlProps } from 'react-native';

const StyledRefreshControl = styled.RefreshControl`
  tint-color: ${({ theme }) => theme.contrast};
`;

const RefreshControl = (props: RefreshControlProps) => {
  return <StyledRefreshControl {...props} />;
};

export default RefreshControl;
