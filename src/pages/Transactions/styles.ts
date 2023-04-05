import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

`;

interface PriceColorProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceColorProps>`
  white-space: nowrap;
  color: ${({ theme, variant }) => css`
    ${variant === 'income' ? theme['green-300'] : theme['red-300']}
  `};

`;
