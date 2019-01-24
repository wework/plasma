// @flow
export type Data = {
  key: string,
  value: string,
};

export type GlobalAttributes = $Shape<{|
  className: string,
  hidden: boolean,
  id: string,
  tabIndex: string | number,
  title: string,
|}>;

// Event handlers

export type SyntheticInputEventHandler<T: EventTarget = EventTarget> =
  (SyntheticInputEvent<T>) => void;

export type SyntheticMouseEventHandler<T: EventTarget = EventTarget> =
  (SyntheticMouseEvent<T>) => void;

export type SyntheticKeyboardEventHandler<T: EventTarget = EventTarget> =
  (SyntheticKeyboardEvent<T>) => void;

export type SyntheticFocusEventHandler<T: EventTarget = EventTarget> =
  (SyntheticFocusEvent<T>) => void;

// Common event handler props

export type ChangeEventHanlders<T: EventTarget = EventTarget> = $Shape<{
  onChange: SyntheticInputEventHandler<T>,
}>;

export type MouseEventHandlers<T: EventTarget = EventTarget> = $Shape<{|
  onClick: SyntheticMouseEventHandler<T>,
  // onContextMenu
  onDoubleClick: SyntheticMouseEventHandler<T>,
  // onDrag
  // onDragEnd
  // onDragEnter
  // onDragExit
  // onDragLeave
  // onDragOver
  // onDragStart
  // onDrop
  onMouseDown: SyntheticMouseEventHandler<T>,
  onMouseEnter: SyntheticMouseEventHandler<T>,
  onMouseLeave: SyntheticMouseEventHandler<T>,
  onMouseMove: SyntheticMouseEventHandler<T>,
  onMouseOut: SyntheticMouseEventHandler<T>,
  onMouseOver: SyntheticMouseEventHandler<T>,
  onMouseUp: SyntheticMouseEventHandler<T>,
|}>;

export type KeyboardEventHandlers<T: EventTarget = EventTarget> = $Shape<{|
  onKeyDown: SyntheticKeyboardEventHandler<T>,
  onKeyPress: SyntheticKeyboardEventHandler<T>,
  onKeyUp: SyntheticKeyboardEventHandler<T>,
|}>;

export type FocusEventHandlers<T: EventTarget = EventTarget> = $Shape<{|
  onFocus: SyntheticFocusEventHandler<T>,
  onBlur: SyntheticFocusEventHandler<T>,
|}>;
