import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { BackButton } from 'components/BackButton/BackButton';
import priorityHandler from 'helpers/priorityHandler';
import dateFormatHandler from 'helpers/dateFormatHandler';

import css from './Event.module.css';

export const Event = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getEventById(id);
  }, [id]);

  const getEventById = async id => {
    const docRef = doc(db, 'events', id);
    const docSnap = await getDoc(docRef);
    const eventById = docSnap.data();
    setEvent(eventById);
  };

  return (
    <div className={css.container}>
      <BackButton />
      <h1 className={css.pageTitle}>{event.title}</h1>
      <div className={css.eventItem}>
        <div className={css.imageThumb}>
          <img src={event.picture} alt={event.title} />
        </div>
        <div className={css.descriptionThumb}>
          <span className={css.descriptionText}>{event.description}</span>

          <ul className={css.badges}>
            <li className={css.badge}>
              <span>{event.category}</span>
            </li>
            <li className={css.badge}>
              <span>{priorityHandler(event.priority)}</span>
            </li>
            <li className={css.badge}>
              <span>{event.location}</span>
            </li>
            <li className={css.badge}>
              <span>
                {dateFormatHandler(event.date)} at {event.time}
              </span>
            </li>
          </ul>
        </div>
        <div className={css.buttonSection}>
          <button type="button" className={`${css.button} ${css.editButton}`}>
            Edit
          </button>
          <button type="button" className={`${css.button} ${css.deleteButton}`}>
            Delete event
          </button>
        </div>
      </div>
    </div>
  );
};
