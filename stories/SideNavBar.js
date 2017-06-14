import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SideNavBar from '../src/components/SideNavBar/SideNavBar';

storiesOf('SideNavBar', module).add('default', () => {
  const items = [
    {
      label: 'Building',
      id: 'building',
      items: [
        {
          label: 'Milestones',
          id: 'milestones',
        },
        {
          label: 'Accounts',
          id: 'accounts',
        },
      ],
    },
    {
      label: 'Inventory',
      id: 'inventory',
      items: [
        {
          label: 'Your inventory',
          id: 'your-inventory',
        },
        {
          label: 'Nearby inventory',
          id: 'nearby-inventory',
        },
      ],
    },
    {
      label: 'Members',
      id: 'members',
      items: [
        {
          label: 'Companies',
          id: 'companies',
        },
        {
          label: 'People',
          id: 'people',
        },
      ],
    },
    {
      label: 'Sales',
      id: 'sales',
      items: [
        {
          label: 'Tours',
          id: 'tours',
        },
        {
          label: 'Waitlist',
          id: 'waitlist',
        },
      ],
    },
  ];
  return (
    <SideNavBar
      items={items}
      onChange={action('selection changed')}
    />
  );
});
