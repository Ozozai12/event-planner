import { useEffect, useState } from 'react';

import { BackButton } from 'components/BackButton/BackButton';
import { FormNarrow } from './Form/FormNarrow';
import { FormWide } from './Form/FormWide';

import css from './Create.module.css';

export const Create = () => {
  const [windowWidth, setWindowWidth] = useState('desktop');

  useEffect(() => {
    getWindowWidth();
  }, []);

  const getWindowWidth = () => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth <= 1280) {
      setWindowWidth('mobile');
    } else {
      return;
    }
  };
  return (
    <div className={css.container}>
      <BackButton />
      <h1 className={css.pageTitle}>Create new event</h1>
      {windowWidth === 'desktop' ? <FormWide /> : <FormNarrow />}
    </div>
  );
};
