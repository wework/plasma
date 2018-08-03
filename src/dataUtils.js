// @flow
import { mapKeys, kebabCase } from 'lodash';

export const getDataAttrs = (data: ?Object) => {
  if (!data) return {};
  return mapKeys(data, (val, key) => `data-${kebabCase(key)}`);
};
