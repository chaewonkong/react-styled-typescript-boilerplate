import styled from 'styled-components';

interface TextMediumProps {
  color: string;
}

export const TextMedium = styled.p<TextMediumProps>`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;

color: ${({ color }) => color};
display: flex;
align-items: center;
`;
