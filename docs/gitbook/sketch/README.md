# Sketch

Everything about the system in Sketch is designed so our designers spend less time needlessly creating and re-inventing our system components, and more time focussing on user experience, iteration and building the best product. All in the interest of consistency and efficiency.

Below are notes on design system best practices for quality control, in [Sketch ↗](https://www.sketchapp.com).

## Naming conventions

An important part of system design is naming conventions. The systems naming conventions should be used in all designs, specs and communication, and are reflected in the naming of text styles, symbols and libraries in Sketch. The ultimate goal is for the code (React and CSS) to also use the same names, so everyone is speaking the same language.

### Color system

The system uses Sass variables to name the colors, and define a (CSS) [color spectrum](#color-spectrum) based on a few base colors.

For a quick preview, see:

* [Primary colors ↗](https://www.dropbox.com/s/n0kctpodwk9sq55/brand-digital-primary-color-variables.png?dl=0)
* [Secondary colors ↗](https://www.dropbox.com/s/hkft9jmdjxot4ji/brand-digital-secondary-color-variables.png?dl=0)
* [Tertiary colors ↗](https://www.dropbox.com/s/glaa72ea5zh89cr/brand-digital-tertiary-color-variables.png?dl=0)

See the [color section](/colors/README.md) for more information, guidelines and downloads for the system foundational colors.

### Naming text styles

The text styles works much the same way as [naming symbols](#naming-symbols).

* Each text style should include the name, followed by a forward slash ("/") so they are organized together for easy access.
* The default text style should be in `$black50` color.
* In order to avoid accidental overriding of text styles in use in Sketch it's also useful to define new text styles for different colors, for each text style (e.g. "`Regular 2 /`", and "`Regular 2 / $blue50`" and "`Regular 2 / $red50`" ).
* Likewise, a new text style should be created for a bold (`<strong>`) font-weight (e.g. "`Regular 2 / <strong>`" or "`Regular 2 / $blue50` `<strong>`")

### Using text styles

The system has defined [text styles](/text-styles/README.md). All master, template and working Sketch files should have these system text styles loaded and ready to use. Please assign a text style to all text (where possible) in your working Sketch files — this way we won't stray from the system.

The system text styles are designed to cover a wide range of scenarios. Bespoke styles can be used (sparingly), but should be discussed with the design system team, and even integrated into the system if a new style is deemed a useful inclusion to the system. See the [typography section](/typography/README.md) for guidelines and downloads for the system foundational text styles.

See also: [Importing text styles into Sketch](#importing-text-styles-into-sketch)

### Naming symbols

Naming symbols using forward slashes (`"/"`) sorts symbols into folders, for easy access.

* For example a symbol named "`text input /`" will create a folder called "`text input`", with that symbol as the one symbol in that folder.
* Creating a second symbol called "`text input / error`" will add this new symbol into the "`text input`" folder.
* This practice is ideal when organizing nested symbols.

### Using symbols

The system has [control symbols](#control-symbols), which should cover all components. Ideally these should be used in designs wherever possible, in the interest of consistency, and maintenance (the symbols are updated/kept in sync via [Sketch Library](/sketch-library/README.md).

Patterns are trickier to manage with symbols, but we should strive to be as consistent as possible when designing with our established patterns, featuring our component symbols and foundational text styles and colors.

---

## Control symbols

Control symbols are Sketch symbols containing a number of nested symbols. There are Sketch symbols for all components in the system. The idea is they are the only symbols you will need to create a UI. Via symbol overrides you can quickly switch between different states of each component (e.g. a form inputs placeholder, value, focus or error state, or different types of buttons and their normal and hover states), while maintaining all the symbols values. Any changes you make to the nested symbols (used in the control symbol) will be reflected in the control symbol and wherever it is used. [Learn about how control symbols are made ↗](https://medium.com/@andrewcouldwell/harness-the-power-of-symbols-204448baaef3)

---

## Auto save in Sketch

<span style="color:#D86262; font-weight:bold;">Please turn off the auto save feature in Sketch's preferences</span>, before viewing any Sketch files linked to from this documentation. It's turned on by default. It's very easy to unwittingly make changes while viewing a Sketch file with the auto save on.

---

## Importing text styles into Sketch

There's a Sketch plugin for importing the system text styles into any Sketch file. Follow the instructions below to install and use it:

* Download the [Shared Text Styles ↗](https://github.com/nilshoenson/shared-text-styles) plugin for Sketch.
* In the downloaded folder, open the 'shared-textstyles.sketchplugin' file in Sketch.
* In the file menu at the top of Sketch, you should now be able to access:
* Plugins > Shared Text Styles > Import Text Styles…*
* Having clicked the above link, locate and import the `plasma-text-styles.json` file in 'Plasma' folder on Dropbox.
* You should now have all the Plasma system text styles!
