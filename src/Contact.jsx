import React from 'react';
import Route from "react-router-dom";
import Card from './components/Portfolio';
import { NavLink } from "react-router-dom";
import './App.css';
import './index.css';
import ScriptTag from 'react-script-tag';
import { Helmet } from 'react-helmet';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Button from './theme-app';

const Contact = () => {
  const Demo = props => (
    <ScriptTag type="text/javascript" src="style.js" />
  )
  return (
    <div className="App">
      <Helmet>
        <title>New Zealand | Contact</title>
      </Helmet>
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{ position: "fixed", width: "100%" }}>
        <Container>
          <Navbar.Brand href="/">New zealand</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto w-100">
            <Nav className="ml-auto">
              <Nav.Link href="/places-to-visit" id="nav-links">Places to visit</Nav.Link>
              <Nav.Link href="/food-places-to-visit" id="nav-links">Food places</Nav.Link>
              <Nav.Link href="/gallery" id="nav-links">Gallery</Nav.Link>
              <Nav.Link href="/about" id="nav-links">About</Nav.Link>
              <Nav.Link href="/contact" id="nav-links">Contact</Nav.Link>
              <Button />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="masthead">
        <div className="container height-less">
          <div className="intro-text position-ch">
            <div className="intro-lead-in" id="startchange" >Contact</div>
            <ul className="breadcrumb">
              <li><a href="/">Home</a></li>
              <li>Contact</li>
            </ul>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Read more</a>
          </div>
        </div>
      </header>

      <section id="contact us">
        <h1 className="section-header" style={{ color: "black" }}>Contact</h1>
        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" role="form">
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
              </div>
            </div>
            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
              </div>
            </button>
          </form>

          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">New zealand</span></i></li>
              <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">Mail@mail.com</a></span></i></li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li><a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-github" aria-hidden="true"></i></a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <i className="fa fa-instagram" aria-hidden="true"></i></a>
              </li>
            </ul>
            <hr />
            <div className="copyright">&copy; Copyright akul sharma 2022-2023</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
