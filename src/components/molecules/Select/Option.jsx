import React from 'react';
import classNames from 'classnames';

const Option = React.createClass({

  displayName: 'Molecule.Option',

  propTypes: {
    children: React.PropTypes.node,
    // className (based on mouse position)
    className: React.PropTypes.string,
    // unique prefix for the ids (used for aria)
    instancePrefix: React.PropTypes.string.isRequired,
    // the option is disabled
    isDisabled: React.PropTypes.bool,
    // the option is focused
    isFocused: React.PropTypes.bool,
    // the option is selected
    isSelected: React.PropTypes.bool,
    // method to handle mouseEnter on option element
    onFocus: React.PropTypes.func,
    // method to handle click on option element
    onSelect: React.PropTypes.func,
    // method to handle mouseLeave on option element
    onUnfocus: React.PropTypes.func,
    // object that is base for that option
    option: React.PropTypes.object.isRequired,
    // index of the option, used to generate unique ids for aria
    optionIndex: React.PropTypes.number,
  },

  onFocus(event) {
    if (!this.props.isFocused) {
      this.props.onFocus(this.props.option, event);
    }
  },

  handleMouseMove(event) {
    this.onFocus(event);
  },

  handleTouchEnd(event) {
    // Check if the view is being dragged, In this case
    // we don't want to fire the click event (because the user only wants to scroll)
    if (this.dragging) return;

    this.handleMouseDown(event);
  },

  handleTouchMove(event) {
    // Set a flag that the view is being dragged
    this.dragging = true;
  },

  handleTouchStart(event) {
    // Set a flag that the view is not being dragged
    this.dragging = false;
  },

  handleMouseEnter(event) {
    this.onFocus(event);
  },

  handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  },

  blockEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    if ((event.target.tagName !== 'A') || !('href' in event.target)) {
      return;
    }
    if (event.target.target) {
      window.open(event.target.href, event.target.target);
    } else {
      window.location.href = event.target.href;
    }
  },

  render() {
    const { option, instancePrefix, optionIndex } = this.props;
    const className = classNames(this.props.className, option.className);

    return option.disabled ? (
      <div
        className={className}
        onMouseDown={this.blockEvent}
        onClick={this.blockEvent}
      >
        {this.props.children}
      </div>
    ) : (
      <div
        className={className}
        style={option.style}
        role="option"
        onMouseDown={this.handleMouseDown}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        id={`${instancePrefix}-option-${optionIndex}`}
        title={option.title}
      >
        {this.props.children}
      </div>
    );
  },
});

module.exports = Option;
