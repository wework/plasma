import Button from './components/Button/Button.jsx';
import Card from './components/Card/Card.jsx';
import Checkbox from './components/Checkbox/Checkbox.jsx';
import DropDownMenu from './components/DropDownMenu/DropDownMenu.jsx';
import Header from './components/Header/Header.jsx';
import Image from './components/Image/Image.jsx';
import Label from './components/Label/Label.jsx';
import Loader from './components/Loader/Loader.jsx';
import Masthead from './components/Masthead/Masthead.jsx';
import Modal from './components/Modal/Modal.jsx';
import NumberInput from './components/NumberInput/NumberInput.jsx';
import RadioButton from './components/RadioButton/RadioButton.jsx';
import Rule from './components/Rule/Rule.jsx';
import SegmentedCard from './components/SegmentedCard/SegmentedCard.jsx';
import Table from './components/Table/Table.jsx';
import Text from './components/Text/Text.jsx';
import TextInput from './components/TextInput/TextInput.jsx';
import Tooltip from './components/Tooltip/Tooltip.jsx';
import TopNavBar from './components/TopNavBar/TopNavBar.jsx';
import SideNavBar from './components/SideNavBar/SideNavBar.jsx';
import SideNavBarItem from './components/SideNavBar/SideNavBarItem.jsx';
import DatePicker from './components/DatePicker/DatePicker.jsx';

// Page imports
import Group from './components/layout/Group/Group.jsx';
import HorizontalScroll from './components/layout/HorizontalScroll/HorizontalScroll.jsx';
import FormField from './components/layout/FormField/FormField.jsx';
import FixedLeft from './components/layout/FixedLeft/FixedLeft.jsx';
import FixedRight from './components/layout/FixedRight/FixedRight.jsx';
import FixedTop from './components/layout/FixedTop/FixedTop.jsx';

// Plasma object

const Plasma = {};

Plasma.Header = Header;
Plasma.Label = Label;
Plasma.Image = Image;
Plasma.Text = Text;
Plasma.Card = Card;
Plasma.Checkbox = Checkbox;
Plasma.SegmentedCard = SegmentedCard;
Plasma.Button = Button;
Plasma.TextInput = TextInput;
Plasma.NumberInput = NumberInput;
Plasma.RadioButton = RadioButton;
Plasma.Rule = Rule;
Plasma.Loader = Loader;
Plasma.DropDownMenu = DropDownMenu;
Plasma.DatePicker = DatePicker;

Plasma.FormField = FormField;
Plasma.Tooltip = Tooltip;

Plasma.SideNavBar = SideNavBar;
Plasma.SideNavBarItem = SideNavBarItem;
Plasma.Table = Table;
Plasma.TopNavBar = TopNavBar;

Plasma.Masthead = Masthead;
Plasma.Modal = Modal;

Plasma.Group = Group;
Plasma.HorizontalScroll = HorizontalScroll;
Plasma.FixedLeft = FixedLeft;
Plasma.FixedRight = FixedRight;
Plasma.FixedTop = FixedTop;

export default Plasma;

export {
  Header,
  Label,
  Image,
  Text,
  Card,
  Checkbox,
  SegmentedCard,
  Button,
  TextInput,
  RadioButton,
  Rule,
  Group,
  FormField,
  Tooltip,
  SideNavBar,
  SideNavBarItem,
  Table,
  TopNavBar,
  Masthead,
  Modal,
  HorizontalScroll,
  FixedLeft,
  FixedRight,
  FixedTop,
  NumberInput,
  Loader,
  DropDownMenu,
  DatePicker,
};
