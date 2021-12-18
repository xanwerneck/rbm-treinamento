import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RMBTheme } from './themes/Theme';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContasAPagar from './components/ContasAPagar/ContasAPagar';
import Dashboard from './components/Dashboard/Dashboard';
import ContasAReceber from './components/ContasAReceber/ContasAReceber';
import Home from './components/Home/Home';
import { UserContext } from './helpers/UserContext';
import User from './models/User';

const UserLogged = new User(
  'Alexandre',
  'XXssAA',
  'Thiago@gmail.com'
)

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider
      theme={RMBTheme}
      >
        <BrowserRouter>
          <UserContext.Provider value={UserLogged} >
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="contasapagar">
                <Route index element={<ContasAPagar />} />
              </Route>
              <Route path="contasareceber">
                <Route index element={<ContasAReceber />} />
              </Route>
              <Route path="dashboard">
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider
      theme={RMBTheme}
      >
          <UserContext.Provider value={UserLogged} >
            <App/>
          </UserContext.Provider>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
