# Tabs

Sometimes needs arise where it’s helpful to group different types of content in a limited space (e.g. form elements into different tabs within a modal). This can help the user experience, and it can also be used to conserve space, or a pattern’s height and complexity.

The example below shows tabs in a modal pattern:

<span class="image-spec">![Specification](./tabs-spec.png)</span>

## Tabs

* Tabs can be used first in order, above all form elements, or used above/below form elements to further divide content.
* The tab element is a total of 54px in height, which includes a top and left padding of 14px. While this number sounds ‘obscure’, it is 14px so that the tab title aligns with the form labels below and/or above the tabs.
* You can use multiple tabs to divide/group content, or use one singular tab as a ‘sub-title’ for form elements below.
* Each tab has left/right padding of 15px.

<span class="image-spec spec-typo">![Tabs in a modal](./tabs-1.png)</span>

```
/* Tabs */
padding: 14px 0 0 14px; /* so first tab aligns with labels */
border-bottom: 1px solid $gray40;

/* Tab */
height: 38px;
padding: 0 15px;
font-family: Helvetica;
font-weight: regular;
font-size: 13px;
line-height: 38px
color: $black50;
background-color: rgba($yellow50,0.05);
border: 1px solid $gray40;
border-radius: 2px 2px 0 0; /* first tab */
border-radius: 0; /* middle tab(s) */
border-radius: 0 2px 0 0; /* last tab */

/* Active tab */
background-color: $white;
border-bottom: 1px solid $white;

/* Hover (non-active tab) */
background-color: rgba($black, 0.02);

/* Focus (non-active tab) */
background-color: rgba($black, 0.05);
```

## Multiple tabs

Multiple tabs can be used to group specific groups of form elements.

<span class="image-spec">![Multiple tabs](./tabs-2.png)![Multiple tabs](./tabs-3.png)</span>

## Single tab

Use sparingly. Could be useful if a sub-title (of sorts) is needed to draw focus to a particular or set of form elements.

<span class="image-spec">![Single tab](./tabs-4.png)</span>
