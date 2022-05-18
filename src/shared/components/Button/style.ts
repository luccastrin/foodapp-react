import styled from 'styled-components';

export const ButtonDefault = styled.button`
  padding: 20px;
  font-size: 18px;
  background-color: ${({ color }) => color};
  display: inline-block;
  color: white;
  border: none;
  cursor: pointer;
`;