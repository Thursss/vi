import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <StyleApp className="App">
      <StyleCenter>Welcome to ZI</StyleCenter>
    </StyleApp>
  );
}

const StyleApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1fc8db;
  background-image: linear-gradient(
    141deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
`;
const StyleCenter = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 82px;
  color: #444;
`;
export default App;
