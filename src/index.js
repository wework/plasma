import Button from './components/Button/Button.jsx';
import Card from './components/Card/Card.jsx';
import Header from './components/Header/Header.jsx';
import Image from './components/Image/Image.jsx';
import Label from './components/Label/Label.jsx';
import Masthead from './components/Masthead/Masthead.jsx';
import Modal from './components/Modal/Modal.jsx';
import RadioButton from './components/RadioButton/RadioButton.jsx';
import SegmentedCard from './components/SegmentedCard/SegmentedCard.jsx';
import Table from './components/Table/Table.jsx';
import Text from './components/Text/Text.jsx';
import TextInput from './components/TextInput/TextInput.jsx';
import Tooltip from './components/Tooltip/Tooltip.jsx';
import TopNavBar from './components/TopNavBar/TopNavBar.jsx';
import SideNavBar from './components/SideNavBar/SideNavBar.jsx';
import SideNavBarItem from './components/SideNavBar/SideNavBarItem.jsx';

// Page imports
import Group from './layouts/Group/Group.jsx';
import HorizontalScroll from './layouts/HorizontalScroll/HorizontalScroll.jsx';
import FormField from './layouts/FormField/FormField.jsx';
import FixedLeft from './layouts/FixedLeft/FixedLeft.jsx';
import FixedRight from './layouts/FixedRight/FixedRight.jsx';
import FixedTop from './layouts/FixedTop/FixedTop.jsx';

// Plasma object

const Plasma = {};

Plasma.Header = Header;
Plasma.Label = Label;
Plasma.Image = Image;
Plasma.Text = Text;
Plasma.Card = Card;
Plasma.SegmentedCard = SegmentedCard;
Plasma.Button = Button;
Plasma.TextInput = TextInput;
Plasma.RadioButton = RadioButton;

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
  SegmentedCard,
  Button,
  TextInput,
  RadioButton,
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
};
