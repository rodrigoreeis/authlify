/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
// import firebase from '../../configs/firebase';
import 'firebase/auth';

import Navbar from '../../components/Navbar';

const EventRegistration = () => {
  return (
    <>
      <Navbar />
      <div className="col-12 mt-5">
        <div className="row">
          <h3 className="mt-3 mx-auto font-weight-bold">
            Novo evento
          </h3>
          <form className="mx-auto form-event mt-3">
            <div className="form-group">
              <label className="title">Titulo:</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label className="type-event">Tipo do Evento :</label>
              <select className="form-control">
                <option disabled selected value>
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
              <textarea className="form-control" row="3" />
            </div>
            <div className="form-group row">
              <div className="col-6">
                <label className="data-event">Data:</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-6">
                <label className="data-event">Hora:</label>
                <input type="time" className="form-control" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventRegistration;
