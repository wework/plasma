# Pagination

Displayed below tables when there are a significant number of table rows.

### Guidelines

* Pagination is centrally aligned, with a top margin of 30px.
* If the user is on the first page of table results, the ‘Back’ button is disabled. If they are on the last page of table results, ‘Next’ is disabled.
* The current page of results has an active state applied to it.
* If ≤ 7 pages, no need for truncating the pagination (adding "...").
* If a page ≥ 5 is selected, the first page should be available to the left and last page should be available to the right. The first and last page should always be visible.
* An ellipses (...) is shown between non-consecutive pages, using the disabled state style, but the ellipses itself has a 100% opacity, as opposed to 10%.

<span class="image-spec spec-typo">![Pagination](./pagination-1.png)![Pagination](./pagination-2.png)![Pagination](./pagination-3.png)![Pagination](./pagination-4.png)![Pagination](./pagination-5.png)![Pagination](./pagination-6.png)![On-hover](./pagination-hover.png)![On-focus](./pagination-focus.png)</span>

```
/* Pagination */
border-radius: 5px;
background: $white;
border: 1px solid $gray40;
height: 38px;
padding: 0 20px; /* on each toggle option */

/* Numerical/text 'cell' */
padding: 0 15px;
font-family: Helvetica;
font-weight: regular;
font-size: 13px;
color: $black50;

/* Hover */
background-color: $bg3;

/* Disabled */
border-color: $gray30;

/* Active */
background-color: $yellow50;
border-color: $yellow60;

/* Null (“...”) */
background-color: none;
```

Note: All CSS shown is for guiding purposes, it's not absolute. It's intended to help designers foster a greater understanding of both CSS and the specifications.

---

### Pagination on mobile

On mobile the numerical pagination is replaced by a disabled “1 of XX” segment, in-between a ‘Back’ and ‘Next’ button.

<span class="image-spec spec-typo">![Pagination on mobile](./pagination-mobile.png)</span>

```
/* Pagination (on mobile) */
(each tab is ⅓ width of space available to it)
```
