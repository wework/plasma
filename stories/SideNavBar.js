import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import SideNavBar from '../src/components/SideNavBar/SideNavBar';
import locationPin from '../src/icons/locationPin';

class StatefulWrapper extends React.Component {
  constructor() {
    super();
    this.state = { selectedId: null };
  }

  render() {
    return (
      <SideNavBar
        items={this.props.items}
        onChange={event => {
          this.setState({ selectedId: event.id });
        }}
        selectedId={this.state.selectedId}
        topText="Long Building Name"
        topIcon={locationPin}
        data={{ qa: 'test' }}
      />
    );
  }
}

storiesOf('SideNavBar', module)
  .add('default', () => {
    const items = [
      {
        label: 'Building',
        id: 'building',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
    return <StatefulWrapper items={items} />;
  })
  .add('hidden items', () => {
    const items = [
      {
        label: 'Building',
        id: 'building',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
        items: [
          {
            label: 'Tours',
            id: 'tours',
            hidden: true,
          },
          {
            label: 'Waitlist',
            id: 'waitlist',
          },
        ],
      },
    ];
    return <StatefulWrapper items={items} />;
  })
  .add('w/ tag', () => {
    const items = [
      {
        label: 'Building',
        id: 'building',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
        items: [
          {
            label: 'Milestones',
            id: 'milestones',
          },
          {
            label: 'Accounts',
            id: 'accounts',
            tagText: 'WOW',
            linkComponent: <a href="/">Accounts</a>,
          },
        ],
      },
      {
        label: 'Inventory',
        id: 'inventory',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
        items: [
          {
            label: 'Companies',
            id: 'companies',
            tagText: 'NEW',
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
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
        items: [
          {
            label: 'Tours',
            id: 'tours',
            hidden: true,
          },
          {
            label: 'Waitlist',
            id: 'waitlist',
          },
        ],
      },
    ];
    return <StatefulWrapper items={items} />;
  })
  .add('w/ nodes as labels', () => {
    const items = [
      {
        label: <a href="#">Building</a>,
        id: 'building',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
        items: [
          {
            label: 'Milestones',
            id: 'milestones',
          },
          {
            label: 'Accounts',
            id: 'accounts',
            tagText: 'WOW',
            linkComponent: <a href="/">Accounts</a>,
          },
        ],
      },
      {
        label: <a href="#">Inventory</a>,
        id: 'inventory',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
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
        label: <a href="#">Members</a>,
        id: 'members',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
        items: [
          {
            label: 'Companies',
            id: 'companies',
            tagText: 'NEW',
          },
          {
            label: 'People',
            id: 'people',
          },
        ],
      },
      {
        label: <a href="#">Sales</a>,
        id: 'sales',
        icon: 'http://simpleicon.com/wp-content/uploads/rocket.svg',
        items: [
          {
            label: 'Tours',
            id: 'tours',
            hidden: true,
          },
          {
            label: 'Waitlist',
            id: 'waitlist',
          },
        ],
      },
    ];
    return <StatefulWrapper items={items} />;
  });
