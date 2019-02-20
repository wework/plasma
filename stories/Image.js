import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Image from '../src/components/Image/Image';

storiesOf('Image', module).add('image', () => <Image />);

storiesOf('Image', module).add('image click', () => <Image onClick={action('clicked')} />);
