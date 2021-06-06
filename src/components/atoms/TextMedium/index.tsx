import React from 'react';

import * as S from './styled';

interface TextMediumProps {
  text: string;
  color?: string;
}

const TextMedium = ({
  text,
  color = '#2f2f2f',
} :TextMediumProps) => (
  <S.TextMedium color={ color }>{ text }</S.TextMedium>
);

export default TextMedium;
