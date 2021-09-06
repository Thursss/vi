import React from 'react';
import styled from 'styled-components';

import { Row, Col, Card } from '../../z-ui/index';
import Total from './component/Total';

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
          {[{}, {}, {}, {}].map((item, i) => (
            <Col key={i} span={6}>
              <Card>
                <Total
                  title="累计销售额"
                  value="¥ 52,344,571"
                  total={
                    <>
                      昨日销售额
                      <span data-v-e38c7be8="" className="emphasis">
                        ¥ 30,000,000
                      </span>
                    </>
                  }
                >
                  <span>chart</span>
                </Total>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </StyleDashboard>
  );
}

export default DatavReport;
