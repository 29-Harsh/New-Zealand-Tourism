import React from 'react';
import Route from "react-router-dom";
import Card from './components/Portfolio';
import { NavLink } from "react-router-dom";
import './App.css';
import ScriptTag from 'react-script-tag';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Button from './theme-app';
import Footer from './Footer';
import Maincontact from './Maincontact';
import Pnavbar from './Pnavbar';
import Sheader from './Sheader';

const About = () => {
  const Demo = props => (
    <ScriptTag type="text/javascript" src="style.js" />
  )
  return (
    <div className="App">
      <Helmet>
        <title>New Zealand | About</title>
      </Helmet>
      <Pnavbar />
      <Sheader h1="About New Zealand" place="About" />
      <section class="" id="about">
        <div class="py-5">
          <div class="container py-lg-5 py-md-3">
            <div class="row align-items">
              <div class="col-lg-6 text-display text-left" style={{ width: "auto;" }}>
                <h3 class="title">New Zealand</h3>
                <p class="main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
              </div>
              <div class="HomeAboutImages col-lg-6 mt-lg-0 mt-5 pl-lg-5" style={{ width: "600px" }}>
                <div class="row position-relative">
                  <div class="col-6">
                    <div class="zoom-effect-container">
                      <div class="image-card">
                        <img src="https://www.newzealand.com/assets/Tourism-NZ/Fiordland/img-1536137761-110-7749-p-7ECF7092-95BD-FE18-6D4107E2E42D067E-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg" alt="" class="main-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Qualities of New zealand</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" style={{ zIndex: "-2" }}></i>
                <i class="fab fa-canadian-maple-leaf" style={{ color: "white" }}></i>
              </span>
              <h4 className="service-heading">Nature</h4>
              <p className="text-muted main-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary" style={{ zIndex: "-2" }}></i>
                <i class="fas fa-kiwi-bird" style={{ color: "white" }}></i>
              </span>
              <h4 className="service-heading">Kiwi</h4>
              <p className="text-muted main-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Security</h4>
              <p className="text-muted main-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>
      <Maincontact />
      <Footer />
    </div>

  );
}

export default About;
