import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../src/components/Search/Search';

const items = 'ABCDEF'
  .split('')
  .map(c => ({
    label: c + c + c,
    value: c + c + c,
  }));

const defaultProps = {
  items,
  onChange: action('changed'),
  placeholder: 'Search',
};

const stories = storiesOf('Search', module);

stories.add('default', () => <Search {...defaultProps} />);

stories.add('with an icon', () => (
  <Search
    {...defaultProps}
    icon={<img src="http://placehold.it/30x30" alt="" />}
  />
));
stories.add('with a small icon', () => (
  <Search
    {...defaultProps}
    icon={<img src="http://placehold.it/16x16" alt="" />}
  />
));
stories.add('clearable', () => (
  <Search
    {...defaultProps}
    clearable
    value="Some value"
  />
));
stories.add('disabled', () => (
  <Search
    {...defaultProps}
    disabled
  />
));
stories.add('custom clear icon', () => (
  <Search
    {...defaultProps}
    clearable
    clearIcon={<img src="http://placehold.it/20x20" alt="" />}
    value="Some value"
  />
));
