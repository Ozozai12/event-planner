import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

import { BiFilterAlt } from 'react-icons/bi';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { AiOutlinePlus } from 'react-icons/ai';

import { EventCard } from 'components/EventCard/EventCard';

import css from './General.module.css';

// const defaultEvents = [
//   {
//     id: '1',
//     title: 'Zoom meeting',
//     description:
//       'A zoom call with a team. Need to talk about important things such as work.',
//     date: '2023-08-08',
//     time: '12-00',
//     location: 'Kyiv',
//     category: 'Business',
//     priority: 'High',
//   },
//   {
//     id: '2',
//     title: 'Washing dishes',
//     description: 'Yes I need to wash a dish.',
//     date: '2023-10-08',
//     time: '20-00',
//     location: 'Kyiv',
//     category: 'Art',
//     priority: 'Medium',
//   },
// ];

export const General = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const querySnapshot = await getDocs(collection(db, 'events'));
    const array = [];
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
        <div className={css.buttons}>
          <div className={css.serviceButton}>
            <span className={css.buttonName}>Category</span>
            <BiFilterAlt style={{ width: 24, height: 24, fill: '#3F3F3F' }} />
          </div>
          <div className={css.serviceButton}>
            <span className={css.buttonName}>Sort by</span>
            <LiaSlidersHSolid
              style={{ width: 24, height: 24, fill: '#3F3F3F' }}
            />
          </div>
          <Link to="create" className={css.serviceButton}>
            <AiOutlinePlus style={{ width: 24, height: 24, fill: '#fff' }} />
            <span className={css.buttonName}>Add new event</span>
          </Link>
        </div>
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
