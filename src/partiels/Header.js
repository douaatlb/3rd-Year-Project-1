import React, { Component } from 'react'
import {  Link } from "react-router-dom";
export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.listener = null;
        this.state = {
          status: "top"
        };
      }
    
      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 650) {
            if (this.state.status !== "nav") {
              this.setState({ status: "nav" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }
    render() {
        return (
            <div>
                
         
      
       <div className="nav"  >
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar shadow p-3 mb-5 " style={{
          backgroundColor : this.state.status === "top" ? "transparent" : "white"
        }}  >
             <a className="navbar-brand" href="/"  style={{
          color : this.state.status === "top" ? "white" : "black"
        }} >Conférences</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                &nbsp;  &nbsp;  &nbsp;  &nbsp;
            <div classname="collapse navbar-collapse" id="collapsibleNavId" >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                        <li className="nav-item active" >
                            <a className="nav-link" href="/" style={{
                          color : this.state.status === "top" ? "white" : "black"
                                }} >Home </a>
                        </li>   &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                           &nbsp;  &nbsp;  &nbsp; &nbsp;
                           &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                           &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                           &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; 
                        <li className="nav-item">
                            <a type="button" className="btn btn-outline-danger float-right" href="/signIn" > Sign-in</a>
                        </li>
                        &nbsp;  &nbsp; 
                        <li className="nav-item">
                            <a className="btn btn-outline-dark float-right" href="/signUp"style={{
                                color : this.state.status === "top" ? "white" : "black"
                              }} > Sign up</a>
                        </li>
                    </ul>
                    
                </div>
                </nav>
            </div>
            </div>
        )
    }
}
