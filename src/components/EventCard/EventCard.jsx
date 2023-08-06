import { useState } from 'react';
import { Link } from 'react-router-dom';

import priorityHandler from 'helpers/priorityHandler';
import dateFormatHandler from 'helpers/dateFormatHandler';

import css from './EventCard.module.css';

export const EventCard = ({ event }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className={css.eventItem}
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
    >
      <div className={css.imageThumb} style={{ height: showMore ? 280 : 336 }}>
        <div className={css.badges}>
          <div className={css.badge}>
            <span>{event.category}</span>
          </div>
          <div className={css.badge}>{priorityHandler(event.priority)}</div>
        </div>
        <img src={event.picture} alt={event.title} />
      </div>
      <div className={css.descriptionThumb}>
        <div className={css.dateThumb}>
          <span>
            {dateFormatHandler(event.date)} at {event.time}
          </span>
          <span>{event.location}</span>
        </div>
        <p className={css.descriptionTitle}>{event.title}</p>
        <span className={css.descriptionText}>{event.description}</span>
      </div>

      {showMore && (
        <Link to={`/${event.id}`} className={css.moreButton}>
          Learn more
        </Link>
      )}
    </div>
  );
};
