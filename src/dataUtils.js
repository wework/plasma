import { mapKeys, kebabCase } from 'lodash';

export const getDataAttrs = (data) => {
  if (!data) return {};
  return mapKeys(data, (val, key) => `data-${kebabCase(key)}`);
};
