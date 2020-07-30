import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from "./pages/cadastro/video";

import {BrowserRouter, Switch, Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/"  component={Home} exact/>
      <Route component={() => <div>Erro 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

