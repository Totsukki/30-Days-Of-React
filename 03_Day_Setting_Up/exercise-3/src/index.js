import React from 'react'
import ReactDOM from 'react-dom'
import cat from './img/OrangeJuice.jpg'


const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
const skillsFormatted = skills.map(skill => <li>{skill}</li>)
const color = {
  color: '#32CD32',
}

const header = (
  <header>
    <img src={cat} alt="Cat" />
    <h3>Orange Juice <i style={color}class="fa-solid fa-circle-check"></i></h3>
    <p>Senior developer, Meow</p>
  </header>
)

const main = (
  <main>
    <h3>Skills</h3>
    <ul>
      {skillsFormatted}
    </ul>
  </main>
)

const footer =(
  <footer>
    <p><i class="fa-solid fa-calendar"></i> Joined on: <b>July 30, 2022</b></p>
  </footer>
)
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById('root')
    // we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)