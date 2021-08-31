import React, { Component } from 'react';
import background from '../../img//skill.jpg';
import Header from '../../componentes/Header';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <div className="row">
          <div className="col s6">
            <h1>Skill Management</h1>
            <h5>Versão beta 1.0.0</h5>
          </div>
          <div className="col s6">
            <img src={background} className="responsive-img" alt="logo" />
          </div>
          <div className="row">
            <div>
              <div className="col s12">
                <h6
                  style={{
                    backgroundColor: '#A9A9A9',
                    color: 'white',
                    height: '30vh',
                    width: '100%',
                  }}
                >
                  Copyright © By Ávner 2021. Todos os direitos reservados. O
                  Skill Management foi possibilitado pelo projeto de código
                  aberto React.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
