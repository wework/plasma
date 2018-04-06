import PropTypes from 'prop-types';
import { mapKeys, kebabCase } from 'lodash';

export const getDataAttrs = (data) => {
  if (!data) return {};
  return mapKeys(data, (val, key) => `data-${kebabCase(key)}`);
};

export const getDataProps = function getDataProps() {
  return {
    data: PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  };
};
