import React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from '../src/components/Loader/Loader';

import styles from './style.scss';

storiesOf('Loader', module)
  .add('default', () => <Loader />)
  .add('dotStyle', () => <Loader dotStyle={{ backgroundColor: '#c1c1c1' }} />)
  .add('dotColor', () => <Loader dotColor="#f00" />)
  .add('dotClassName', () => <Loader dotClassName={styles.greenDotLoader} />);
