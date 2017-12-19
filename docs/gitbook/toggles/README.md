# Toggles

Neither a [button](/buttons/README.md) or an [input](/form-elements/README.md). The toggle simply allows the option to ‘toggle’ between two or more options. This can be used to refresh the page content or filter content.

### Guidelines

* Toggle can be horizontal or vertical.
* Horizontal toggles should be spaced 20px aside from other components.
* Vertical toggles should be spaced 20px above or below other components.
* Each option within the toggle has a left/right padding of 20px.
* The active toggle follows similar style to a [primary button](/button_specs/README.md#primary-button).
* The active toggle has no hover or focus state.

<span class="image-spec spec-typo">![Toggle](./toggle-1.png)![Toggle](./toggle-2.png)![Toggle](./toggle-3.png)</span>

```
/* Toggle */
border-radius: 5px;
background: $white;
border: 1px solid $gray40;
color: $black50;
height: 38px;
padding: 0 20px; /* on each toggle option */

/* Hover */
background-color: $bg3;

/* Disabled */
border-color: $gray30;

/* Active */
background-color: $yellow50;
border-color: $yellow60;
```

Note: All CSS shown is for guiding purposes, it's not absolute. It's intended to help designers foster a greater understanding of both CSS and the specifications.

---

### Responsively or stacked

<span class="image-spec">![Toggle](./toggle-4.png)![Toggle](./toggle-5.png)</span>
