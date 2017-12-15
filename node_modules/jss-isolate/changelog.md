## 4.0.0 / 2017-06-20

- support JSS 8

## 3.0.0 / 2017-04-25

- support JSS 7
- improve debounce performance
- added new values for option `isolate`

## 2.1.0 / 2017-01-19

- `jss.use(isolate({isolate: false})` - will not isolate any rule by default, to isolate you will need to set isolate: true on a sheet or on the rule.

- `jss.use(isolate({isolate: 'root'})` - will isolate automatically only rules with name "root" or any other name you want to use. This allows children in this component to inherit inheritable values, but components which have own roots will be isolated, so that inheritance doesn't spread to all children.

## 2.0.1 / 2017-01-05

- fixed isolate: false with jss-nested (cssinjs/jss#401)

## 2.0.0 / 2016-12-09

- update jss to 6.0

## 1.0.3 / 2016-11-23

- support jss.createRule(styles) without a sheet

## 1.0.2 / 2016-11-05

- cleanup DOM after tests

## 1.0.1 / 2016-11-05

- update deps
- migrate tests

## 1.0.0 / 2016-08-01

- update to jss 5
- update dev deps

## 0.1.0 / 2016-04-08

- First plugin release. Let the Party BigInt!
