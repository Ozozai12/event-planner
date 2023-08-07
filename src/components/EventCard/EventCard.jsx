import { Link } from 'react-router-dom';

import priorityHandler from 'helpers/priorityHandler';
import dateFormatHandler from 'helpers/dateFormatHandler';

import css from './EventCard.module.css';

export const EventCard = ({ event }) => {
  return (
    <div className={css.eventItem}>
      <div className={css.imageThumb}>
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

        <Link to={`/${event.id}`} className={css.moreButton}>
          Learn more
        </Link>
      </div>
    </div>
  );
};
