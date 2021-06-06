import styled from 'styled-components';

import { TextProps } from '@/interfaces';

export const TextLarge = styled.p<Partial<TextProps>>`
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 43px;

display: flex;
align-items: center;
text-align: center;

color: ${({ color }) => color};
`;
