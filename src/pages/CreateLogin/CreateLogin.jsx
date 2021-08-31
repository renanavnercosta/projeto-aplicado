import React, { useState } from 'react';
import './CreateLogin.css';
import { useHistory } from 'react-router-dom';
import Header from '../../componentes/Header';

import M from 'materialize-css';

function initialState() {
  return { name: '', email: '', password: '', repeat_password: '' };
}

function verifyPassword({ repeat_password, password }) {
  if (repeat_password === password) {
    return { token: 'true' };
  }
  return { error: 'Usuário ou senha invalida.' };
}

const CreateLogin = () => {
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

    const { token } = verifyPassword(values);

    if (token) {
      var toastHTML = '<span>User created successfully.</span>';
      M.toast({ html: toastHTML });
      return history.push('/');
    }

    setValues(initialState);
    toastHTML = '<span>Login or password invalid.</span>';
    M.toast({ html: toastHTML });
  }

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
      </div>
      <div className="create-login">
        <div className="row">
          <h1 style={{ fontSize: '30px' }}>Register</h1>
          <form className="col s9 offset-s3" onSubmit={onSubmit}>
            <div className="input-field col s8">
              <input
                id="name"
                type="text"
                name="name"
                onChange={onChange}
                value={values.name}
              />
              <label nfor="name">Name</label>
            </div>
            <div className="input-field col s8">
              <input
                id="email"
                type="text"
                name="email"
                onChange={onChange}
                value={values.email}
              />
              <label nfor="email">Email</label>
            </div>

            <div className="input-field col s8">
              <input
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
              />
              <label nfor="name">Password</label>
            </div>

            <div className="input-field col s8">
              <input
                id="repeat_password"
                type="password"
                name="repeat_password"
                onChange={onChange}
                value={values.repeat_password}
              />
              <label nfor="name">Repeat Password</label>
            </div>

            <div className="input-field col s8">
              <button
                className="waves-effect waves-light btn-small col s12"
                type="submit"
              >
                Register
              </button>
            </div>
            <div className="input-field col s8">
              <button className="waves-effect waves-light btn-small col s12">
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateLogin;
