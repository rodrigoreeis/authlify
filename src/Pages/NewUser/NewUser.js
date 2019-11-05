import React, { useState } from 'react';
import './styles.css';
import firebase from '../../configs/firebase';
import 'firebase/auth';

const NewUser = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [messageType, setMessageType] = useState();
  const [message, setMessage] = useState();

  const handleRegistry = () => {
    setMessageType(null);
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
        setMessageType(true);
        setMessage('Cadastro realizado com sucesso! ');
      })
      .catch(error => {
        setMessageType(false);
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
    <div className="new-user d-flex align-items-center justify-center">
      <form className="text-center form-login mx-auto mt-5 ">
        <h1 className="h3 mb-3 text-white"> Novo usuário </h1>
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
          className="btn btn-lg btn-block mt-3 mb-5 button-register"
          onClick={handleRegistry}
        >
          Cadastra-se
        </button>

        <div className="message-register text-white text-center my-5">
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
  );
};

export default NewUser;
