import React from 'react';

import { COLORS } from '@/constants';

import * as S from './styled';

interface TextMediumProps {
  text: string;
  color?: string;
}

const TextMedium = ({
  text,
  color = COLORS.BASIC_BLACK,
} :TextMediumProps) => (
  <S.TextMedium color={ color }>{ text }</S.TextMedium>
);

export default TextMedium;
