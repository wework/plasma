import { kebabCase, mapKeys } from 'lodash';

const getDataAttrs = (props = {}) => {
  const { data } = props;
  if (!data) return {};
  return mapKeys(data, (val, key) => `data-${kebabCase(key)}`);
};

export default getDataAttrs;
