import React from 'react';
import styled from 'styled-components';

const StyleDashboard = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: auto;
`;

function DatavReport() {
  return (
    <StyleDashboard className="dashboard">
      <h1>data-report</h1>
    </StyleDashboard>
  );
}

export default DatavReport;
