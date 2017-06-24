import { mapKeys, kebabCase } from 'lodash';

const getDataAttrs = (data) => {
  if (!data) return {};
  return mapKeys(data, (val, key) => `data-${kebabCase(key)}`);
};

export default getDataAttrs;
