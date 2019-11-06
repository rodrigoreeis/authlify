import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import firebase from '../../configs/firebase';
import 'firebase/auth';

import Navbar from '../../components/Navbar';

const EventRegistration = () => {
  return <Navbar />;
};

export default EventRegistration;
