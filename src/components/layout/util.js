// @flow
/* eslint-disable */
import React from 'react';

export const getOffsetTop = (elem: {offsetTop: number, offsetParent: Object }) => {
  let offsetTop = 0;
  do {
    if (!isNaN(elem.offsetTop)) {
      offsetTop += elem.offsetTop;
    }
  } while (elem = elem.offsetParent);
  return offsetTop;
};
