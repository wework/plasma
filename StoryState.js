import { Component } from 'react';
import PropTypes from 'prop-types';

export default class StoryState extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
  };

  state = {};

  render() {
    return this.props.render(this.state, this.setState.bind(this));
  }
}
