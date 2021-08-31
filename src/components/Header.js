import React from "react";
import "../styles/Header.css";
import logo from "../assets/images/gmail-logo.png";
import "font-awesome/css/font-awesome.min.css";
// import styled from "styled-components";

function Header() {
  return (
    <header id="container">
      <div className="container-logo">
        <a href="https://google.com"></a>
        <i className="fa fa-facebook"></i>
        <h1 className="logo">
          <a href="https://google.com">
            <img src={logo} alt="Gmail Logo" title="Gmail" />
          </a>
        </h1>
      </div>
      <div className="search-bar"></div>
      <div className="header-icons"></div>
    </header>
  );
}
export default Header;

// const Container = styled.div`
//   background-color: orangered;
//   color: white;
//   height: 100px;
// `
