import React from 'react';

import { COLORS } from '@/constants';
import { TextProps } from '@/interfaces';

import * as S from './styled';

const TextLarge = ({
  color = COLORS.BASIC_BLACK,
  text,
}: TextProps) => (
  <S.TextLarge color={ color }>{ text }</S.TextLarge>
);

export default TextLarge;
