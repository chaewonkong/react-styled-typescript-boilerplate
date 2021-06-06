import styled from 'styled-components';

import { TextProps } from '@/interfaces';

export const TitleMedium = styled.h2<Partial<TextProps>>`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 71px;

  color: ${({ color }) => color};
  display: flex;
  align-items: center;
`;
