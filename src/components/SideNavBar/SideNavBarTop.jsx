// @flow
import React, { type Node } from 'react';
import Icon from '../Icon/Icon';
import style from './style.scss';

type Props = {|
  label: Node,
  icon: string,
  onClick: () => void,
  editing: boolean,
  placeholder: string,
  value: string,
  onChange: ({ value: string }) => void,
  onBlur: () => void,
  fullWidth: boolean,
  className: string,
  forwardedRef?: { current: null | HTMLInputElement },
|};

const SideBarNavTop = ({ onClick, icon }: Props) => {
  return (
    <div className={style.top} onClick={onClick}>
      <div className={style.iconAndLabelContainer}>
        <div className={style.iconWrapper}>
          <Icon color="#fff" icon={icon} />
        </div>
      </div>
    </div>
  );
};

// $FlowFixMe
export default React.forwardRef((props, ref) => <SideBarNavTop {...props} forwardedRef={ref} />);
