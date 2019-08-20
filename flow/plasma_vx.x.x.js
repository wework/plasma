// flow-typed version: <<STUB>>/@wework-dev/plasma_v0.1.4/flow_v0.105.2

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

  // source file: src/components/Icon/Icon.jsx
  declare export class Icon extends React$Component<{|
    color: string,
    data?: Data,
    icon: string,
    size?: number,
  |}> {}

  // source file: src/components/SegmentedCard/SegmentedCard.jsx
  declare export class SegmentedCard extends React$Component<{|
    children: React$Node,
    data?: Data,
    style: any,
    vertical: Boolean,
  |}> {}

  // source file: src/components/Button/Button.jsx
  declare export class Button extends React$Component<{|
    autofocus?: boolean,
    children?: React$Node,
    className?: string,
    data?: Data,
    disabled?: boolean,
    hidden?: boolean,
    id?: string,
    isSubmit?: boolean,
    label?: string,
    loading?: boolean,
    name?: string,
    onClick?: (evt: MouseEvent) => void,
    size?: $Values<{| SMALL: string |}>,
    style?: { [key: string]: any },
    tabIndex?: number,
    title?: string,
    type?: $Values<{| PRIMARY: string, SECONDARY: string, TERTIARY: string |}>,
    value?: string,
  |}> {}

  // source file: src/components/TextArea/TextArea.jsx
  declare export class TextArea extends React$Component<{|
    autosize: boolean,
    data?: Data,
    disabled: boolean,
    error: boolean,
    maxLength: string | number,
    onBlur: () => void,
    onChange: () => void,
    onFocus: () => void,
    placeholder: string,
    rows: string,
    size: string,
    value: string,
  |}> {}

  // source file: src/components/SideNavBar/SideNavBarItemGroup.jsx
  declare export class SideNavBarItemGroup extends React$Component<{|
    darkBg?: boolean,
    icon?: string,
    iconSize: number,
    iconStyle?: any,
    id: string,
    items?: Array<Item>,
    label: React$Node,
    onClick?: ({ id: string }) => mixed,
    selectedId?: string,
  |}> {}

  // source file: src/components/OverflowMenu/OverflowMenu.jsx
  declare export class OverflowMenu extends React$Component<{|
    data?: Data,
    disabled?: boolean,
    label?: string,
    onClick: string => void,
    openDirection?: $Values<{| LEFT: string, RIGHT: string |}>,
    options: Array<{| key: string, text: string |}>,
  |}> {}

  // source file: src/components/Select/Select.jsx
  declare export class Select extends React$Component<{}> {}

  // source file: src/components/Image/Image.jsx
  declare export class Image extends React$Component<{|
    altText?: string,
    className?: string,
    data?: Data,
    fallback?: string,
    imageStyle?: StyleAttributes,
    onClick?: (evt: MouseEvent) => void,
    onLoad?: (evt: MouseEvent) => void,
    src: string,
    style?: StyleAttributes,
  |}> {}

  // source file: src/components/OverflowMenu/OverflowMenu.jsx

  // source file: src/components/TextInput/TextInput.jsx
  declare export class TextInput extends React$Component<{|
    value?: string,
    type?: 'text' | 'password' | 'email' | 'url',
    suffix?: React$Node,
    prefix?: React$Node,
    placeholder?: string,
    onClick?: SyntheticMouseEventHandler<HTMLInputElement>,
    name?: string,
    maxLength?: number | string,
    error?: boolean,
    disabled?: boolean,
    data?: Data,
    ...FocusEventHandlers<HTMLInputElement>,
    ...ChangeEventHanlders<HTMLInputElement>,
    ...GlobalAttributes,
  |}> {}

  // source file: src/components/SideNavBar/SideNavBarTop.jsx
  declare export class SideNavBarTop extends React$Component<{|
    className?: string,
    editing?: boolean,
    forwardedRef?: { current: null | HTMLInputElement },
    fullWidth?: boolean,
    icon: string,
    label: React$Node,
    onBlur?: (SyntheticFocusEvent<>) => void,
    onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
    onClick: (SyntheticMouseEvent<>) => void,
    placeholder?: string,
    value?: string,
  |}> {}

  // source file: src/components/Card/Card.jsx
  declare export class Card extends React$Component<{|
    actions?: Array<any>,
    borderColor?: $Values<{| RED: string |}>,
    borderType?: string,
    children?: React$Node,
    data?: Data,
    expandedComponent?: React$Node,
    isExpanded?: boolean,
    minWidth?: number,
    onClick?: (evt: MouseEvent) => void,
    title?: string,
    type?: $Values<{| CONDENSED: string, REGULAR: string |}>,
  |}> {}

  // source file: src/components/layout/FixedRight/FixedRight.jsx

  // source file: src/components/Image/Image.jsx

  // source file: src/components/SideNavBar/OldSideNavBar.jsx
  declare export class OldSideNavBar extends React$Component<{| children: React$Node |}> {}

  // source file: src/components/RadioButton/RadioButton.jsx
  declare export class RadioButton extends React$Component<{|
    checked?: boolean,
    data?: Data,
    description?: ?string,
    disabled?: ?boolean,
    fancy?: ?boolean,
    fieldValue?: string,
    icon?: ?string,
    id?: string,
    isLarge?: ?boolean,
    name: string,
    onChange: (event: SyntheticEvent<HTMLInputElement>) => mixed,
    text: string,
    value?: string,
  |}> {}

  // source file: src/components/Toggle/Toggle.jsx
  declare export class Toggle extends React$Component<{|
    className?: string,
    data?: Data,
    items: Array<{ disabled?: boolean, label: string, title: string }>,
    onChange: (string, number) => void,
    selectedIndex?: number,
    selectedLabel: string,
    size?: string,
    type: string,
  |}> {}

  // source file: src/components/Card/Card.jsx

  // source file: src/components/layout/FixedRight/FixedRight.jsx
  declare export class FixedRight extends React$Component<{|
    children: React$Node,
    data?: Data,
    fixedContainerStyle: any,
    stickAt: number,
  |}> {}

  // source file: src/components/Label/Label.jsx
  declare export class Label extends React$Component<{|
    text?: string,
    required?: boolean,
    inline?: boolean,
    htmlFor?: string,
    disabled?: boolean,
    data?: Data,
    children?: React$Node,
    ...GlobalAttributes,
  |}> {}

  // source file: src/components/SideNavBar/OldSideNavBarItem.jsx
  declare export class OldSideNavBarItem extends React$Component<{|
    children: React$Node,
    darkBg: boolean,
    icon: string,
    iconSize: number,
    iconStyle: any,
    label: string,
    onClick: () => mixed,
    selected: boolean,
  |}> {}

  // source file: src/components/Table/Table.jsx
  // source file: src/components/OverflowMenu/OverflowMenuItem.jsx
  declare export class OverflowMenuItem extends React$Component<{
    onClick: string => void,
    optionKey: string,
    text: string,
  }> {}

  declare export class Table extends React$Component<{|
    clickable?: boolean,
    data?: Data,
    empty: boolean,
    emptyText: React$Node,
    headerData: Array<any>,
    highlightable?: boolean,
    items: ?Array<any>,
    loading: boolean,
    onSort?: string => void,
    selectedColumnKey?: string,
    sort?: { key: string, order: string },
    spanMap?: any,
    stickAt?: number,
    style?: StyleAttributes,
  |}> {}

  // source file: src/components/Checkbox/Checkbox.jsx
  declare export class Checkbox extends React$Component<{|
    checked?: boolean,
    data?: Data,
    description?: string,
    disabled?: boolean,
    fancy?: boolean,
    icon?: string,
    id?: string,
    indeterminate?: boolean,
    isBold?: boolean,
    name?: string,
    onBlur?: () => mixed,
    onChange?: () => mixed,
    text: React$Node,
    value?: boolean,
  |}> {}

  // source file: src/components/Loader/Loader.jsx
  declare export class Loader extends React$Component<{|
    className?: string,
    data?: Data,
    dotClassName?: string,
    dotColor?: string,
    dotStyle?: StyleAttributes,
    style?: StyleAttributes,
  |}> {}

  // source file: src/components/layout/FixedTop/FixedTop.jsx

  // source file: src/components/TimePicker/TimePicker.jsx
  declare type TimeFormatType = $Values<{| timeFormat12: string, timeFormat24: string |}>;

  // source file: src/components/SideNavBar/SideNavBar.jsx
  declare type Item = {|
    hidden?: boolean,
    icon?: string,
    id: string,
    items?: Array<Item>,
    label: string,
    linkComponent?: React$Node,
    tagText?: string,
  |};

  // source file: src/components/Table/Table.jsx

  // source file: src/components/RadioButtonGroup/RadioButtonGroup.jsx
  declare type Option = {|
    description?: string,
    disabled?: boolean,
    icon?: string,
    label: string,
    value: string,
  |};

  // source file: src/components/CollapsibleCard/CollapsibleCard.jsx
  declare export class CollapsibleCard extends React$Component<{|
    children: React$Node,
    collapsibleText: React$Node,
    disabled: boolean,
    headerText: React$Node,
    isCollapsed: boolean,
    styleColor: $Values<{| RED: string |}>,
  |}> {}

  // source file: src/components/layout/FixedTop/FixedTop.jsx
  declare export class FixedTop extends React$Component<{|
    backgroundColor: string,
    children: React$Node,
    data?: Data,
  |}> {}

  // source file: src/components/TimePicker/TimePicker.jsx
  declare type DefaultOption = $Values<{| minimum: string, nextInterval: string |}>;

  // source file: src/components/SideNavBar/SideNavBar.jsx
  declare export class SideNavBar extends React$Component<{|
    data?: Data,
    editingTopText?: boolean,
    items: Array<Item>,
    onBlurTop?: () => void,
    onChange?: ({ id: number }) => void,
    onClickTop?: () => void,
    onTopTextChange?: ({ value: string }) => void,
    selectedId?: string,
    topIcon?: string,
    topText?: string,
    topTextValue?: string,
  |}> {}

  // source file: src/components/NumberInput/NumberInput.jsx
  declare type HandleEvent = {|
    nativeEvent: { target: { value: any } },
    target: { parentElement: { classList: { add: string => mixed, remove: string => mixed } } },
  |};

  // source file: src/components/RadioButtonGroup/RadioButtonGroup.jsx
  declare export class RadioButtonGroup extends React$Component<{|
    fancy?: boolean,
    isLarge?: boolean,
    name: string,
    onChange: () => mixed,
    options: Array<Option>,
    value?: string,
  |}> {}

  // source file: src/components/Tabs/Tabs.jsx
  declare type Tab = {| label: string, title: React$Node |};

  // source file: src/components/CollapsibleCard/CollapsibleCard.jsx

  // source file: src/components/TimePicker/TimePicker.jsx
  declare type TimeOption = {| label: string, value: string |};

  // source file: src/components/layout/Group/Group.jsx
  declare export class Group extends React$Component<{|
    children: React$Node,
    data?: Data,
    layout: Array<any>,
    style?: StyleAttributes,
    vertical?: boolean,
  |}> {}

  // source file: src/components/NumberInput/NumberInput.jsx
  declare export class NumberInput extends React$Component<{|
    data?: Data,
    disabled?: boolean,
    error?: boolean,
    maxValue: number,
    minValue: number,
    onBlur?: HandleEvent => void,
    onChange: HandleEvent => void,
    onFocus?: HandleEvent => void,
    placeholder?: string,
    step: number,
    value: string,
  |}> {}

  // source file: src/components/SideNavBar/SideNavBarItem.jsx
  declare export class SideNavBarItem extends React$Component<{|
    children?: React$Node,
    darkBg?: boolean,
    icon?: string,
    iconSize: number,
    iconStyle?: any,
    id: string,
    label: React$Node,
    linkComponent: ?React$Node,
    onClick: string => mixed,
    selected: boolean,
    tagText: ?string,
  |}> {}

  // source file: src/components/Rule/Rule.jsx
  declare export class Rule extends React$Component<{|
    data?: Data,
    type?: string,
    withTopMargin?: boolean,
  |}> {}

  // source file: src/components/Tabs/Tabs.jsx
  declare export class Tabs extends React$Component<{|
    data?: Data,
    items: Array<Tab>,
    onChange?: (string, number) => void,
    plain?: string,
    selectedIndex?: number,
    selectedLabel?: string,
    vertical?: boolean,
  |}> {}

  // source file: src/components/Header/Header.jsx
  declare export class Header extends React$Component<{|
    children?: React$Node,
    data?: Data,
    h1?: boolean,
    h2?: boolean,
    h3?: boolean,
    h4?: boolean,
    h5?: boolean,
    h6?: boolean,
    invert?: boolean,
    noMargin?: boolean,
    style?: StyleAttributes,
    text?: string,
    underline?: boolean,
  |}> {}

  // source file: src/components/TimePicker/TimePicker.jsx
  declare export class TimePicker extends React$Component<{|
    value?: string,
    timeIntervalMinutes?: number,
    timeFormat: TimeFormatType,
    required?: boolean,
    placeholder?: string,
    onFocus?: SyntheticFocusEventHandler<>,
    onChange?: string => void,
    onBlur?: (?string) => void,
    name?: string,
    minTime?: string,
    menuIsOpen?: boolean,
    maxTime?: string,
    error?: boolean,
    disabled?: boolean,
    defaultOption?: DefaultOption,
    className?: string,
    borderless?: boolean,
    ...GlobalAttributes,
  |}> {
    static DefaultOptions: any;
    static FormatTypes: any;
  }

  // source file: src/components/layout/FormField/FormField.jsx
  declare export class FormField extends React$Component<{|
    children: React$Node,
    data?: any,
    displayError?: boolean,
    errorMessage?: string,
    isDisabled?: boolean,
    isRequired?: boolean,
    label: string,
    style?: StyleAttributes,
  |}> {}

  // source file: src/components/Modal/Modal.jsx
  declare export class Modal extends React$Component<{|
    actions?: Array<Node>,
    children: React$Node,
    contentClassName?: string,
    data?: Data,
    innerCardStyle?: StyleAttributes,
    maxWidth?: string | number,
    minWidth?: string | number,
    onDismiss?: (evt: MouseEvent) => void,
    title?: string,
    visible?: boolean,
  |}> {}

  // source file: src/components/Tag/Tag.jsx
  declare export class Tag extends React$Component<{|
    children?: React$Node,
    className?: string,
    data?: Data,
    text: React$Node,
  |}> {}

  // source file: src/components/Search/Search.jsx
  declare export class Search extends React$Component<{|
    autoFocus?: boolean,
    clearIconUrl?: string,
    clearable?: boolean,
    data?: Data,
    disabled?: boolean,
    iconUrl: string,
    instructionText?: string,
    onChange?: (event: SyntheticEvent<HTMLInputElement>) => void,
    onClear?: (event: SyntheticEvent<HTMLInputElement>) => void,
    onKeyDown?: (event: SyntheticKeyboardEvent<HTMLInputElement>) => void,
    placeholder?: string,
    value?: string,
  |}> {}

  // source file: src/components/Hint/Hint.jsx
  declare export class Hint extends React$Component<{|
    text?: string,
    error?: boolean,
    disabled?: boolean,
    data?: Data,
    children?: React$Node,
    ...GlobalAttributes,
  |}> {}

  // source file: src/components/TimePicker/TimePicker.jsx

  // source file: src/components/layout/Page/Page.jsx
  declare export class Page extends React$Component<{|
    actions: Array<any>,
    breadcrumb: React$Node,
    children: React$Node,
    data?: Data,
    title: string,
  |}> {}

  // source file: src/components/Text/Text.jsx
  declare export class Text extends React$Component<{|
    children: React$Node,
    data?: Data,
    large?: boolean,
    style?: StyleAttributes,
    type?: string,
  |}> {}

  // source file: src/components/Search/Search.jsx

  // source file: src/components/Tooltip/Tooltip.jsx
  declare export class Tooltip extends React$Component<{|
    children: React$Node,
    content: React$Node,
    data?: Data,
  |}> {}

  // source file: src/components/layout/HorizontalScroll/HorizontalScroll.jsx
  declare export class HorizontalScroll extends React$Component<{|
    children: React$Node,
    data?: Data,
    onScroll: (evt: MouseEvent) => void,
    style: any,
  |}> {}

  // source file: src/components/layout/FixedLeft/FixedLeft.jsx

  // source file: src/components/layout/FixedLeft/FixedLeft.jsx
  declare export class FixedLeft extends React$Component<{|
    children: React$Node,
    contentStyle?: any,
    data?: Data,
    fixedStyle?: any,
    stickAt?: number,
  |}> {}

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

