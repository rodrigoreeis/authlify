import React, { useState } from 'react';
import './styles.css';

import firebase from '../../configs/firebase';
import 'firebase/auth';
import Navbar from '../../components/Navbar';

const RecoverPassword = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [messageLoading, setMessageLoading] = useState(
    'Recuperar Senha',
  );

  const handleRecoveryPassword = ev => {
    ev.preventDefault();
    if (email) {
      setMessageLoading('Carregando...');
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setMessage(
            'Enviamos um link para seu email\npara você redefinir sua senha!',
          );
          setMessageLoading('Recuperar Senha');
        })
        .catch(() => {
          setMessageLoading('Recuperar Senha');
          setMessage('Verifique se o email digitado está correto!');
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="recovery-password d-flex align-items-center">
        <form className="text-center form-login mx-auto mt-5">
          <h1 className="font-weight-bold h3 mb-3">
            Recuperar Senha
          </h1>
          <input
            type="email"
            className="form-control my-2"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="btn btn-lg btn-block button-send"
            onClick={e => handleRecoveryPassword(e)}
          >
            {messageLoading}
          </button>
          <div className="message-form my-4 text-center">
            <span>{message}</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default RecoverPassword;
