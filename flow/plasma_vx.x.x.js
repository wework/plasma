// flow-typed version: <<STUB>>/@wework-dev/plasma_v0.1.8/flow_v0.107.0

declare module '@wework-dev/plasma' {
  // @flow
  declare export type Data = {
    [key: string]: string,
  };

  declare export type GlobalAttributes = {|
    className?: string,
    hidden?: boolean,
    id?: string,
    tabIndex?: string | number,
    title?: string,
  |};

  // Event handlers

  declare export type SyntheticInputEventHandler<T: EventTarget = EventTarget> = (
    SyntheticInputEvent<T>
  ) => void;

  declare export type SyntheticMouseEventHandler<T: EventTarget = EventTarget> = (
    SyntheticMouseEvent<T>
  ) => void;

  declare export type SyntheticKeyboardEventHandler<T: EventTarget = EventTarget> = (
    SyntheticKeyboardEvent<T>
  ) => void;

  declare export type SyntheticFocusEventHandler<T: EventTarget = EventTarget> = (
    SyntheticFocusEvent<T>
  ) => void;

  // Common event handler props

  declare export type ChangeEventHanlders<T: EventTarget = EventTarget> = {|
    onChange?: SyntheticInputEventHandler<T>,
  |};

  declare export type MouseEventHandlers<T: EventTarget = EventTarget> = {|
    onClick?: SyntheticMouseEventHandler<T>,
    // onContextMenu
    onDoubleClick?: SyntheticMouseEventHandler<T>,
    // onDrag
    // onDragEnd
    // onDragEnter
    // onDragExit
    // onDragLeave
    // onDragOver
    // onDragStart
    // onDrop
    onMouseDown?: SyntheticMouseEventHandler<T>,
    onMouseEnter?: SyntheticMouseEventHandler<T>,
    onMouseLeave?: SyntheticMouseEventHandler<T>,
    onMouseMove?: SyntheticMouseEventHandler<T>,
    onMouseOut?: SyntheticMouseEventHandler<T>,
    onMouseOver?: SyntheticMouseEventHandler<T>,
    onMouseUp?: SyntheticMouseEventHandler<T>,
  |};

  declare export type KeyboardEventHandlers<T: EventTarget = EventTarget> = {|
    onKeyDown?: SyntheticKeyboardEventHandler<T>,
    onKeyPress?: SyntheticKeyboardEventHandler<T>,
    onKeyUp?: SyntheticKeyboardEventHandler<T>,
  |};

  declare export type FocusEventHandlers<T: EventTarget = EventTarget> = {|
    onFocus?: SyntheticFocusEventHandler<T>,
    onBlur?: SyntheticFocusEventHandler<T>,
  |};

  declare export type StyleAttributes = { [string]: string | number };

  declare export class CountedTextInput extends React$Component<{
    ...$PropertyType<TextInput, 'props'>,
    counterClassName?: string,
  }> {}
  declare export class CountedTextArea extends React$Component<{
    ...$PropertyType<TextArea, 'props'>,
    counterClassName?: string,
  }> {}

  declare export var LocationPin: string;
}

declare module '@wework-dev/plasma/lib/components/Button/Button' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Button'>;
}

declare module '@wework-dev/plasma/lib/components/Button/Button' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Button'>;
}

declare module '@wework-dev/plasma/lib/components/Button/Button' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Button'>;
}

declare module '@wework-dev/plasma/lib/components/Button/Button' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Button'>;
}

declare module '@wework-dev/plasma/lib/components/Button/Button' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Button'>;
}

declare module '@wework-dev/plasma/lib/components/Button/Button' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Button'>;
}

declare module '@wework-dev/plasma/lib/components/Card/Card' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Card'>;
}

declare module '@wework-dev/plasma/lib/components/Checkbox/Checkbox' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Checkbox'>;
}

declare module '@wework-dev/plasma/lib/components/CollapsibleCard/CollapsibleCard' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'CollapsibleCard'>;
}

declare module '@wework-dev/plasma/lib/components/Header/Header' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Header'>;
}

declare module '@wework-dev/plasma/lib/components/Hint/Hint' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Hint'>;
}

declare module '@wework-dev/plasma/lib/components/Hint/Hint' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Hint'>;
}

declare module '@wework-dev/plasma/lib/components/Icon/Icon' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Icon'>;
}

declare module '@wework-dev/plasma/lib/components/Image/Image' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Image'>;
}

declare module '@wework-dev/plasma/lib/components/Label/Label' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Label'>;
}

declare module '@wework-dev/plasma/lib/components/Loader/Loader' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Loader'>;
}

declare module '@wework-dev/plasma/lib/components/Modal/Modal' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Modal'>;
}

declare module '@wework-dev/plasma/lib/components/NumberInput/NumberInput' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'NumberInput'>;
}

declare module '@wework-dev/plasma/lib/components/OverflowMenu/OverflowMenu' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OverflowMenu'>;
}

declare module '@wework-dev/plasma/lib/components/OverflowMenu/OverflowMenuItem' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OverflowMenuItem'>;
}

declare module '@wework-dev/plasma/lib/components/RadioButton/RadioButton' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'RadioButton'>;
}

declare module '@wework-dev/plasma/lib/components/RadioButtonGroup/RadioButtonGroup' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'RadioButtonGroup'>;
}

declare module '@wework-dev/plasma/lib/components/Rule/Rule' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Rule'>;
}

declare module '@wework-dev/plasma/lib/components/Search/Search' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Search'>;
}

declare module '@wework-dev/plasma/lib/components/SegmentedCard/SegmentedCard' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SegmentedCard'>;
}

declare module '@wework-dev/plasma/lib/components/Select/Select' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Select'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/OldSideNavBar' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OldSideNavBar'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/OldSideNavBarItem' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OldSideNavBarItem'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBar' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBar'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBarItem' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBarItem'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBarItemGroup' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBarItemGroup'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBarTop' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBarTop'>;
}

declare module '@wework-dev/plasma/lib/components/Table/Table' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Table'>;
}

declare module '@wework-dev/plasma/lib/components/Tabs/Tabs' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tabs'>;
}

declare module '@wework-dev/plasma/lib/components/Tag/Tag' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tag'>;
}

declare module '@wework-dev/plasma/lib/components/Tag/Tag' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tag'>;
}

declare module '@wework-dev/plasma/lib/components/Text/Text' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Text'>;
}

declare module '@wework-dev/plasma/lib/components/TextArea/TextArea' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TextArea'>;
}

declare module '@wework-dev/plasma/lib/components/TextInput/TextInput' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TextInput'>;
}

declare module '@wework-dev/plasma/lib/components/TimePicker/TimePicker' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TimePicker'>;
}

declare module '@wework-dev/plasma/lib/components/Toggle/Toggle' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Toggle'>;
}

declare module '@wework-dev/plasma/lib/components/Tooltip/Tooltip' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tooltip'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedLeft/FixedLeft' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedLeft'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedRight/FixedRight' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedRight'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedTop/FixedTop' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedTop'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FormField/FormField' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FormField'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FormField/FormField' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FormField'>;
}

declare module '@wework-dev/plasma/lib/components/layout/Group/Group' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Group'>;
}

declare module '@wework-dev/plasma/lib/components/layout/HorizontalScroll/HorizontalScroll' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'HorizontalScroll'>;
}

declare module '@wework-dev/plasma/lib/components/layout/Page/Page' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Page'>;
}
