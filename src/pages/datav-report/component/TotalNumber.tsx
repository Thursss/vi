import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface TotalNumberProps {
  text?: string;
  number?: number | string;
  label?: 'up' | 'down' | 'left' | 'right';
}

const TotalNumber: FC<TotalNumberProps & HTMLAttributes<HTMLElement>> = ({
  text,
  number,
  label,
  children,
  ...restProps
}) => {
  return (
    <StyleSales className="sales" {...restProps}>
      {text && <div className="text">{text}</div>}
      <div className="number">{number ?? children}</div>
      {label && <div className={`increase ${label}`}></div>}
    </StyleSales>
  );
};

TotalNumber.defaultProps = {};

const StyleSales = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  .number {
    margin-left: 5px;
    font-weight: bold;
    color: #333;
  }
`;
export default TotalNumber;
