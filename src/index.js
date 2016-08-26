// Atom imports
import Header from './components/atoms/Header/Header.jsx';
import Card from './components/atoms/Card/Card.jsx';
import Button from './components/atoms/Button/Button.jsx';
import TextInput from './components/atoms/TextInput/TextInput.jsx';
import Image from './components/atoms/Image/Image.jsx';
import Label from './components/atoms/Label/Label.jsx';
import RadioButton from './components/atoms/RadioButton/RadioButton.jsx';

// Molecule imports
import Group from './components/molecules/Group/Group.jsx';
import FormField from './components/molecules/FormField/FormField.jsx';
import Tooltip from './components/molecules/Tooltip/Tooltip.jsx';
import Select from './components/molecules/Select/Select.jsx';

// Organism imports
import SideNavBar from './components/organisms/SideNavBar/SideNavBar.jsx';
import SideNavBarItem from './components/organisms/SideNavBar/SideNavBarItem.jsx';
import Table from './components/organisms/Table/Table.jsx';
import TopNavBar from './components/organisms/TopNavBar/TopNavBar.jsx';

// Template imports
import Masthead from './components/templates/Masthead/Masthead.jsx';
import Modal from './components/templates/Modal/Modal.jsx';

// Page imports
import FixedLeft from './components/pages/FixedLeft/FixedLeft.jsx';
import FixedTop from './components/pages/FixedTop/FixedTop.jsx';

// Plasma object

const Plasma = {};

Plasma.Atom = {};
Plasma.Organism = {};
Plasma.Molecule = {};
Plasma.Template = {};
Plasma.Page = {};

Plasma.Atom.Header = Header;
Plasma.Atom.Label = Label;
Plasma.Atom.Image = Image;
Plasma.Atom.Card = Card;
Plasma.Atom.Button = Button;
Plasma.Atom.TextInput = TextInput;
Plasma.Atom.RadioButton = RadioButton;

Plasma.Molecule.Group = Group;
Plasma.Molecule.FormField = FormField;
Plasma.Molecule.Tooltip = Tooltip;
Plasma.Molecule.Select = Select;

Plasma.Organism.SideNavBar = SideNavBar;
Plasma.Organism.SideNavBarItem = SideNavBarItem;
Plasma.Organism.Table = Table;
Plasma.Organism.TopNavBar = TopNavBar;

Plasma.Template.Masthead = Masthead;
Plasma.Template.Modal = Modal;

Plasma.Page.FixedLeft = FixedLeft;
Plasma.Page.FixedTop = FixedTop;

Plasma.A = Plasma.Atom;
Plasma.M = Plasma.Molecule;
Plasma.O = Plasma.Organism;
Plasma.T = Plasma.Template;
Plasma.P = Plasma.Page;

// window.Plasma = Plasma;

export default Plasma;

const Atom = Plasma.Atom;
const Molecule = Plasma.Molecule;
const Organism = Plasma.Organism;
const Template = Plasma.Template;
const Page = Plasma.Page;

export { Plasma, Atom, Molecule, Organism, Template, Page };
