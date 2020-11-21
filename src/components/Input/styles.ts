import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  hasError: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
  border-width: 2px;
  border-color: #232129;

  ${({ hasError }) => hasError && css`border-color: #c53030`}

  ${({ isFocused }) => isFocused && css`border-color: #ff9000`}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;

export const ErrorContainer = styled.View`
  width: 100%;
  padding: 0 16px;
  margin-top: -16px;
  flex-direction: row;
  align-items: center;
`;

export const ErrorText = styled.TextInput`
  flex: 1;
  color: #c53030;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;
