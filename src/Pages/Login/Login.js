/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import firebase from '../../configs/firebase';
import 'firebase/auth';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [messageLoading, setMessageLoading] = useState('Login');

  const handleLogin = ev => {
    ev.preventDefault();
    setMessageLoading('Carregando...');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setMessage(true);
        setMessageLoading('Login');
        setTimeout(() => {
          dispatch({
            type: 'LOG_IN',
            userEmail: email,
          });
        }, 2000);
      })
      .catch(() => {
        setMessageLoading('Login');
        setMessage(false);
      });
  };

  return (
    <div className="login-container d-flex align-items-center">
      {useSelector(state =>
        state.userLogged === true ? <Redirect to="/" /> : null,
      )}
      <form className="form-signin form-login mx-auto d-flex align-items-center flex-column">
        <h1 className="h3 mb-4 font-weight-normal text-white font-weight-bold">
          Login
        </h1>

        <input
          type="email"
          id="inputEmail"
          className="form-control my-2"
          placeholder="Seu email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          id="inputPassword"
          className="form-control my-2"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button
          className="btn btn-lg btn-block button-login"
          type="submit"
          onClick={handleLogin}
        >
          {messageLoading}
        </button>

        <div className="options-login mt-3 d-flex flex-column">
          <a href="#" className="mx-2 text-center">
            Recuperar Senha
          </a>
          <Link to="/novo-usuario" className="mx-2 text-center">
            Cadastre-se
          </Link>
        </div>
        <div className="message-login text-white text-center mt-3">
          {message === true && (
            <span>
              <strong>Wow! </strong>
              Voce está logado ! &#128578;
            </span>
          )}
          {message === false && (
            <span>
              <strong>Ops! </strong>
              Senha ou usuário incorreto! &#128531;
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
