import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  margin-top: ${({ theme }) => theme.spacing[3]};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`;
