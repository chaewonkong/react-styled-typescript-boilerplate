import React from 'react';

import * as S from './styled';

interface Props {
  onRetry: <T, P = Record<string, unknown>>(params?: T) => P | void;
}

export const ErrorView = ({ onRetry }: Props) => (<S.Wrapper>
  <S.ErrorText>Ah..Something went wrong</S.ErrorText>
  <S.RetryButton onClick={ onRetry }>Retry</S.RetryButton>
</S.Wrapper>
);
