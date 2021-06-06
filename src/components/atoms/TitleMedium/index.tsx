import React from 'react';

import { COLORS } from '@/constants';
import { TextProps } from '@/interfaces';

import * as S from './styled';

const TitleMedium = ({
  color = COLORS.BASIC_BLACK,
  text,
}: TextProps) => (
  <S.TitleMedium color={ color }>{ text }</S.TitleMedium>
);

export default TitleMedium;
