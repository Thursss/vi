import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface TotalProps {
  title: string;
  value: string | number;
  total?: ReactNode;
}

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
  .chart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
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

const Total: FC<TotalProps> = (props) => {
  const { title, value, children, total } = props;
  return (
    <div className="total-wrapper">
      <StyleTotal className="total-sales">
        <div className="title">{title}</div>
        <div className="value">{value}</div>
        <div className="chart">{children}</div>
        <div className="line"></div>
        {total && <div className="total">{total}</div>}
      </StyleTotal>
    </div>
  );
};

export default Total;
