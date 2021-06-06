import styled from 'styled-components';

import { TextProps } from '@/interfaces';

export const TextMedium = styled.p<Partial<TextProps>>`
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;

color: ${({ color }) => color};
display: flex;
align-items: center;
`;
