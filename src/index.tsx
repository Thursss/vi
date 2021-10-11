import React from 'react';
import ReactDOM from 'react-dom';
import { initEChartPlugin } from 'z-chart';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import 'z-ui/build/index.css';
import './style/index.scss';

// 初始化eachrt插件
initEChartPlugin();

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
