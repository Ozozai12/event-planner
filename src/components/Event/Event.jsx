import { BackButton } from 'components/BackButton/BackButton';

import css from './Event.module.css';

export const Event = () => {
  return (
    <div className={css.container}>
      <BackButton />
      <h1 className={css.pageTitle}>Gallery opening</h1>
      <div className={css.eventItem}>
        <div className={css.imageThumb}>
          <img
            src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_347_hkhrsu.jpg"
            alt="business meeting"
          />
        </div>
        <div className={css.descriptionThumb}>
          <span className={css.descriptionText}>
            Unlock the secrets of effective leadership at our transformative
            Success Leadership Conference.
          </span>

          <ul className={css.badges}>
            <li className={css.badge}>
              <span>Business</span>
            </li>
            <li className={css.badge}>
              <span>Medium</span>
            </li>
            <li className={css.badge}>
              <span>Kyiv</span>
            </li>
            <li className={css.badge}>
              <span>12.07 at 12:00</span>
            </li>
          </ul>
          <div className={css.buttonSection}>
            <button type="button" className={`${css.button} ${css.editButton}`}>
              Edit
            </button>
            <button
              type="button"
              className={`${css.button} ${css.deleteButton}`}
            >
              Delete event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
