import Card from './components/atoms/Card/Card';
import Button from './components/atoms/Button/Button';
import TextInput from './components/atoms/TextInput/TextInput';
import Image from './components/atoms/Image/Image';

import SideNavBar from './components/organisms/SideNavBar/SideNavBar';
import SideNavBarItem from './components/organisms/SideNavBar/SideNavBarItem';

const Plasma = {};

Plasma.Atom = {};
Plasma.Organism = {};
Plasma.Molecule = {};
Plasma.Template = {};

Plasma.Atom.Image = Image;
Plasma.Atom.Card = Card;
Plasma.Atom.Button = Button;
Plasma.Atom.TextInput = TextInput;

Plasma.Organism.SideNavBar = SideNavBar;
Plasma.Organism.SideNavBarItem = SideNavBarItem;

export default Plasma;