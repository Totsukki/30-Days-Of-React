import React from 'react';
import ReactDOM from 'react-dom';
import html5 from './img/html5.png'
import css3 from './img/css.svg'
import js from './img/javascript.svg'
import react from './img/react.png'
const Header = () => (
  <header>
  <h1>Front End technologies</h1>
  </header>
)

const Main = () => (
  <main>
    <img src={html5} alt="HTML" />
    <img src={css3} alt="CSS" />
    <img src={js} alt="Javascript" />
    <img src={react} alt="React" />
  </main>
)

const app = (
    <div className = 'app' >
      <Header />
      <Main />
    </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)