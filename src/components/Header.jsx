import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

// const home = document.querySelector('#home');
// const skills = document.querySelector('#skills');
// const portfolio = document.querySelector('#portfolio');


// if(home){
//   home.addEventListener('click',function(){
//     home.classList.add('active');
//     skills.classList.remove('active');
//     portfolio.classList.remove('active');
//   }, false);
// }

// if(skills){
//   skills.addEventListener('click',function(){
//     home.classList.remove('active');
//     skills.classList.add('active');
//     portfolio.classList.remove('active');
//   }, false);
// }

// if(portfolio){
//   portfolio.addEventListener('click',function(){
//     home.classList.remove('active');
//     skills.classList.remove('active');
//     portfolio.classList.add('active');
//   }, false);
// }


const Header = () => {
  return (
    <ul className="nav nav-pills justify-content-center mt-5">
      <Link to = "/" className="logo-list">
          <img className="logo" src={logo} alt="ポートフォリオサイトのロゴマーク" />
      </Link>

      <Link to = "/" className="nav-item pill" style={{ textDecoration: 'none' }}>
        <li id = "home" className="nav-link active">HOME</li>
      </Link>

      <Link to = "/skills" className="nav-item pill" style={{ textDecoration: 'none' }}>
        <li id = "skills" className="nav-link">SKILLS</li>
      </Link>

      <Link to = "/Portfolio" className="nav-item pill" style={{ textDecoration: 'none' }}>
        <li id = "portfolio" className="nav-link">PORTFOLIO</li>
      </Link>

      <Link className="nav-item pill" style={{ textDecoration: 'none' }}>
        <a href="https://www.facebook.com/kazuya.tomoda.988/" className="nav-link">SNS</a>
      </Link>
    </ul>
  )
}

export default Header;