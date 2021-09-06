import React, { FC } from 'react';
import styled from 'styled-components';
import cx from 'classnames';

interface CardProps {
  bordered?: boolean;
  hoverable?: boolean;
  title?: string;
}

const Card: FC<CardProps> = (props) => {
  const { bordered = false, hoverable = false, title, children } = props;
  const className = cx('z-card');
  return <div className={className}>{children}</div>;
};

export default Card;
