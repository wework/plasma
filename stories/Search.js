import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Search from '../src/components/Search/Search';

storiesOf('Search', module).add('default', () => {
  return (
    <Search
      iconUrl="http://placehold.it/30x30"
      onChange={() => {}}
      placeholder="Search"
    />
  );
});

storiesOf('Search', module).add('with a small icon passed in', () => {
  return (
    <Search
      iconUrl="http://placehold.it/16x16"
      onChange={() => {}}
      placeholder="Search"
    />
  );
});

storiesOf('Search', module).add('with instruction text', () => {
  return (
    <Search
      iconUrl="http://placehold.it/30x30"
      instructionText="Some sort of instructions for this search."
      onChange={() => {}}
      placeholder="Search"
    />
  );
});

storiesOf('Search', module).add('clearable', () => {
  return (
    <Search
      clearable
      clearIconUrl="http://placehold.it/8x8"
      iconUrl="http://placehold.it/30x30"
      onChange={() => {}}
      placeholder="Search"
    />
  );
});

storiesOf('Search', module).add('disabled', () => {
  return (
    <Search
      disabled
      iconUrl="http://placehold.it/30x30"
      onChange={() => {}}
      placeholder="Search"
    />
  );
});

storiesOf('Search', module).add('with prepopulated value', () => {
  return (
    <Search
      clearable
      clearIconUrl="http://placehold.it/8x8"
      iconUrl="http://placehold.it/30x30"
      onChange={() => {}}
      placeholder="Search"
      value="Hello there"
    />
  );
});

storiesOf('Search', module).add('with empty prepopulated value', () => {
  return (
    <Search
      clearable
      clearIconUrl="http://placehold.it/8x8"
      iconUrl="http://placehold.it/30x30"
      onChange={() => {}}
      placeholder="Search"
      value=""
    />
  );
});
