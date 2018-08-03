// @flow
import React from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import style from './style.scss';

type Props = {
  label: string,
  icon: string,
  onClick: () => mixed,
};

const SideBarNavTop = ({ label, onClick, icon }: Props) => {
  return (
    <div
      className={style.top}
      onClick={onClick}
    >
      <div className={style.iconAndLabelContainer}>
        <div className={style.iconWrapper}>
          <Icon
            color="#fff"
            icon={icon}
          />
        </div>
        <div className={cn(style.groupLabelWrapper, style.topText)}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default SideBarNavTop;
