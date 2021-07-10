import React from 'react';
import Route from "react-router-dom";
import Card from './components/Portfolio';
import { NavLink } from "react-router-dom";
import './App.css';
import ScriptTag from 'react-script-tag';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import File from './Fileupload';
import Footer from './Footer';
import Maincontact from './Maincontact';
import Pnavbar from './Pnavbar';
import Sheader from './Sheader';

const Gallery = () => {
  const Demo = props => (
    <ScriptTag type="text/javascript" src="style.js" />
  )
  return (
    <div className="App">
      <Helmet>
        <title>New Zealand | Gallery</title>
      </Helmet>
      <Pnavbar />
      <Sheader h1="The New Zealand Gallery" place="Gallery" />
      <br />
      <div class="col-lg-12 text-display text-center">
        <h3 class="title">New Zealand</h3>
      </div>
      <div class="col-lg-12 text-display text-center">
        <h4 class="">Choose your file!</h4>
        <File />
      </div>
      <br />

      <Maincontact />
      <Footer />
    </div>

  );
}

export default Gallery;
