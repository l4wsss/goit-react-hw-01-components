import styled from 'styled-components';

export const TransactionTable = styled.table `
  width: 800px;
  text-align: center;
  margin: 0 auto 0 auto;
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.71);
  /* border-radius: 10px; */
`;

export const TransactionHead = styled.thead `
  line-height: 50px;
  background-color: LightBlue;
`;

export const TransactionTh = styled.th `
  color: white;
  font-size: 18px;
  text-transform: uppercase;
`;

export const TransactionBody = styled.tbody `
  line-height: 50px;
`;

export const TransactionTr = styled.tr `
  color: gray;
  background-color: ${props => (props.$even ? `white` : `tomato`)};

  td {
    color: grey;
    font-size: 18px;
    text-align: center;
    padding: 10px 0;
    line-height: 20px;
  }
`;