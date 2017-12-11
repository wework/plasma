# Button types

There are 5 types of buttons: [Primary](#primary-button), [Secondary](#secondary-button), [Tertiary](#tertiary-button), [Link](#link-button) and [Icon & Link](#icon--link-button). Each button style has up to 5 states, including: normal, hover, active, loading and disabled.

Note: All CSS shown is for guiding purposes, it's not absolute. It's intended to help designers foster a greater understanding of both CSS and the specifications.

---

## Primary button

* Action oriented button. Think: 'Done', 'Save', 'Next', 'Submit'.
* _Normally*_ the primary positive action in any scenario.
* _Some scenarios are more suited to the [Tertiary](#tertiary-button) button style as the primary positive action, when the action doesn't need to be so prominent / stand-out._
* Ideally there should only be one Primary button on any screen/scenario (the core action to proceed/progress/take action on the page). If there isn’t any one clear primary action, then consider using one or a combination of the other button styles.
* Can be used in isolation or in conjunction with a [Secondary](#secondary-button), [Tertiary](#tertiary-button), [Link style](#link-button) or [Icon & Link](#icon--link-button) button.

<span class="image-spec spec-typo">![Primary button](./primary-button.png)</span>

```
/* Normal */
background-color: $yellow50;
border: 1px solid $yellow60;
border-radius: 5px;
height: 38px;
padding: 0 20px;
transition: all 0.2s;
font-family: Helvetica;
font-weight: bold;
font-size: 13px;
color: $black50;

/* Hover */
background-color: $yellow60;
border-color: $yellow70;

/* Focus */
background-color: $yellow70;
border-color: $yellow70;

/* Loading icon */
color: $white;
opacity: 0.1;

/* Disabled */
background-color: none;
border-color: $black;
color: $black;
opacity: 0.1;
```

---

## Secondary button

* Similar to the [Primary](#primary-button) button, but intended to play a more supportive or less important action button role. Consider using the Secondary button style for things like ‘Edit’ buttons. The philosophy being, 'Edit' is a positive action, but not the definitive action, which would be saving the edit you made in the next step, therefor a Secondary action is more appropriate, and reserve a Primary action for the 'Save' or 'Done' step.
* Well suited to situations where there are multiple call to actions present (e.g. when there are a multiple buttons, all with equal weighting). In this case you could pair a Secondary button with a [Primary](#primary-button) button.
* Can be used in isolation or in conjunction with a [Primary](#primary-button), or [Link style](#link-button) button.

<span class="image-spec spec-typo">![Secondary button](./secondary-button.png)</span>

```
/* Normal */
background-color: $beige50;
border: 1px solid $beige60;
border-radius: 5px;
height: 38px;
padding: 0 20px;
transition: all 0.2s;
font-family: Helvetica;
font-weight: bold;
font-size: 13px;
color: $black50;

/* Hover */
background-color: $beige60;
border-color: $beige70;

/* Focus */
background-color: $beige70;
border-color: $beige70;

/* Loading icon */
color: $white;
opacity: 0.1;

/* Disabled */
background-color: none;
border-color: $black;
color: $black;
opacity: 0.1;
```

---

## Tertiary button

* Can be used for primary actions when the [Primary](#primary-button) button style is ‘too much’ (e.g. ‘Edit query’ versus ‘Save query’).
* There is no background color (opaque fill) in normal state.
* 5% opacity `$black50` background color on hover.
* 10% opacity `$black50` background color on focus.
* Can be used in isolation or in conjunction with a [Primary](#primary-button), [Secondary](#secondary-button), [Link style](#link-button) or [Icon & Link](#icon--link-button) button.
* If the button is used on a dark background or overlaying an image, use the [Tertiary Light](#tertiary-light-button) button.

<span class="image-spec spec-typo">![Tertiary button](./tertiary-button.png)</span>

```
/* Normal */
background-color: none;
border: 1px solid $black50;
border-radius: 5px;
height: 38px;
padding: 0 20px;
transition: all 0.2s;
font-family: Helvetica;
font-weight: bold;
font-size: 13px;
color: $black50;

/* Hover */
border-color: $gray80;
color: $gray80;

/* Focus */
border-color: $gray60;
color: $gray60;

/* Loading icon */
color: $gray40;

/* Disabled */
border-color: $black;
color: $black;
opacity: 0.1;
```

---

## Tertiary Light button

An alternative to the [Tertiary](#tertiary-button) button, for use on dark backgrounds or overlaying an image.

<span class="image-spec dark spec-typo">![Tertiary Light button](./tertiary-light-button.png)</span>

```
/* Same CSS as the Tertiary button, with the below differences */

/* Normal */
border-color: $white;
color: $white;

/* Hover */
border-color: $gray40;
color: $gray60;

/* Focus */
border-color: $gray60;
color: $gray80;

/* Loading icon */
color: $white;

/* Disabled */
border-color: $white;
color: $white;
opacity: 0.1;
```

---

## Link button

* No background color (opaque fill).
* No border.
* No left/right padding.
* Can be used in isolation or in conjunction with a [Primary](#primary-button), [Secondary](#secondary-button) or [Tertiary](#tertiary-button) button.

<span class="image-spec spec-typo">![Link button](./link-button.png)</span>

```
/* Normal */
background-color: none;
border: none;
height: 38px;
padding: 0;
transition: all 0.2s;
font-family: Helvetica;
font-weight: bold;
font-size: 13px;
color: $black50;

/* Hover */
color: $gray80;

/* Focus */
color: $gray60;

/* Disabled */
color: $black;
opacity: 0.1;
```

---

## Link Light button

An alternative to the [Link](#link-button) button, for use on dark backgrounds or overlaying an image.

<span class="image-spec dark spec-typo">![Link Light button](./link-light-button.png)</span>

```
/* Same CSS as the Link button, with the below differences */

/* Normal */
color: $white;

/* Hover */
color: $gray60;

/* Focus */
color: $gray80;

/* Disabled */
color: $white;
opacity: 0.1;
```

---

## Icon & Link button

* Similar to a [Link](#link-button) button, only pairing an icon with text.
* Useful for adding more context to the action's intent (e.g. icons: download, refresh or close).
* Icon should be 30x30px (icon within should be no more than 12x12px), with no padding between icon and text.

<span class="image-spec spec-typo">![Icon & Link button](./icon-link-button.png)</span>

```
/* Same CSS as the Link button, with the below differences */

/* Icon */
width: 30px;
height: 30px;
margin: 4px 0;
color: $black50;

/* Icon (hover) */
color: $gray80;

/* Icon (focus) */
color: $gray60;

/* Icon (disabled) */
color: $black;
opacity: 0.1;
```

---

## Icon & Link Light button

An alternative to the [Icon & Link](#icon--link-button) button, for use on dark backgrounds or overlaying an image.

<span class="image-spec dark spec-typo">![Icon & Link Light button](./icon-link-light-button.png)</span>

```
/* Same CSS as the Link Light button, with the below differences */

/* Icon */
width: 30px;
height: 30px;
margin: 4px 0;
color: $white;

/* Icon (hover) */
color: $gray60;

/* Icon (focus) */
color: $gray80;

/* Icon (disabled) */
color: $white;
opacity: 0.1;
```
