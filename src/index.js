// Atom imports
import Header from './components/atoms/Header/Header';
import Card from './components/atoms/Card/Card';
import SegmentedCard from './components/atoms/SegmentedCard/SegmentedCard';
import Button from './components/atoms/Button/Button';
import TextInput from './components/atoms/TextInput/TextInput';
import Image from './components/atoms/Image/Image';
import Text from './components/atoms/Text/Text';
import Label from './components/atoms/Label/Label';
import RadioButton from './components/atoms/RadioButton/RadioButton';

// Molecule imports
import RowGroup from './components/molecules/RowGroup/RowGroup';
import FormField from './components/molecules/FormField/FormField';
import Tooltip from './components/molecules/Tooltip/Tooltip';
import Select from './components/molecules/Select/Select';

// Organism imports
import SideNavBar from './components/organisms/SideNavBar/SideNavBar';
import SideNavBarItem from './components/organisms/SideNavBar/SideNavBarItem';
import Table from './components/organisms/Table/Table';
import TopNavBar from './components/organisms/TopNavBar/TopNavBar';

// Template imports
import Masthead from './components/templates/Masthead/Masthead';
import Modal from './components/templates/Modal/Modal';

// Page imports
import FixedLeft from './components/pages/FixedLeft/FixedLeft';
import FixedTop from './components/pages/FixedTop/FixedTop';

// Plasma object

const Plasma = {};
let Atom, Organism, Molecule, Template, Page;

Plasma.Atom = Atom = {};
Plasma.Organism = Organism = {};
Plasma.Molecule = Molecule = {};
Plasma.Template = Template = {};
Plasma.Page = Page = {};

Plasma.Atom.Header = Header;
Plasma.Atom.Label = Label;
Plasma.Atom.Image = Image;
Plasma.Atom.Text = Text;
Plasma.Atom.Card = Card;
Plasma.Atom.SegmentedCard = SegmentedCard;
Plasma.Atom.Button = Button;
Plasma.Atom.TextInput = TextInput;
Plasma.Atom.RadioButton = RadioButton;

Plasma.Molecule.RowGroup = RowGroup;
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

window.Plasma = Plasma;

export default Plasma;

export { Plasma, Atom, Molecule, Organism, Template, Page };
