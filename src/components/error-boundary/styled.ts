import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 24px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
`

export const RetryButton = styled.div`
  width: 100px;
  color: white;
  margin: 0 auto;
  background: red;
  font-size: 16px;
  text-align: center;
  padding: 16px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  &:active {
    background-color: rgba(255, 0, 0, 0.7);
  }
`
