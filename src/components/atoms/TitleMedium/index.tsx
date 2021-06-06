import React from 'react';

import { COLORS } from '@/constants';

import * as S from './styled';

interface TitleMediumProps {
  color?: string;
  title: string;
}

const TitleMedium = ({
  color = COLORS.BASIC_BLACK,
  title,
}: TitleMediumProps) => (
  <S.TitleMedium color={ color }>{ title }</S.TitleMedium>
);

export default TitleMedium;
