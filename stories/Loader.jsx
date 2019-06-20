import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../src/components/Loader/Loader';

import styles from './style.scss';

storiesOf('Loader', module)
  .add('default', () => <Loader />)
  .add('dotColor', () => <Loader dotColor="#ff0000" />)
  .add('dotClassName', () => <Loader dotClassName={styles.greenDotLoader} />);
