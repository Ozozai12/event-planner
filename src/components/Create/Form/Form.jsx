import React from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { v4 as uuidv4 } from 'uuid';

import { useMatchMedia } from 'hooks/use-match-media';
import { FormWide } from './FormWide';
import { FormNarrow } from './FormNarrow';

export const Form = () => {
  const { isDesktop } = useMatchMedia();

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
    <>
      {isDesktop ? (
        <FormWide
          validateDescription={validateDescription}
          validateLocation={validateLocation}
          validateTime={validateTime}
          validateTitle={validateTitle}
          addEvent={addEvent}
        />
      ) : (
        <FormNarrow
          validateDescription={validateDescription}
          validateLocation={validateLocation}
          validateTime={validateTime}
          validateTitle={validateTitle}
          addEvent={addEvent}
        />
      )}
    </>
  );
};
