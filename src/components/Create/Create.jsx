import { BackButton } from 'components/BackButton/BackButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';

import { FormFields } from './FormFields/FormFields';

import css from './Create.module.css';

export const Create = () => {
  const navigate = useNavigate();

  const addEvent = async credentials => {
    try {
      await addDoc(collection(db, 'events'), {
        ...credentials,
        id: uuidv4(),
      });
      navigate('/');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const regex = /^[a-zA-Z ]+$/i;

  const validateTitle = value => {
    if (!value) {
      return 'Title required';
    } else if (!regex.test(value)) {
      return 'Invalid input';
    }
  };

  const validateDescription = value => {
    if (!value) {
      return 'Description required';
    }
  };

  const validateTime = value => {
    if (!value) {
      return 'Time required';
    }
  };

  const validateLocation = value => {
    if (!value) {
      return 'Location required';
    } else if (!regex.test(value)) {
      return 'Invalid input';
    }
  };
  return (
    <div className={css.container}>
      <BackButton />
      <h1 className={css.pageTitle}>Create new event</h1>
      <FormFields
        validateDescription={validateDescription}
        validateLocation={validateLocation}
        validateTime={validateTime}
        validateTitle={validateTitle}
        addEvent={addEvent}
      />
    </div>
  );
};