declare module '@wework-dev/plasma/lib/components/Icon/Icon' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Icon'>;
}

declare module '@wework-dev/plasma/lib/components/Image/Image' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Image'>;
}

declare module '@wework-dev/plasma/lib/components/Image/Image' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Image'>;
}

declare module '@wework-dev/plasma/lib/components/SegmentedCard/SegmentedCard' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SegmentedCard'>;
}

declare module '@wework-dev/plasma/lib/components/Select/Select' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Select'>;
}

declare module '@wework-dev/plasma/lib/components/Loader/Loader' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Loader'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/OldSideNavBar' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OldSideNavBar'>;
}

declare module '@wework-dev/plasma/lib/components/Button/Button' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Button'>;
}

declare module '@wework-dev/plasma/lib/components/Label/Label' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Label'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBarItemGroup' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBarItemGroup'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedRight/FixedRight' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedRight'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedRight/FixedRight' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedRight'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/OldSideNavBarItem' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OldSideNavBarItem'>;
}

declare module '@wework-dev/plasma/lib/components/OverflowMenu/OverflowMenu' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OverflowMenu'>;
}

declare module '@wework-dev/plasma/lib/components/OverflowMenu/OverflowMenu' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OverflowMenu'>;
}

declare module '@wework-dev/plasma/lib/components/OverflowMenu/OverflowMenuItem' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'OverflowMenuItem'>;
}

