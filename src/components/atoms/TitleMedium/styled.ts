import styled from 'styled-components';

interface TitleMediumProps {
  color: string;
}

export const TitleMedium = styled.h2<TitleMediumProps>`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 71px;

  color: ${({ color }) => color};
  display: flex;
  align-items: center;
`;
