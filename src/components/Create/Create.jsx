import { BackButton } from 'components/BackButton/BackButton';
import { FormNarrow } from './Form/FormNarrow';
import { FormWide } from './Form/FormWide';

import { useMatchMedia } from 'hooks/use-match-media';

import css from './Create.module.css';

export const Create = () => {
  const { isDesktop } = useMatchMedia();

  return (
    <div className={css.container}>
      <BackButton />
      <h1 className={css.pageTitle}>Create new event</h1>
      {isDesktop ? <FormWide /> : <FormNarrow />}
    </div>
  );
};
