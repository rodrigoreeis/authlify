/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './styles.css';
import firebase from '../../configs/firebase';
import 'firebase/auth';

import Navbar from '../../components/Navbar';

const EventRegistration = () => {
  const [message, setMessage] = useState();
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [details, setDetails] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [photo, setPhoto] = useState();
  const [messageLoading, setMessageLoading] = useState(
    'Publicar Evento',
  );
  const userEmail = useSelector(state => state.userEmail);

  const storage = firebase.storage();
  const db = firebase.firestore();

  const handleRegister = () => {
    setMessageLoading('Enviando...');
    storage
      .ref(`images/${photo.name}`)
      .put(photo)
      .then(() => {
        db.collection('eventos').add({
          title,
          type,
          details,
          date,
          hour,
          user: userEmail,
          visualizations: 0,
          photo: photo.name,
          public: 1,
          creation: new Date(),
        });
      })
      .then(() => {
        setMessage(true);
        setMessageLoading('Publicar Evento');
      })
      .catch(error => {
        setMessageLoading('Publicar Evento');
        setMessage(false);
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="col-12 mt-5">
        <div className="row container-event">
          <h3 className="mt-3 mx-auto font-weight-bold">
            Novo evento
          </h3>
          <form className="mx-auto form-event mt-3">
            <div className="form-group">
              <label className="title">Titulo:</label>
              <input
                onChange={({ currentTarget }) =>
                  setTitle(currentTarget.value)
                }
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="type-event">Tipo do Evento :</label>
              <select
                onChange={({ currentTarget }) =>
                  setType(currentTarget.value)
                }
                className="form-control"
              >
                <option disabled defaultValue>
                  Selecione um tipo
                </option>
                <option>Festa</option>
                <option>Teatro</option>
                <option>Show</option>
                <option>Evento</option>
              </select>
            </div>
            <div className="form-group">
              <label className="description-event">
                Descrição evento:
              </label>
              <textarea
                onChange={({ currentTarget }) =>
                  setDetails(currentTarget.value)
                }
                className="form-control"
                row="3"
              />
            </div>
            <div className="form-group row">
              <div className="col-6">
                <label className="data-event">Data:</label>
                <input
                  onChange={({ currentTarget }) =>
                    setDate(currentTarget.value)
                  }
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="data-event">Hora:</label>
                <input
                  onChange={({ currentTarget }) =>
                    setHour(currentTarget.value)
                  }
                  type="time"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="title">Upload da Foto:</label>
              <input
                onChange={({ currentTarget }) =>
                  setPhoto(currentTarget.files[0])
                }
                type="file"
                className="form-control"
              />
            </div>
            <button
              type="button"
              className="btn btn-lg btn-block button-register"
              onClick={handleRegister}
            >
              {messageLoading}
            </button>
          </form>
          <div className="message-login text-white text-center mt-3">
            {message === true && (
              <span>
                <strong>Wow! </strong>
                Evento Publicado ! &#128578;
              </span>
            )}
            {message === false && (
              <span>
                <strong>Ops! </strong>
                Não foi possível publicar o evento &#128531;
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventRegistration;
