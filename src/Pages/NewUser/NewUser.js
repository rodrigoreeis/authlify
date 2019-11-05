/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './styles.css';
import firebase from '../../configs/firebase';
import 'firebase/auth';

import Navbar from '../../components/Navbar';

const NewUser = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [messageType, setMessageType] = useState();
  const [message, setMessage] = useState();
  const [messageLoading, setMessageLoading] = useState('Cadastre-se');
  const [sucess, setSucess] = useState(false);

  const handleRegistry = () => {
    setMessageType(null);
    setMessageLoading('Carregando...');
    if (!email || !password) {
      setMessageType(false);
      setMessage(
        'Você precisa informar email e senha\npara realizar o cadastro! ',
      );
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setTimeout(() => {
          setSucess(true);
        }, 2000);
        setMessageType(true);
        setMessage('Cadastro realizado com sucesso! ');
        setMessageLoading('Cadastre-se');
      })
      .catch(error => {
        setSucess(false);
        setMessageType(false);
        setMessageLoading('Cadastre-se');
        switch (error.message) {
          case 'Password should be at least 6 characters':
            setMessage('A senha deve ter pelo\nmenos 6 caracteres!');
            break;
          case 'The email address is already in use by another account.':
            setMessage(
              'Este email já está sendo\nutilizado por outro usuário!',
            );
            break;
          case 'The email address is badly formatted.':
            setMessage('O formato do seu email é inválido!');
            break;
          default:
            setMessage(
              'Não foi possível cadastrar. Tente novamente mais tarde!',
            );
            break;
        }
      });
  };
  return (
    <>
      <Navbar />
      {sucess ? (
        <Redirect to="/login" />
      ) : (
        <div className="new-user d-flex align-items-center justify-center">
          <form className="text-center form-login mx-auto mt-5 d-flex align-items-center flex-column">
            <h1 className="h3 mb-4 text-white"> Novo usuário </h1>
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control my-2"
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-lg btn-block button-register"
              onClick={handleRegistry}
            >
              {messageLoading}
            </button>
            <div className="message-register text-white text-center mt-3">
              {messageType === true && (
                <span>
                  <strong>Wow! </strong>
                  Usuário cadastrado com sucesso! &#128512;
                </span>
              )}
              {messageType === false && (
                <span>
                  <strong>Ops! </strong>
                  {message}
                </span>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default NewUser;
