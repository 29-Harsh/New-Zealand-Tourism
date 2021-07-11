import React from 'react'
import "./index.css";
import './App.css';

function Sheader(props) {
    return (
        <header className="masthead">
            <div className="container height-less">
                <div className="intro-text position-ch">
                    <div className="intro-lead-in" id="startchange">{props.h1}</div>
                    <ul class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li>{props.place}</li>
                    </ul>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Read more</a>
                </div>
            </div>
        </header>
    )
}

export default Sheader;