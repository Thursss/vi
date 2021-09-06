import React from 'react';
import styled from 'styled-components';

import { Row, Col, Card } from '../../z-ui/index';

const StyleDashboard = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: auto;
  .overview-wrapper {
  }
`;

function DatavReport() {
  return (
    <StyleDashboard className="dashboard">
      <div className="overview-wrapper">
        <Row>
          <Col span={6}>
            <Card>1</Card>
          </Col>
          <Col span={6}>2</Col>
          <Col span={6}>3</Col>
          <Col span={6}>4</Col>
        </Row>
      </div>
    </StyleDashboard>
  );
}

export default DatavReport;
