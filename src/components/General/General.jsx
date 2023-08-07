import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { query, where, collection, getDocs } from 'firebase/firestore';

import { EventCard } from 'components/EventCard/EventCard';
import { FilterButton } from '../FilterButton/FilterButton';
import { SortButton } from 'components/SortButton/SortButton';
import { CreateButton } from 'components/CreateButton/CreateButton';

import css from './General.module.css';

export const General = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    const querySnapshot = await getDocs(collection(db, 'events'));
    const array = [];
    querySnapshot.forEach(doc => {
      const event = doc.data();
      event.id = doc.id;

      array.unshift(event);
    });
    setEvents(array);
  };

  const getEventByCategory = async category => {
    if (category === 'All') {
      getAllEvents();
      return;
    }
    const q = query(
      collection(db, 'events'),
      where('category', '==', category)
    );
    const array = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      const event = doc.data();
      event.id = doc.id;

      array.unshift(event);
    });
    setEvents(array);
  };

  return (
    <div className={css.container}>
      <div className={css.upperSection}>
        <ul className={css.buttons}>
          <li>
            <FilterButton onSelect={getEventByCategory} />
          </li>
          <li>
            <SortButton />
          </li>
          <li>
            <CreateButton />
          </li>
        </ul>
        <h1 className={css.pageTitle}>My events</h1>
      </div>

      <div className={css.eventContainer}>
        <ul className={css.eventList}>
          {events.map(event => {
            return (
              <li key={event.id} className={css.eventItem}>
                <EventCard event={event} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
