// Atom imports
import Header from './components/atoms/Header/Header';
import Card from './components/atoms/Card/Card';
import Button from './components/atoms/Button/Button';
import TextInput from './components/atoms/TextInput/TextInput';
import Image from './components/atoms/Image/Image';
import Label from './components/atoms/Label/Label';

// Molecule imports
import ButtonGroup from './components/molecules/ButtonGroup/ButtonGroup';
import FormField from './components/molecules/FormField/FormField';
import Tooltip from './components/molecules/Tooltip/Tooltip';

// Organism imports
import SideNavBar from './components/organisms/SideNavBar/SideNavBar';
import SideNavBarItem from './components/organisms/SideNavBar/SideNavBarItem';
import Table from './components/organisms/Table/Table';

// Template imports
import Masthead from './components/templates/Masthead/Masthead';

// Page imports
import FixedLeft from './components/pages/FixedLeft/FixedLeft';

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

Plasma.Molecule.ButtonGroup = ButtonGroup;
Plasma.Molecule.FormField = FormField;
Plasma.Molecule.Tooltip = Tooltip;

Plasma.Organism.SideNavBar = SideNavBar;
Plasma.Organism.SideNavBarItem = SideNavBarItem;
Plasma.Organism.Table = Table;

Plasma.Template.Masthead = Masthead;

Plasma.Page.FixedLeft = FixedLeft;

Plasma.A = Plasma.Atom;
Plasma.M = Plasma.Molecule;
Plasma.O = Plasma.Organism;
Plasma.T = Plasma.Template;
Plasma.P = Plasma.Page;

export default Plasma;