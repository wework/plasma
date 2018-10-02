import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src/components/Header/Header';

const stories = storiesOf('Header', module);

function buildHeaders(extra = {}) {
  const children = [];

  for (let i = 1; i < 7; i++) {
    const hSize = `h${i}`

    const props = {
      ...extra,
      key: `h${i}`,
      [hSize]: true,
    };

    children.push(
      <Header {...props}>Header</Header>
    );
  }

  return children;
}

stories
  .add('Basic', () => {
    const headers = buildHeaders();

    return (
      <div>
        {headers}
      </div>
    );
  })
  .add('Inverted', () => {
    const headers = buildHeaders({
      invert: true,
    });

    return (
      <div style={{ background: 'black' }}>
        {headers}
      </div>
    );
  })
  .add('No margin', () => {
    const headers = buildHeaders({
      noMargin: true,
    });

    return (
      <div>
        {headers}
      </div>
    );
  });
