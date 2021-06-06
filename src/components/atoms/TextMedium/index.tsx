import React from 'react';

import { COLORS } from '@/constants';
import { TextProps } from '@/interfaces';

import * as S from './styled';

const TextMedium = ({
  text,
  color = COLORS.BASIC_BLACK,
} :TextProps) => (
  <S.TextMedium color={ color }>{ text }</S.TextMedium>
);

export default TextMedium;
