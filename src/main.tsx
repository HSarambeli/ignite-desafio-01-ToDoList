import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css';

import {Header} from './components/Header';
import {AppWrapper} from './components/AppWrapper'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <AppWrapper />
  </React.StrictMode>,
)
