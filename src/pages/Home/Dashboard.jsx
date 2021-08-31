import Header from '../../componentes/Header';
import React, { useState } from 'react';
import MultipleSelectChips from './MultipleSelectChips.js';
import Select from 'react-select';
import axios from 'axios';

function initialState() {
  return { email: '', password: '' };
}

const Dashboard = () => {
  const [values, setValues] = useState(initialState);

  function getAllDepartments() {
    // Make a request for a user with a given ID
    axios
      .get('http://localhost:5000/departments')
      .then(function (response) {
        // handle success
        departments = response.data.map((itens) => {
          return {
            value: itens.name,
            label: itens.name,
          };
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  getAllDepartments();
  let departments = []; // array exibido no select

  console.log(departments);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  const [value, setValue] = useState([]);
  const [error, setError] = useState('');
  const options = [
    { label: 'Proatividade', value: 1 },
    { label: 'Boa Comunicação', value: 2 },
    { label: 'Liderança', value: 3 },
    { label: 'Criatividade e Inovação', value: 4 },
    { label: 'Resolução de Problemas', value: 5 },
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1
          style={{
            fontSize: '30px',
            horizontalAlignt: 'center',
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          Home
        </h1>
      </div>

      <div className="row">
        <div className="col s6">
          <div className="input-field col s8 col s6 offset-s4">
            <div className="card">
              <div className="card-content">
                <div>
                  <h6>select the department</h6>
                </div>
                <div>
                  <Select
                    options={departments}
                    placeholder={'Department'}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 5,
                      colors: {
                        ...theme.colors,
                        margin: '15 px',
                        primary25: '#E7E6E2',
                        primary: '#28A49A',
                      },
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-content">
                <div>
                  <MultipleSelectChips
                    label="Selected skills:"
                    value={value}
                    setValue={setValue}
                    options={options}
                    error={error}
                    setError={setError}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col s6">
          <div className="input-field col s8 col ">
            <div>
              <h1
                style={{
                  fontSize: '30px',
                  horizontalAlignt: 'center',
                  textAlign: 'center',
                  marginBottom: '30px',
                }}
              >
                List of Employyers
              </h1>
            </div>
            <div>
              <ul className="collection">
                <li className="collection-item avatar">
                  <img src="images/yuna.jpg" alt="" className="circle" />
                  <span className="title">Title</span>
                  <p>First Line </p>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">grade</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
