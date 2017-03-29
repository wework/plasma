import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Table from '../src/components/Table/Table';

const headerData = [
  { label: 'Header 1', key: 'header1' },
  { label: 'Header 2', key: 'header2' },
  { label: 'Header 3', key: 'header3' },
  { label: 'Header 4', key: 'header4' },
  { label: 'Header 5', key: 'header5' },
];

storiesOf('Table', module).add('default', () => {
  const items = [
    {
      header1: 'Text text text',
      header2: 'Text text text',
      header3: 'Text text text',
      header4: 'Text text text',
      header5: 'Text text text',
    },
    {
      header1: 'Text text text',
      header2: 'Text text text',
      header3: 'Text text text',
      header4: 'Text text text',
      header5: 'Text text text',
    },
  ];

  return (
    <Table
      empty={false}
      emptyText="The table is empty."
      headerData={headerData}
      items={items}
      loading={false}
    />
  );
});

storiesOf('Table', module).add('with a disabled row', () => {
  const items = [
    {
      header1: 'Text text text',
      header2: 'Text text text',
      header3: 'Text text text',
      header4: 'Text text text',
      header5: 'Text text text',
      disabled: true,
    },
    {
      header1: 'Text text text',
      header2: 'Text text text',
      header3: 'Text text text',
      header4: 'Text text text',
      header5: 'Text text text',
    },
  ];

  return (
    <Table
      empty={false}
      emptyText="The table is empty."
      headerData={headerData}
      items={items}
      loading={false}
    />
  );
});
