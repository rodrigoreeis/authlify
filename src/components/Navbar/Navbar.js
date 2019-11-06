import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: 'LOG_OUT',
    });
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <span className="navbar-brand text-white font-weight-bold">
        Eventos
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white" />
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {useSelector(state =>
            !state.userLogged === true ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/novo-usuario">
                    Cadastra-se
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/registrar-evento">
                    Publicar Eventos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/meus-eventos">
                    Meus Eventos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={handleLogout}
                  >
                    Sair
                  </Link>
                </li>
              </>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
