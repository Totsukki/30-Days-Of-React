import React from 'react';
import ReactDOM from 'react-dom';
import cat from './img/OrangeJuice.jpg'
const hexColor = () =>{
  let hex = "1234567890abcdef"
  let str = '#'
  for(let i = 0; i<6;i++)
    str+=hex.charAt(Math.floor(Math.random()*hex.length))
  return str
}
const skills = ['HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask', 'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
const skillsFormatted = skills.map(skill => <li>{skill}</li>)
const color = {
  color: '#32CD32',
}

const Header = () =>(
  <header>
    <img src={cat} alt= 'Orange Juice'/>
    <h3>Orange Juice <i style={color}class="fa-solid fa-circle-check"></i></h3>
    <p>Senior developer, Meow</p>
    <h3>Skills</h3>
    <ul>
      {skillsFormatted}
    </ul>
    <p><i class="fa-solid fa-calendar"></i> Joined on: <b>July 30, 2022</b></p>
  </header>
)

const InputWrapper = () => (
  <div className='input-wrapper'>
    <input type="text" placeholder='First name'></input>
    &nbsp;
    <input type="text" placeholder='Last name'></input>
    &nbsp;
    <input type="text" placeholder='Email'></input>
  </div>
)

const Button = () =>(
  <button type='submit'>Submit</button>
)
const Footer = () => (
  <footer>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <InputWrapper />
      <br></br>
      <Button />
  </footer>
)

const li = []
for(let i=0; i<5; i++){
  let strColor = hexColor()
  let color = {background: strColor}
  li.push(<li style={color}>{strColor}</li>)
}
const Main = () => (
    <ul className='randColor'>
      {li}
    </ul>
)
const App = () => (
  <div className='app'>
    <Header/>
    <Main/>
    <Footer/>
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
