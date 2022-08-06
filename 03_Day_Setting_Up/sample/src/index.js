// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// To get the root element from the HTML document
import html5 from './img/html5.png'
import css3 from './img/css.svg'
import js from './img/javascript.svg'
import react from './img/react.png'
// JSX element, header
const exer1 = (
  <div>
    <h1>Exercise 1</h1>
    <h1>Front End Technologies</h1>
    <div className = 'images'>
      <img src={html5} alt='HTML5' />
      <img src={css3} alt='CSS3' />
      <img src={js} alt='Javascript' />
      <img src={react} alt='React' />
    </div>
  </div>
)
const exer2 = (
  <div className="exer2">
    <h1>Exercise 2</h1>
    
    <div className='exer2-wrapper'>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates</p>

      <div className="form">
      <input placeholder='First name'></input>
      <input placeholder='Last name'></input>
      <input placeholder='Email'></input>
      </div>
      <button>Submit</button>
    </div>
  </div>
)
const app = (
  <div className='app'>
    {exer1}
    {exer2}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)