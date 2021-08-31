
//import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
import './EditeEmployee.css';
import Header from '../../componentes/Header';

import React, { Component } from 'react'
import Select from 'react-select'

const EditeEmployee = () =>{

  function onSubmit(event) {
    event.preventDefault();

    var toastHTML = '<span>Employee edited successfully.</span>';
    M.toast({ html: toastHTML });
  }

  const departments = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const employees = [
    { value: 'ITEM 1', label: 'ITEM 1' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


  return(
    <div >
       <div>
        <Header />
      </div>
      <div className="row">
        <h1 style={{
              justifyContent: 'center',
              fontSize: '30px',        
              textAlign: 'center',
              marginTop: '40px'           
            }}>Edit Employee</h1>
      </div>

      <div className="row">
        <div className="col s4 col s4 offset-s4">
          <div className="col s6 ">
          <Select options={departments} 
          placeholder={'Department'}
          theme={theme => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              margin: '0 px',
              primary25: '#E7E6E2',
              primary: '#28A49A',
            },})} /> 
          </div>

          <div className="col s6">
          <Select options={employees} 
          
          placeholder={'Employee'}
          theme={theme => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              margin: '0 px',
              primary25: '#E7E6E2',
              primary: '#28A49A',
            },})} />
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col s4 col s4 offset-s4">

          <div className="range-field">
              
                <label>Proatividade</label>
                <input type="range" id="range_1" min="0" max="100" />
            
          </div>
           
            <p className="range-field">
              <label>Proatividade</label>
              <input type="range" id="range_2" min="0" max="100" />
            </p>
            <p className="range-field">
              <label>Proatividade</label>
              <input type="range" id="range_3" min="0" max="100" />
            </p>
            <p className="range-field">
              <label>Proatividade</label>
              <input type="range" id="range_4" min="0" max="100" />
            </p>
            <p className="range-field">
              <label>Proatividade</label>
              <input type="range" id="range_5" min="0" max="100" />
            </p>
                      
              <button            
                className="waves-effect waves-light btn-small col s12"
                type="submit"
                onSubmit={onSubmit}
              >
                Register
              </button>
        </div>
      </div>
    </div>
  );
};

export default EditeEmployee;