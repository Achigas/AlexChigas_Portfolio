import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebook, faLinkedin, faInstagram, faGithub)

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      // var networks= this.props.data.social.map(function(network){
      //   return <li key={network.name}><a href={network.url}><FontAwesomeIcon icon={{network.className}}/></a></li>
// })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               <li key="facebook">
                  <a href="https://www.facebook.com/achigas">
                     <FontAwesomeIcon icon={faFacebook}/>
                  </a>
               </li>
               <li key="linkedin">
                  <a href="https://www.linkedin.com/in/alex-chigas-0443b816/">
                     <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
               </li>
               <li key="instagram">
                  <a href="https://www.instagram.com/alexchigas">
                     <FontAwesomeIcon icon={faInstagram}/>
                  </a>
               </li>
               <li key="github">
                  <a href="https://www.github.com/Achigas">
                     <FontAwesomeIcon icon={faGithub}/>
                  </a>
               </li>
          
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
