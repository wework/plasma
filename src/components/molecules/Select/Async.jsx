/*eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]*/

import React from 'react';

import Select from './Select.jsx';
import stripDiacritics from './utils/stripDiacritics';

let requestId = 0;

function initCache(cache) {
  if (cache && typeof cache !== 'object') {
    cache = {};
  }
  return cache || null;
}

function updateCache(cache, input, data) {
  if (!cache) return;
  cache[input] = data;
}

function getFromCache(cache, input) {
  if (!cache) return null;
  for (let i = input.length; i >= 0; --i) {
    const cacheKey = input.slice(0, i);
    if (cache[cacheKey] && (input === cacheKey || cache[cacheKey].complete)) {
      return cache[cacheKey];
    }
  }
  return null;
}

function thenPromise(promise, callback) {
  if (!promise || typeof promise.then !== 'function') return null;
  return promise.then((data) => {
    callback(null, data);
  }, (err) => {
    callback(err);
  });
}

const stringOrNode = React.PropTypes.oneOfType([
  React.PropTypes.string,
  React.PropTypes.node,
]);

const Async = React.createClass({

  displayName: 'Molecule.Async',

  propTypes: {
    // object to use to cache results, can be null to disable cache
    cache: React.PropTypes.any,
    // whether to strip diacritics when filtering (shared with Select)
    ignoreAccents: React.PropTypes.bool,
    // whether to perform case-insensitive filtering (shared with Select)
    ignoreCase: React.PropTypes.bool,
    // overrides the isLoading state when set to true
    isLoading: React.PropTypes.bool,
    // function to call to load options asynchronously
    loadOptions: React.PropTypes.func.isRequired,
    // replaces the placeholder while options are loading
    loadingPlaceholder: React.PropTypes.string,
    // the minimum number of characters that trigger loadOptions
    minimumInput: React.PropTypes.number,
    // placeholder displayed when there are no matching search results (shared with Select)
    noResultsText: stringOrNode,
    // onInputChange handler: function (inputValue) {}
    onInputChange: React.PropTypes.func,
    // field placeholder, displayed when there's no value (shared with Select)
    placeholder: stringOrNode,
    // label to prompt for search input
    searchPromptText: stringOrNode,
    // message to display while options are loading
    searchingText: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      cache: true,
      ignoreAccents: true,
      ignoreCase: true,
      loadingPlaceholder: 'Loading...',
      minimumInput: 0,
      searchingText: 'Searching...',
      searchPromptText: 'Type to search',
    };
  },

  getInitialState() {
    return {
      cache: initCache(this.props.cache),
      isLoading: false,
      options: [],
    };
  },

  componentWillMount() {
    this._lastInput = '';
  },

  componentDidMount() {
    this.loadOptions('');
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.cache !== this.props.cache) {
      this.setState({
        cache: initCache(nextProps.cache),
      });
    }
  },

  getResponseHandler(input) {
    let _requestId = this._currentRequestId = requestId++;
    return (err, data) => {
      if (err) throw err;
      if (!this.isMounted()) return;
      updateCache(this.state.cache, input, data);
      if (_requestId !== this._currentRequestId) return;
      this.setState({
        isLoading: false,
        options: data && data.options || [],
      });
    };
  },

  focus() {
    this.refs.select.focus();
  },

  resetState() {
    this._currentRequestId = -1;
    this.setState({
      isLoading: false,
      options: [],
    });
  },

  loadOptions(input) {
    if (this.props.onInputChange) {
      const nextState = this.props.onInputChange(input);
      // Note: != used deliberately here to catch undefined and null
      if (nextState != null) {
        input = '' + nextState;
      }
    }
    if (this.props.ignoreAccents) input = stripDiacritics(input);
    if (this.props.ignoreCase) input = input.toLowerCase();

    this._lastInput = input;
    if (input.length < this.props.minimumInput) {
      return this.resetState();
    }
    const cacheResult = getFromCache(this.state.cache, input);
    if (cacheResult) {
      return this.setState({
        options: cacheResult.options,
      });
    }
    this.setState({
      isLoading: true,
    });
    const responseHandler = this.getResponseHandler(input);
    const inputPromise =
      thenPromise(this.props.loadOptions(input, responseHandler), responseHandler);
    return inputPromise ? inputPromise.then(() => input) : input;
  },

  render() {
    let { noResultsText } = this.props;
    let { isLoading, options } = this.state;
    if (this.props.isLoading) isLoading = true;
    let placeholder = isLoading ? this.props.loadingPlaceholder : this.props.placeholder;
    if (isLoading) {
      noResultsText = this.props.searchingText;
    } else if (!options.length && this._lastInput.length < this.props.minimumInput) {
      noResultsText = this.props.searchPromptText;
    }
    return (
      <Select
        {...this.props}
        ref="select"
        isLoading={isLoading}
        noResultsText={noResultsText}
        onInputChange={this.loadOptions}
        options={options}
        placeholder={placeholder}
      />
    );
  },
});

module.exports = Async;
