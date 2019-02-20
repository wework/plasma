// @flow
import React from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import style from './style.scss';

type Props = {|
  label: string,
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

class SideBarNavTop extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.editing && !prevProps.editing) {
      this.input.current && this.input.current.focus();
    }
  }

  input: { current: null | HTMLInputElement };

  // $FlowFixMe (https://github.com/facebook/flow/issues/6103)
  input = this.props.forwardedRef || React.createRef();

  render() {
    const {
      label,
      onClick,
      icon,
      editing,
      placeholder,
      value,
      onChange,
      onBlur,
      fullWidth,
      className,
    } = this.props;
    return (
      <div className={cn(className, style.top, { [style.fullWidth]: fullWidth })} onClick={onClick}>
        <div className={style.iconAndLabelContainer}>
          <div className={style.iconWrapper}>
            <Icon color="#fff" icon={icon} />
          </div>
          <div className={style.topText}>
            {editing ? (
              <input
                className={style.input}
                value={value}
                // $FlowFixMe (https://github.com/facebook/flow/issues/6103)
                ref={this.input}
                type="text"
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder || label}
              />
            ) : (
              label
            )}
          </div>
        </div>
      </div>
    );
  }
}

// $FlowFixMe
export default React.forwardRef((props, ref) => <SideBarNavTop {...props} forwardedRef={ref} />);
