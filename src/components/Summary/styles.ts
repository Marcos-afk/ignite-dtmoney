import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

interface BackgroundColorProps {
  variant?: 'green';
}

export const Card = styled.div<BackgroundColorProps>`
  background: ${({ theme, variant }) => css`
    ${variant === 'green' ? theme['green-500'] : theme['gray-600']}
  `};


  border-radius:  6px;
  padding: 2rem;


   header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme['gray-300']};
  }


  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
