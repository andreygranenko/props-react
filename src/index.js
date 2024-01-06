import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Button} from "./App";
import {styled} from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import App2 from "./App2";
import App3 from "./App3";

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App3/>
    <BigButton as='a'>Отправить отчет</BigButton>
  </React.StrictMode>
);
