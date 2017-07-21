import React from 'react';
import { times, cloneDeep } from 'lodash';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Table from '../src/components/Table/Table';

const headerData = [
  { label: 'First name', key: 'firstname' },
  { label: 'Last name', key: 'lastname' },
  { label: 'Age', key: 'age' },
  { label: 'Sex', key: 'sex' },
  { label: 'Location', key: 'location' },
];

storiesOf('Table', module).add('default', () => {
  const items = [
    {
      firstname: 'Brad',
      lastname: 'Pitt',
      age: '45',
      sex: 'Male',
      location: 'Beverly Hills',
    },
    {
      firstname: 'Jennifer',
      lastname: 'Lawrence',
      age: '26',
      sex: 'Female',
      location: 'NYC',
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
      firstname: 'Brad',
      lastname: 'Pitt',
      age: '45',
      sex: 'Male',
      location: 'Beverly Hills',
      disabled: true,
    },
    {
      firstname: 'Jennifer',
      lastname: 'Lawrence',
      age: '26',
      sex: 'Female',
      location: 'NYC',
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

storiesOf('Table', module).add('with explicit column width', () => {
  const items = [];
  times(100, () => {
    items.push(
      {
        firstname: 'Brad',
        lastname: 'Pitt',
        age: '45',
        sex: 'Male',
        location: '149 Bobcat Lane, Beverly Hills, 90210',
      },
    );
  });

  const hd = cloneDeep(headerData);
  hd[4].width = 500;

  return (
    <Table
      empty={false}
      emptyText="The table is empty."
      headerData={hd}
      items={items}
      loading={false}
      stickAt={0}
    />
  );
});

storiesOf('Table', module).add('with 1 spanned column', () => {
  const items = [
    {
      firstname: 'Brad',
      lastname: 'Pitt',
      age: '45',
      sex: 'Male',
      location: [{ location: 'Beverly Hills' }, { location: 'Tokyo' }],
    },
    {
      firstname: 'Jennifer',
      lastname: 'Lawrence',
      age: '26',
      sex: 'Female',
      location: [{ location: 'NYC' }],
    },
  ];

  return (
    <Table
      empty={false}
      emptyText="The table is empty."
      headerData={headerData}
      spanMap={{ location: ['location'] }}
      items={items}
      loading={false}
    />
  );
});

storiesOf('Table', module).add('with 2 spanned columns', () => {
  const items = [
    {
      firstname: 'Brad',
      lastname: 'Pitt',
      age: '45',
      sex: [
        { sex: 'Male', location: 'Beverly Hills' },
        { sex: 'Female', location: 'Tokyo' }],
    },
    {
      firstname: 'Jennifer',
      lastname: 'Lawrence',
      age: '26',
      sex: [
        { sex: 'Male', location: 'Beverly Hills' },
        { sex: 'Female', location: 'Tokyo' }],
    },
  ];

  return (
    <Table
      empty={false}
      emptyText="The table is empty."
      headerData={headerData}
      spanMap={{ sex: ['sex', 'location'] }}
      items={items}
      loading={false}
    />
  );
});

storiesOf('Table', module).add('with 2 spanned middle columns', () => {
  const hd = cloneDeep(headerData);
  hd.push({ label: 'Nickname', key: 'nickname' });

  const items = [
    {
      firstname: 'Brad',
      lastname: 'Pitt',
      age: '45',
      sex: [
        { sex: 'Male', location: 'Beverly Hills' },
        { sex: 'Female', location: 'Tokyo' }],
      nickname: 'The Bulldozer',
    },
    {
      firstname: 'Jennifer',
      lastname: 'Lawrence',
      age: '26',
      sex: [
        { sex: 'Male', location: 'Beverly Hills' },
        { sex: 'Female', location: 'Tokyo' }],
      nickname: 'Slow Loris',
    },
  ];

  return (
    <Table
      empty={false}
      emptyText="The table is empty."
      headerData={hd}
      spanMap={{ sex: ['sex', 'location'] }}
      items={items}
      loading={false}
    />
  );
});

storiesOf('Table', module).add('with condensed column', () => {
  const hd = cloneDeep(headerData);
  hd[2].condensed = true;

  const items = [
    {
      firstname: 'Brad',
      lastname: 'Pitt',
      age: '45',
      sex: 'Male',
      location: 'Beverly Hills',
    },
    {
      firstname: 'Jennifer',
      lastname: 'Lawrence',
      age: '26',
      sex: 'Female',
      location: 'NYC',
    },
  ];

  return (
    <Table
      empty={false}
      emptyText="The table is empty."
      headerData={hd}
      items={items}
      loading={false}
    />
  );
});

