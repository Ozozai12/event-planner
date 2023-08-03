import { Link } from 'react-router-dom';

import { BiFilterAlt } from 'react-icons/bi';
import { LiaSlidersHSolid } from 'react-icons/lia';
import { AiOutlinePlus } from 'react-icons/ai';

import css from './General.module.css';

export const General = () => {
  return (
    <div className={css.container}>
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
      <div className={css.eventContainer}>
        <ul className={css.eventList}>
          <li className={css.eventItem}>
            <div className={css.imageThumb}>
              <div className={css.badges}>
                <div className={css.badge}>
                  <span>Business</span>
                </div>
                <div className={css.badge}>
                  <span>Medium</span>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_347_hkhrsu.jpg"
                alt="business meeting"
                className={css.eventPicture}
              />
              <div className={css.dateThumb}>
                <span>12.07 at 12:00</span>
                <span>Kyiv</span>
              </div>
            </div>
            <p className={css.descriptionTitle}>Leadership Conference</p>
            <span className={css.descriptionText}>
              Unlock the secrets of effective leadership at our transformative
              Success Leadership Conference.
            </span>
          </li>
          <li className={css.eventItem}>
            <div className={css.imageThumb}>
              <div className={css.badges}>
                <div className={css.badge}>
                  <span>Business</span>
                </div>
                <div className={css.badge}>
                  <span>Medium</span>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_347_hkhrsu.jpg"
                alt="business meeting"
                className={css.eventPicture}
              />
              <div className={css.dateThumb}>
                <span>12.07 at 12:00</span>
                <span>Kyiv</span>
              </div>
            </div>
            <p className={css.descriptionTitle}>Leadership Conference</p>
            <span className={css.descriptionText}>
              Unlock the secrets of effective leadership at our transformative
              Success Leadership Conference.
            </span>
          </li>
          <li className={css.eventItem}>
            <div className={css.imageThumb}>
              <div className={css.badges}>
                <div className={css.badge}>
                  <span>Business</span>
                </div>
                <div className={css.badge}>
                  <span>Medium</span>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dmadhdzzm/image/upload/v1690989811/event-planner/Rectangle_347_hkhrsu.jpg"
                alt="business meeting"
                className={css.eventPicture}
              />
              <div className={css.dateThumb}>
                <span>12.07 at 12:00</span>
                <span>Kyiv</span>
              </div>
            </div>
            <p className={css.descriptionTitle}>Leadership Conference</p>
            <span className={css.descriptionText}>
              Unlock the secrets of effective leadership at our transformative
              Success Leadership Conference.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
