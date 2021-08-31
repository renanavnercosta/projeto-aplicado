import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav style={{ backgroundColor: '#26a69a' }}>
            <div>
              <a
                href="/dashboard"
                className="brand-logo"
                style={{ marginLeft: '10px' }}
              >
                Skill Management
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li>
                  <a href="/create-department">Department</a>
                </li>
                <li>
                  <a href="/create-login">Create admin</a>
                </li>
                <li>
                  <a href="/create-employee">Create Employee</a>
                </li>
                <li>
                  <a href="/edite-employee">Edite Employee</a>
                </li>
                <li>
                  <a href="about">About</a>
                </li>
                <li>
                  <a href="/">Sair</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
