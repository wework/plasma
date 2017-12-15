# Links

We should always strive for consistency in how we present links.

### Rule for navigational links

A ‘navigational link’ means a link that directs the user to a new screen/page. The link should be noticeably different from other content, considering our [accessibility guidelines for links ↗](https://digital-foundations.netlify.com/accessibility/#distinguishing-links) (i.e. don’t rely on only color to identify a link). The default style for navigational text links in body copy, segmented cards and tables is:

* **Bold** font-weight.
* Use the `$blue50` color.
* No underline (text-decoration).
* On-hover and focus state should have a simple underline.

### Exemption for navigation link style

* Side bar text/links.
* Actions/links that don’t navigate to a new page (e.g. actions that open a modal, side drawer, or reveal hidden content).

### Alternative styles for links

Different UIs may require a different treatment for a link/action. Consider the following guidelines in these cases:

* Bold font-weight, using the `$black50` color.
* Avoid using the `$yellow50` color on a light background as it won’t be legible.
* When using smaller font sizes (e.g. the [Regular 3](/text-styles/README.md#regular-3) style), perhaps a bold font-weight may draw too much attention to itself, if the intention of the smaller text is be subtle. In this case consider using a simple underline (text-decoration) for a link.
