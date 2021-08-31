import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
import './CreateEmployee.css';
import Header from '../../componentes/Header';

import Select from 'react-select'

function initialState() {
  return { firstName: '', lastName: '' };
}

const CreateEmployee = () => {
  const [values, setValues] = useState(initialState);
  // const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    var toastHTML = '<span>Employee created successfully.</span>';
    M.toast({ html: toastHTML });
    console.log(values);
  }

  const options = [
    { value: 'ITEM 1', label: 'ITEM 1' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div>
      <div>
        <Header />
      </div>

        <div className="center">
        <h1
            style={{
              fontSize: '30px',
              horizontalAlignt: 'center',
              marginBottom: '0px',
            }}
          >
            Create Employee
          </h1>
        </div>

      <div className="row">
        <div className="col s6">

          <div className="input-field col s8 col s6 offset-s4">
              <h1
                style={{
                  fontSize: '30px',
                  horizontalAlignt: 'center',
                  marginBottom: '0px',
                }}
              >
                Employee Data
              </h1>
          </div>
                
          <div className="input-field col s8 col s6 offset-s4">
              <input
                id="firstName"
                type="text"
                name="firstName"
                onChange={onChange}
                value={values.firstName}
              />
              <label nfor="firstName">First Name</label>
           </div>

           <div className="input-field col s8 col s6 offset-s4">
              <input
                id="lastName"
                type="text"
                name="lastName"
                onChange={onChange}
                value={values.lastName}
              />
              <label nfor="lastName">Last Name</label>
           </div>

           <div className="input-field col s8 col s6 offset-s4">
              <Select options={options}
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

        </div>
        <div className="col s6">

            <div className="input-field col s8 col ">
                <h1
                  style={{
                    fontSize: '30px',
                    horizontalAlignt: 'center',
                    marginBottom: '0px',
                  }}
                >
                  Skills
                </h1>
            </div>

            <div className="input-field col s8 col">
                <p className="range-field">
                  <label>Proatividade</label>
                  <input type="range" id="range_1" min="0" max="100" />
                </p>
                <p className="range-field">
                  <label className="label" >Boa comunicação</label>
                  <input type="range" id="range_2" min="0" max="100" />
                </p>
                <p className="range-field" >
                      <label className="label" >Liderança</label>
                      <input type="range" id="range_3" min="0" max="100" />
                </p>
                <p className="range-field" >
                  <label className="label" >Criatividade e inovação</label>
                  <input type="range" id="range_4" min="0" max="100" />
                </p>
                <p className="range-field" >
                  <label className="label" >Resolução de problemas</label>
                  <input type="range" id="range_5" min="0" max="100" />
                </p>
            </div>
           </div>
       
        <div className="row">
            <div className="input-field col s4 col col s6 offset-s3">
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
    </div>
  );
};

export default CreateEmployee;
