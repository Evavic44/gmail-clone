import React from "react";
import "../styles/Header.css";
import logo from "../assets/images/gmail-logo.png";
import avatar from "../assets/images/avatar.png";
import "font-awesome/css/font-awesome.min.css";
// import styled from "styled-components";

function Header() {
  return (
    <header id="container">
      <div className="container-logo">
        <button title="Main menu">
          <i className="fa fa-bars"></i>
        </button>
        <h1 className="logo">
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <img src={logo} alt="Gmail Logo" title="Gmail" />
          </a>
        </h1>
      </div>
      <div className="search-bar">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search mail"
        />
      </div>
      <div className="header-icons">
        <button title="Support">
          <i className="fa fa-question-circle"></i>
        </button>
        <button title="Settings">
          <i className="fa fa-cog"></i>
        </button>
        <button title="Google apps">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAlElEQVRoge3WsQ0CUQyDYYc1OCZiCAqkJzERXEPBEgx0t0foES+tg/R/beRI7iwBgFPMDpfr7azIVanj12nPjPF63t8dcodZASkfP55J0hKRa5dcUUBLcTt1yVUF/gIF3KoCe3HbuuSmBTJjTJ5uoRxdcgDgxRp151ijbhRwY426cwDgxRp151ijbhRwY426cwDg9QE8ZcXvK27ZrQAAAABJRU5ErkJggg=="
            alt="Hamburger options"
          />
        </button>
        <img src={avatar} alt="Avatar" title="Google Account" />
      </div>
    </header>
  );
}
export default Header;

// const Container = styled.div`
//   background-color: orangered;
//   color: white;
//   height: 100px;
// `
