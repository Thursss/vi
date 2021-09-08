import React from 'react';
import styled from 'styled-components';
import { Row, Col, Card } from '../../z-ui';

import Total from './component/Total';
import TotalNumber from './component/TotalNumber';
import pluginFactory from '../../plugin/singleton';

function DatavReport() {
  const lineChart = pluginFactory().get('line');

  return (
    <StyleDashboard className="dashboard">
      <div className="overview-wrapper">
        <Row>
          <Col span={6}>
            <Card>
              <Total
                title="累计销售额"
                value="¥ 52,344,571"
                total={
                  <TotalNumber text="昨日销售额">¥ 30,000,000</TotalNumber>
                }
              >
                <div className="chart">
                  <TotalNumber text="日同比" label="up">
                    37.01%
                  </TotalNumber>
                  <TotalNumber text="月同比" label="down">
                    77.17%
                  </TotalNumber>
                </div>
              </Total>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Total
                title="累计订单量"
                value="2,631,187"
                total={<TotalNumber text="昨日订单量"> 20,000,000</TotalNumber>}
              >
                {lineChart.chart}
              </Total>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Total
                title="今日交易用户数"
                value="308,826"
                total={<TotalNumber text="昨日订单量"> 20,000,000</TotalNumber>}
              >
                <span>chart</span>
              </Total>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Total
                title="累计用户数"
                value="1,292,362"
                total={
                  <div className="total-container">
                    <StyleTotalNumber text="日同比" label="up">
                      37.01%
                    </StyleTotalNumber>
                    <StyleTotalNumber text="月同比" label="down">
                      77.17%
                    </StyleTotalNumber>
                  </div>
                }
              >
                <span>chart</span>
              </Total>
            </Card>
          </Col>
        </Row>
      </div>
    </StyleDashboard>
  );
}

const StyleDashboard = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: auto;
  .overview-wrapper {
    .chart {
      height: 50px;
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
    .total-container {
      display: flex;
    }
  }
`;

const StyleTotalNumber = styled(TotalNumber)`
  margin-right: 10px;
`;

export default DatavReport;
