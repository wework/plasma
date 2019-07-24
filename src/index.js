// @flow
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Checkbox from './components/Checkbox/Checkbox';
import CollapsibleCard from './components/CollapsibleCard/CollapsibleCard';
import OverflowMenu from './components/OverflowMenu/OverflowMenu';
import Header from './components/Header/Header';
import Hint from './components/Hint/Hint';
import Icon from './components/Icon/Icon';
import Image from './components/Image/Image';
import Label from './components/Label/Label';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';
import NumberInput from './components/NumberInput/NumberInput';
import RadioButton from './components/RadioButton/RadioButton';
import RadioButtonGroup from './components/RadioButtonGroup/RadioButtonGroup';
import Rule from './components/Rule/Rule';
import SegmentedCard from './components/SegmentedCard/SegmentedCard';
import Table from './components/Table/Table';
import Text from './components/Text/Text';
import TextInput from './components/TextInput/TextInput';
import Tooltip from './components/Tooltip/Tooltip';
import OldSideNavBar from './components/SideNavBar/OldSideNavBar';
import SideNavBarItem from './components/SideNavBar/OldSideNavBarItem';
import SideNavBar from './components/SideNavBar/SideNavBar';
import SideNavBarTop from './components/SideNavBar/SideNavBarTop';
import Search from './components/Search/Search';
import Tabs from './components/Tabs/Tabs';
import Toggle from './components/Toggle/Toggle';
import TextArea from './components/TextArea/TextArea';
import Tag from './components/Tag/Tag';
import TimePicker from './components/TimePicker/TimePicker';

// Layout imports
import Page from './components/layout/Page/Page';
import Group from './components/layout/Group/Group';
import HorizontalScroll from './components/layout/HorizontalScroll/HorizontalScroll';
import FormField from './components/layout/FormField/FormField';
import FixedLeft from './components/layout/FixedLeft/FixedLeft';
import FixedRight from './components/layout/FixedRight/FixedRight';
import FixedTop from './components/layout/FixedTop/FixedTop';

// Misc
import withCounter from './decorators/withCounter/withCounter';
import LocationPin from './icons/locationPin';

import style from './external';

const CountedTextArea = withCounter(TextArea);
const CountedTextInput = withCounter(TextInput);

// Plasma object

const Plasma = {};

Plasma.Header = Header;
Plasma.Hint = Hint;
Plasma.Label = Label;
Plasma.Image = Image;
Plasma.Icon = Icon;
Plasma.Text = Text;
Plasma.Card = Card;
Plasma.Checkbox = Checkbox;
Plasma.CollapsibleCard = CollapsibleCard;
Plasma.SegmentedCard = SegmentedCard;
Plasma.Button = Button;
Plasma.TextInput = TextInput;
Plasma.NumberInput = NumberInput;
Plasma.RadioButton = RadioButton;
Plasma.RadioButtonGroup = RadioButtonGroup;
Plasma.Rule = Rule;
Plasma.Loader = Loader;
Plasma.OverflowMenu = OverflowMenu;
Plasma.Search = Search;
Plasma.FormField = FormField;
Plasma.Tooltip = Tooltip;
Plasma.Tabs = Tabs;
Plasma.OldSideNavBar = OldSideNavBar;
Plasma.SideNavBarItem = SideNavBarItem;
Plasma.SideNavBar = SideNavBar;
Plasma.SideNavBarTop = SideNavBarTop;
Plasma.Table = Table;
Plasma.Modal = Modal;
Plasma.Group = Group;
Plasma.HorizontalScroll = HorizontalScroll;
Plasma.FixedLeft = FixedLeft;
Plasma.FixedRight = FixedRight;
Plasma.FixedTop = FixedTop;
Plasma.Toggle = Toggle;
Plasma.Page = Page;
Plasma.TimePicker = TimePicker;
Plasma.CountedTextArea = CountedTextArea;
Plasma.CountedTextInput = CountedTextInput;
Plasma.LocationPin = LocationPin;

Plasma._style = style;

export default Plasma;

export {
  Icon,
  Header,
  Hint,
  Label,
  Image,
  Text,
  Card,
  Checkbox,
  CollapsibleCard,
  SegmentedCard,
  Button,
  TextInput,
  RadioButton,
  RadioButtonGroup,
  Rule,
  Group,
  FormField,
  Tooltip,
  Tabs,
  OldSideNavBar,
  SideNavBarItem,
  SideNavBar,
  SideNavBarTop,
  Table,
  Modal,
  HorizontalScroll,
  FixedLeft,
  FixedRight,
  FixedTop,
  NumberInput,
  Loader,
  OverflowMenu,
  Search,
  Toggle,
  Page,
  TextArea,
  Tag,
  TimePicker,
  CountedTextArea,
  CountedTextInput,
  LocationPin,
};
