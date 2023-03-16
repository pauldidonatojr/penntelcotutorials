import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../utils/data'
import logo from './logo.svg'
import styled from 'styled-components'
import PennTelco from './Penntelco.js'
import { Link } from 'react-router-dom'
const Container = styled.div`
 display: flex;
 flex-direction: column;

 background-color: lightblue;
`

const HeaderContainer = styled.div`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 padding: 10px;
 background-color: #ffffff;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 position: sticky;
 top: 0;
 z-index: 999;
`

const Logo = styled.div`
 height: 25px;
 font-size: 1.4rem;
 font-weight: bold;
 text-transform: uppercase;
 letter-spacing: 2px;
 margin-right: 10rem;

 color: #333333;
 text-decoration: none;
 @media screen and (min-width: 800px) {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #333333;
  text-decoration: none;
 }
`

const NavContainer = styled.div`
 display: grid;
 justify-content: center;
 align-items: center;

 nav {
  background: var(--clr-white);
  box-shadow: var(--light-shadow);
 }
 .nav-header {
  display: flex;
  align-items: center;
  justify-content: center;

 background-color: lightblue;
  width: 45vh;
 }
 .nav-toggle {
  font-size: 1.5rem;
  color: var(--clr-primary-5);
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
 }
 .nav-toggle:hover {
  color: var(--clr-primary-1);
  transform: rotate(90deg);
 }
 .logo {
  height: 40px;
 }
 .links a {
  color: var(--clr-grey-3);
  font-size: 1rem;
  display: block;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);

  transition: var(--transition);
 }
 .links a:hover {
  background: var(--clr-primary-8);
  color: var(--clr-primary-5);
  padding-left: 1.5rem;
 }
 .social-icons {
  display: none;
 }
 .links-container {
  height: 0;
  overflow: hidden;
  transition: var(--transition);
  background-color: lightblue;
 }
 .show-container {
  height: 10rem;
 }

 @media screen and (min-width: 800px) {
  .nav-center {

   background-color: beige;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 1rem;
  }
  .nav-header {
   padding: 0;
  
   display: flex;
   justify-content: center;
   align-items: center;

  }
  .nav-toggle {
   display: none;
  }
  .links-container {
   height: auto !important;
  }
  .links {
   display: flex;
  }
  .links a {
   padding: 0;
   margin: 0 0.5rem;
  }
  .links a:hover {
   padding: 0;
   background: transparent;
  }
  .social-icons {
   display: flex;
  }
  .social-icons a {
   margin: 0 0.5rem;
   color: var(--clr-primary-5);
   transition: var(--transition);
  }
  .social-icons a:hover {
   color: var(--clr-primary-7);
  }
 }

 @media screen and (min-width: 800px) {
  width: 50vh;

  .links {
   display: flex;
  }
 }
`


const Main = styled.main`
 height: 100%;
 width: 100%;
 background-color: lightgray;
 overflow-y: scroll;
`

const Section = styled.section`
 height: 100%;
 width: 100%;
 background-color: lightgray;
 overflow-y: scroll;
`
const Article = styled.article`
 background-color: #f8f8f8;

 height: 30vh;
 width: 100%;
`
const Footer = styled.footer`
 background-color: #222;
 color: #fff;

 text-align: center;
 bottom: 0;
 width: 100%;
`

function Hero() {
 const [showLinks, setShowLinks] = useState(false)
 const linksContainerRef = useRef(null)
 const linksRef = useRef(null)
 const toggleLinks = () => {
  setShowLinks(!showLinks)
 }
 useEffect(() => {
  const linksHeight = linksRef.current.getBoundingClientRect().height
  if (showLinks) {
   linksContainerRef.current.style.height = `${linksHeight}px`
  } else {
   linksContainerRef.current.style.height = '0px'
  }
 }, [showLinks])

 //  const toggleMenu = () => {
 //   setShowMenu(!showMenu)
 //  }
 return (
  <Container>
   <HeaderContainer>
    <NavContainer>
     <nav>
      <div className="nav-center">
       <div className="nav-header">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <Logo href="/">
         PENN<strong>TELCO</strong>
        </Logo>

        <button className="nav-toggle" onClick={toggleLinks}>
                                 <FaBars style={{fontSize: '1.5rem'}} />
        </button>
       </div>
       <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
         {links.map((link) => {
          const { id, url, text } = link
          return (
           <li key={id}>
            <a href={url}>{text}</a>
           </li>
          )
         })}
        </ul>
       </div>
       <ul className="social-icons">
        {social.map((socialIcon) => {
         const { id, url, icon } = socialIcon
         return (
          <li key={id}>
           <a href={url}>{icon}</a>
          </li>
         )
        })}
       </ul>
      </div>
     </nav>
    </NavContainer>
   </HeaderContainer>
   <Main>
    <PennTelco />
   </Main>

   {/* <Section>
    <h2>About Me</h2>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sunt voluptas
    ut temporibus aliquam esse quaerat voluptatum aliquid perferendis est,
    repellendus quia ea eveniet eos iusto ipsum deleniti. Tenetur, alias.
   </Section>
   {/*
   <Article>
    <h2>About Me</h2>
    <FetchPrice />
   </Article>
   <Article>
    <h2>About Me</h2>
    <LeverageCalculator />
   </Article> */}
   <Footer>
    <p>&copy; 2023 My Website</p>
   </Footer>
  </Container>
 )
}

export default Hero
