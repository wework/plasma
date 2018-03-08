import React from 'react';
import PropTypes from 'prop-types';

const withCounter = Component => {
  return class extends Component {
    static propTypes = {
      value: PropTypes.string,
      ref: PropTypes.function,
      counterStyle: PropTypes.object,
      maxLength: PropTypes.string,
    };

    constructor(props) {
      super(props);

      this.state = {
        value: props.value || '',
      };
    }

    onChange = () => {
      this.setState({
        value: this.element.value || '',
      });
    };

    render() {
      const props = {
        ...this.props,
        parentRef: el => {
          if (el) {
            this.element = el;
          }
        },
        value: this.state.value,
      };

      if (props.onChange) {
        props.onChange = (originalOnChange => {
          return (...args) => {
            this.onChange();
            return originalOnChange(...args);
          };
        })(props.onChange);
      } else {
        props.onChange = this.onChange;
      }

      return (
        <div>
          <div>
            {this.state.value.length}
            {this.props.maxLength && `/${this.props.maxLength}`} characters
          </div>
          <Component {...props} />
        </div>
      );
    }
  };
};

export default withCounter;
