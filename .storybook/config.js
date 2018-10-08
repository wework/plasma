import { configure, getStorybook, setAddon } from '@storybook/react';

import createPercyAddon from '@percy-io/percy-storybook';

const { percyAddon, serializeStories } = createPercyAddon();

setAddon(percyAddon);

const req = require.context('../stories', true, /\.jsx?$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
serializeStories(getStorybook);
