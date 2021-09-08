import React, { FC, ReactNode, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface TotalProps {
  title: string;
  value: string | number;
  total?: ReactNode;
}

const Total: FC<TotalProps & HTMLAttributes<HTMLElement>> = (props) => {
  const { title, value, children, total } = props;
  return (
    <div className="total-wrapper">
      <StyleTotal className="total-sales">
        <div className="title">{title}</div>
        <div className="value">{value}</div>
        <>{children}</>
        <div className="line"></div>
        {total && <div className="total">{total}</div>}
      </StyleTotal>
    </div>
  );
};

const StyleTotal = styled.div`
  .title {
    font-size: 12px;
    color: #999;
  }
  .value {
    font-size: 25px;
    color: #000;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  .line {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
  .total {
    color: #666;
    font-size: 12px;
  }
`;

export default Total;
