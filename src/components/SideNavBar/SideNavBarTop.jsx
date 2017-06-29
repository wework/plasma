import React, { PropTypes } from 'react';
import Icon from '../Icon/Icon';
import locationPin from '../Icon/icons/locationPin';
import style from './style.scss';

const SideBarNavTop = ({ label, onClick }) => {
  return (
    <div
      className={style.top}
      onClick={onClick}
    >
      <div className={style.iconAndLabelContainer}>
        <div className={style.iconWrapper}>
          <Icon
            color="#fff"
            icon={locationPin}
          />
        </div>
        <div className={style.groupLabelWrapper}>
          {label}
        </div>
      </div>
    </div>
  );
};

SideBarNavTop.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

export default SideBarNavTop;
