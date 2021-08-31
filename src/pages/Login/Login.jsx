import React, { useState } from 'react';
import './Login.css';
import icon from '../../img//logo.png';
import background from '../../img//skill.jpg';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
import axios from 'axios';

function initialState() {
  return { email: '', password: '' };
}

function login({ email, password }) {
  axios
    .get(`http://localhost:5000/users?email=${email}`)
    .then(function (response) {
      const found = response.data.find((item) => {
        return item.email === email && item.password === password;
      });

      if (found) {
        console.log('OK');
      } else {
        console.log('NOK');
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    axios
      .get(`http://localhost:5000/users?email=${values.email}`)
      .then(function (response) {
        const found = response.data.find((item) => {
          return (
            item.email === values.email && item.password === values.password
          );
        });

        if (found) {
          var toastHTML = '<span>logged in user.</span>';
          M.toast({ html: toastHTML });
          return history.push('/dashboard');
        } else {
          setValues(initialState);
          toastHTML = '<span>Login or password invalid.</span>';
          M.toast({ html: toastHTML });
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const loginIcon = {
    width: '40px',
    height: '40px',
    marginTop: '15px',
  };

  return (
    <div className="row">
      <div className="login">
        <div className="col s8">
          <img src={background} className="responsive-img" alt="logo" />
        </div>
        <div className="col s4">
          <div className="login-border">
            <div>
              <img src={icon} style={loginIcon} alt="logo" />
              <h5>Sign in</h5>
            </div>

            <form onSubmit={onSubmit}>
              <div className="input-field col s12">
                <input
                  id="email"
                  type="text"
                  name="email"
                  onChange={onChange}
                  value={values.email}
                />
                <label nfor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={values.password}
                />
                <label nfor="password">Password</label>
              </div>

              <label className="col s4">
                <div className="row">
                  <input type="checkbox" />
                  <span>Remember me </span>
                </div>
              </label>

              <div>
                <button
                  className="waves-effect waves-light btn-small col s12"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="row">
              <label className="col s6" style={{ marginTop: '15px' }}>
                <span className="blue-text text-darken-2">Forgot password</span>
              </label>

              <label className="col s6" style={{ marginTop: '15px' }}>
                <span className="blue-text text-darken-2">Forgot password</span>
              </label>
            </div>
            <div>
              <span className="col s12">Copyright © By Ávner 2021.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