declare module '@wework-dev/plasma/lib/components/TextArea/TextArea' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TextArea'>;
}

declare module '@wework-dev/plasma/lib/components/NumberInput/NumberInput' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'NumberInput'>;
}

declare module '@wework-dev/plasma/lib/components/NumberInput/NumberInput' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'NumberInput'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBarTop' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBarTop'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedTop/FixedTop' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedTop'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedTop/FixedTop' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedTop'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBar' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBar'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBar' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBar'>;
}

declare module '@wework-dev/plasma/lib/components/Tag/Tag' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tag'>;
}

declare module '@wework-dev/plasma/lib/components/Modal/Modal' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Modal'>;
}

declare module '@wework-dev/plasma/lib/components/Card/Card' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Card'>;
}

declare module '@wework-dev/plasma/lib/components/Card/Card' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Card'>;
}

declare module '@wework-dev/plasma/lib/components/TextInput/TextInput' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TextInput'>;
}

declare module '@wework-dev/plasma/lib/components/RadioButton/RadioButton' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'RadioButton'>;
}

declare module '@wework-dev/plasma/lib/components/SideNavBar/SideNavBarItem' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'SideNavBarItem'>;
}

declare module '@wework-dev/plasma/lib/components/layout/Group/Group' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Group'>;
}

