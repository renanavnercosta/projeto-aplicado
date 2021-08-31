import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import M from 'materialize-css';
import './CreateDepartment.css';
import Header from '../../componentes/Header';

function initialState() {
  return { name: '', description: '' };
}

const CreateDepartment = () => {
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

    var toastHTML = '<span>Department created successfully.</span>';
    M.toast({ html: toastHTML });
    console.log(values);
    //return history.push('/dashboard');
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="create-department">
        <div>
          <h1
            style={{
              fontSize: '30px',
              horizontalAlignt: 'center',
              marginBottom: '40px',
            }}
          >
            Department Registration
          </h1>

          <div className="row">
            <form className="col s12" onSubmit={onSubmit}>
              <div className="input-field col s12">
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={onChange}
                  value={values.name}
                />
                <label nfor="name">Name</label>
              </div>

              <div className="input-field col s12">
                <textarea
                  id="description"
                  type="text"
                  name="description"
                  onChange={onChange}
                  value={values.description}
                  className="materialize-textarea"
                ></textarea>
                <label nfor="description">Description</label>
              </div>

              <div className="input-field col s12">
                <button
                  className="waves-effect waves-light btn-small col s12"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
