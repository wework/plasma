# Colors

The digital brand color palette is shared across all products, including the Plasma design system. View the [Digital Foundations ↗](https://digital-foundations.netlify.com) document  and see the section on [Colors ↗](https://digital-foundations.netlify.com/color/) for more information on the use of color in our products.

### General guidelines

* `$black50` is the default color for most text content.
* `$yellow50` for actions and active states.
* `$blue50` for links that navigate us to a new page.
* `$red50` for errors and warnings.
* `#FAF9F8` is the background color for all screens.
* `$white` is the main foreground color for all containing elements (e.g. tables, cards, modals).

### Color spectrum & Sass variables

In an effort to bridge the gap between design and engineering, we use Sass variable naming conventions for our digital colors. Each color has a base value of 50 (e.g. `$blue50`). Then a range of 7 colors is created from that base color. Using the `darken` and `lighten` CSS functions, we generate three darker, and three lighter variations of the base color, in increments of 10% (e.g. lightest `$blue20` to darkest `$blue80`). You can see this in action in all color examples above.

<a href="https://digital-foundations.netlify.com/color/Brand_Digital_Colors.sketch" class="download-link">Download our digital brand colors for Sketch</a>

## Primary colors

WeWork's primary brand colors used in all digital products.

<div class="color-palette">
  <div class="color-group">
    <div class="color-black80 null-color"><p><strong>$black80 ($black)</strong> <br />#000000 <br />color: darken($black50, 30%);</p></div>
    <div class="color-black70"><p><strong>$black ($black70)</strong> <br />#000000 <br />color: darken($black50, 20%);</p></div>
    <div class="color-black60"><p><strong>$black60</strong> <br />#0d0e0e <br />color: darken($black50, 10%);</p></div>
    <div class="color-black50 base-color"><p><strong>$black50 (Base)</strong> <br />#252729 <br />color: $black50;</p></div>
    <div class="color-black40"><p><strong>$black40</strong> <br />#3d4144 <br />color: lighten($black50, 10%);</p></div>
    <div class="color-black30"><p><strong>$black30</strong> <br />#555a5f <br />color: lighten($black50, 20%);</p></div>
    <div class="color-black20"><p><strong>$black20</strong> <br />#6e7479 <br />color: lighten($black50, 30%);</p></div>
  </div>
  <div class="color-group">
    <div class="color-gray80"><p><strong>$gray80</strong> <br />#747476 <br />color: darken($gray50, 30%);</p></div>
    <div class="color-gray70"><p><strong>$gray70</strong> <br />#8e8e8f <br />color: darken($gray50, 20%);</p></div>
    <div class="color-gray60"><p><strong>$gray60</strong> <br />#a7a7a9 <br />color: darken($gray50, 10%);</p></div>
    <div class="color-gray50 base-color"><p><strong>$gray50 (Base)</strong> <br />#c1c1c2 <br />color: $gray50;</p></div>
    <div class="color-gray40"><p><strong>$gray40</strong> <br />#dbdbdb <br />color: lighten($gray50, 10%);</p></div>
    <div class="color-gray30"><p><strong>$gray30</strong> <br />#f4f4f5 <br />color: lighten($gray50, 20%);</p></div>
    <div class="color-gray20"><p><strong>$white ($gray20)</strong> <br />#ffffff <br />color: lighten($gray50, 30%);</p></div>
  </div>
  <div class="color-group">
    <div class="color-yellow80"><p><strong>$yellow80</strong> <br />#d39100 <br />color: darken($yellow50, 30%);</p></div>
    <div class="color-yellow70"><p><strong>$yellow70</strong> <br />#ffb107 <br />color: darken($yellow50, 20%);</p></div>
    <div class="color-yellow60"><p><strong>$yellow60</strong> <br />#ffc13a <br />color: darken($yellow50, 10%);</p></div>
    <div class="color-yellow50 base-color"><p><strong>$yellow50 (Base)</strong> <br />#ffd16d <br />color: $yellow50;</p></div>
    <div class="color-yellow40"><p><strong>$yellow40</strong> <br />#ffe1a0 <br />color: lighten($yellow50, 10%);</p></div>
    <div class="color-yellow30"><p><strong>$yellow30</strong> <br />#fff1d3 <br />color: lighten($yellow50, 20%);</p></div>
    <div class="color-yellow20 null-color"><p><strong>$yellow20 ($white)</strong> <br />#ffffff <br />color: lighten($yellow50, 30%);</p></div>
  </div>
</div>

## Secondary colors

These colors convey meaning. Blue conveys navigation, or a link. Red conveys a warning or error. Green conveys success.

<div class="color-palette">
  <div class="color-group">
    <div class="color-black80"><p><strong>$blue80</strong> <br />#21465d <br />color: darken($blue50, 30%);</p></div>
    <div class="color-blue70"><p><strong>$blue70</strong> <br />#2e6383 <br />color: darken($blue50, 20%);</p></div>
    <div class="color-blue60"><p><strong>$blue60</strong> <br />#3b7fa9 <br />color: darken($blue50, 10%);</p></div>
    <div class="color-blue50 base-color"><p><strong>$blue50 (Base)</strong> <br />#5499c3 <br />color: $blue50;</p></div>
    <div class="color-blue40"><p><strong>$blue40</strong> <br />#7ab0d0 <br />color: lighten($blue50, 10%);</p></div>
    <div class="color-blue30"><p><strong>$blue30</strong> <br />#a0c6dd <br />color: lighten($blue50, 20%);</p></div>
    <div class="color-blue20"><p><strong>$blue20</strong> <br />#c5ddeb <br />color: lighten($blue50, 30%);</p></div>
  </div>
  <div class="color-group">
    <div class="color-red80"><p><strong>$red80</strong> <br />#812020 <br />color: darken($red50, 30%);</p></div>
    <div class="color-red70"><p><strong>$red70</strong> <br />#aa2a2a <br />color: darken($red50, 20%);</p></div>
    <div class="color-red60"><p><strong>$red60</strong> <br />#ce3939 <br />color: darken($red50, 10%);</p></div>
    <div class="color-red50 base-color"><p><strong>$red50 (Base)</strong> <br />#d86262 <br />color: $gray50;</p></div>
    <div class="color-red40"><p><strong>$red40</strong> <br />#e28b8b <br />color: lighten($red50, 10%);</p></div>
    <div class="color-red30"><p><strong>$red30</strong> <br />#ecb4b4 <br />color: lighten($red50, 20%);</p></div>
    <div class="color-red20"><p><strong>$red20</strong> <br />#f6dddd <br />color: lighten($red50, 30%);</p></div>
  </div>
  <div class="color-group">
    <div class="color-green80"><p><strong>$green80</strong> <br />#223d3e <br />color: darken($green50, 30%);</p></div>
    <div class="color-green70"><p><strong>$green70</strong> <br />#355e5e <br />color: darken($green50, 20%);</p></div>
    <div class="color-green60"><p><strong>$green60</strong> <br />#477e7f <br />color: darken($green50, 10%);</p></div>
    <div class="color-green50 base-color"><p><strong>$green50 (Base)</strong> <br />#599FA0 <br />color: $green50;</p></div>
    <div class="color-green40"><p><strong>$green40</strong> <br />#78b3b4 <br />color: lighten($green50, 10%);</p></div>
    <div class="color-green30"><p><strong>$green30</strong> <br />#99c6c6 <br />color: lighten($green50, 20%);</p></div>
    <div class="color-green20"><p><strong>$green20</strong> <br />#bad8d8 <br />color: lighten($green50, 30%);</p></div>
  </div>
</div>

## Tertiary colors

Additional colors are introduced based on the needs of products across digital teams. The colors `$purple50` and `$purple20` are exclusive to the Plasma design system. They are a ‘legacy’ brand color for our internal business tools (most notably ‘Spacestation’). The Plasma design system retains these colors in ode to the history of our internal products, and in the interest of familiarity in our products.

<div class="color-palette">
  <div class="color-group">
    <div class="color-purple80 null-color"><p><strong>$purple80 ($black)</strong> <br />#000000 <br />color: darken($purple50, 30%);</p></div>
    <div class="color-purple70"><p><strong>$purple70</strong> <br />#2e6383 <br />color: darken($purple50, 20%);</p></div>
    <div class="color-purple60"><p><strong>$purple60</strong> <br />#3b7fa9 <br />color: darken($purple50, 10%);</p></div>
    <div class="color-purple50 base-color"><p><strong>$purple50 (Base)</strong> <br />#5499c3 <br />color: $purple50;</p></div>
    <div class="color-purple40"><p><strong>$purple40</strong> <br />#7ab0d0 <br />color: lighten($purple50, 10%);</p></div>
    <div class="color-purple30"><p><strong>$purple30</strong> <br />#a0c6dd <br />color: lighten($purple50, 20%);</p></div>
    <div class="color-purple20"><p><strong>$purple20</strong> <br />#c5ddeb <br />color: lighten($purple50, 30%);</p></div>
  </div>
  <div class="color-group">
    <div class="color-beige80"><p><strong>$beige80</strong> <br />#ac9985 <br />color: darken($beige50, 30%);</p></div>
    <div class="color-beige70"><p><strong>$beige70</strong> <br />#c1b2a3 <br />color: darken($beige50, 20%);</p></div>
    <div class="color-beige60"><p><strong>$beige60</strong> <br />#d5ccc2 <br />color: darken($beige50, 10%);</p></div>
    <div class="color-beige50 base-color"><p><strong>$beige50 (Base)</strong> <br />#eae5e0 <br />color: $beige50;</p></div>
    <div class="color-beige40"><p><strong>$beige40</strong> <br />#fffffe <br />color: lighten($beige50, 10%);</p></div>
    <div class="color-beige30 null-color"><p><strong>$beige30 ($white)</strong> <br />#ffffff <br />color: lighten($beige50, 20%);</p></div>
    <div class="color-beige20 null-color"><p><strong>$beige20 ($white)</strong> <br />#ffffff <br />color: lighten($beige50, 30%);</p></div>
  </div>
</div>

## Background colors

An additional color palette exists only for background colors. Designed for subtlety.

<div class="color-palette">
  <div class="color-group">
    <div class="color-bg5"><p><strong>$bg5</strong> <br />#f4f4f1 <br />background-color: rgba($black50, .05);</p></div>
    <div class="color-bg3"><p><strong>$bg3</strong> <br />#f8f8f5 <br />background-color: rgba($black50, .03);</p></div>
    <div class="color-bg1"><p><strong>$bg1</strong> <br />#fcfcf9 <br />background-color: rgba($black50, .01);</p></div>
  </div>
</div>
