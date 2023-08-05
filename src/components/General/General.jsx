import { Link } from 'react-router-dom';
import { useState } from 'react';

import { BiFilterAlt } from 'react-icons/bi';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { AiOutlinePlus } from 'react-icons/ai';

import css from './General.module.css';

const defaultEvents = [
  {
    id: '1',
    title: 'Zoom meeting',
    description:
      'A zoom call with a team. Need to talk about important things such as work.',
    date: '2023-08-08',
    time: '12-00',
    location: 'Kyiv',
    category: 'Business',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Washing dishes',
    description: 'Yes I need to wash a dish.',
    date: '2023-10-08',
    time: '20-00',
    location: 'Kyiv',
    category: 'Art',
    priority: 'Medium',
  },
];

export const General = () => {
  const [events, setEvents] = useState(defaultEvents);
  const [shown, setShown] = useState(false);

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
              <li
                key={event.id}
                className={css.eventItem}
                onClick={() => setShown(true)}
                onBlur={() => setShown(false)}
              >
                <div
                  className={css.imageThumb}
                  style={{ height: shown ? 280 : 336 }}
                >
                  <div className={css.badges}>
                    <div className={css.badge}>
                      <span>{event.category}</span>
                    </div>
                    <div className={css.badge}>
                      <span>{event.priority}</span>
                    </div>
                  </div>
                  <img
                    src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_347_hkhrsu.jpg"
                    alt="business meeting"
                  />
                </div>
                <div className={css.descriptionThumb}>
                  <div className={css.dateThumb}>
                    <span>
                      {event.date} at {event.time}
                    </span>
                    <span>{event.location}</span>
                  </div>
                  <p className={css.descriptionTitle}>{event.title}</p>
                  <span className={css.descriptionText}>
                    {event.description}
                  </span>
                </div>

                {shown && (
                  <Link to="/:id" className={css.moreButton}>
                    Learn more
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