declare module '@wework-dev/plasma/lib/components/RadioButtonGroup/RadioButtonGroup' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'RadioButtonGroup'>;
}

declare module '@wework-dev/plasma/lib/components/RadioButtonGroup/RadioButtonGroup' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'RadioButtonGroup'>;
}

declare module '@wework-dev/plasma/lib/components/Checkbox/Checkbox' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Checkbox'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FormField/FormField' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FormField'>;
}

declare module '@wework-dev/plasma/lib/components/Rule/Rule' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Rule'>;
}

declare module '@wework-dev/plasma/lib/components/Toggle/Toggle' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Toggle'>;
}

declare module '@wework-dev/plasma/lib/components/layout/HorizontalScroll/HorizontalScroll' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'HorizontalScroll'>;
}

declare module '@wework-dev/plasma/lib/components/CollapsibleCard/CollapsibleCard' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'CollapsibleCard'>;
}

declare module '@wework-dev/plasma/lib/components/CollapsibleCard/CollapsibleCard' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'CollapsibleCard'>;
}

declare module '@wework-dev/plasma/lib/components/layout/Page/Page' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Page'>;
}

declare module '@wework-dev/plasma/lib/components/Header/Header' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Header'>;
}

declare module '@wework-dev/plasma/lib/components/Search/Search' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Search'>;
}

