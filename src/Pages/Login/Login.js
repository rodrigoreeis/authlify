/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './styles.css';

const Login = () => {
  return (
    <div className="login-container d-flex align-items-center">
      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <img
            className="mb-4"
            src="#"
            alt=""
            width="72"
            height="72"
          />
          <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">
            Login
          </h1>
        </div>

        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Seu email"
          required
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
          required
        />

        <button
          className="btn btn-lg btn-block button-login"
          type="submit"
        >
          Login
        </button>
        <div className="message-login text-white text-center my-5 d-flex flex-column">
          <span>
            <strong>Wow! </strong>
            Voce está logado ! &#128578;
          </span>
          <span>
            <strong>Ops! </strong>
            Senha ou usuário incorreto! &#128531;
          </span>
        </div>

        <div className="options-login mt-3 d-flex flex-column">
          <a href="#" className="mx-2 text-center">
            Recuperar Senha
          </a>
          <a href="#" className="mx-2 text-center">
            Cadastre-se
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
