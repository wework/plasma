import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import style from "./style.scss";
import { getDataAttrs, getDataProps } from "../../dataUtils";

class Text extends React.Component {
  render() {
    const { large } = this.props;
    return (
      <div
        {...getDataAttrs(this.props.data)}
        className={cn(style.wrapper, { [style.large]: large })}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}

Text.defaultProps = {
  style: { width: 200, height: "auto" }
};

Text.propTypes = {
  style: PropTypes.object,
  children: PropTypes.element,
  large: PropTypes.bool,
  ...getDataProps()
};

Text.displayName = "Plasma@Text";

export default Text;