declare module '@wework-dev/plasma/lib/components/Search/Search' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Search'>;
}

declare module '@wework-dev/plasma/lib/components/Hint/Hint' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Hint'>;
}

declare module '@wework-dev/plasma/lib/components/TimePicker/TimePicker' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TimePicker'>;
}

declare module '@wework-dev/plasma/lib/components/TimePicker/TimePicker' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TimePicker'>;
}

declare module '@wework-dev/plasma/lib/components/TimePicker/TimePicker' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TimePicker'>;
}

declare module '@wework-dev/plasma/lib/components/TimePicker/TimePicker' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TimePicker'>;
}

declare module '@wework-dev/plasma/lib/components/TimePicker/TimePicker' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'TimePicker'>;
}

declare module '@wework-dev/plasma/lib/components/Tooltip/Tooltip' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tooltip'>;
}

declare module '@wework-dev/plasma/lib/components/Table/Table' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Table'>;
}

declare module '@wework-dev/plasma/lib/components/Table/Table' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Table'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedLeft/FixedLeft' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedLeft'>;
}

declare module '@wework-dev/plasma/lib/components/layout/FixedLeft/FixedLeft' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'FixedLeft'>;
}

declare module '@wework-dev/plasma/lib/components/Tabs/Tabs' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tabs'>;
}

declare module '@wework-dev/plasma/lib/components/Tabs/Tabs' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Tabs'>;
}

declare module '@wework-dev/plasma/lib/components/Text/Text' {
  declare module.exports: $PropertyType<$Exports<'@wework-dev/plasma'>, 'Text'>;
}
