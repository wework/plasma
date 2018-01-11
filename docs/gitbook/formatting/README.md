# Formatting

The following applies to how specific things are formatted. Please refer to the Digital Foundations documentation for more on [time format ↗](https://digital-foundations.netlify.com/formatting/), [date format ↗](https://digital-foundations.netlify.com/formatting/#date-formatting-rules) and [writing style ↗](https://digital-foundations.netlify.com/brand-voice/).

Below are guidelines for formatting various elements used in our internal business tools.

---

## Numbers & currency

* Numbers over 3 digits get commas.
* Always prefix a currency amount with the symbol for the currency (without a space).
* Avoid using abbreviations for, or rounding up/down long numbers (e.g. 10K or $10K). Our internal business tools deal with non-trivial, real data — rounding numbers to the nearest ten, hundred or thousand is not appropriate to our business needs. Also “K” and “M” can cause confusion relating to the data — see this related article: [Mixing use of K for thousands and MM for millions ↗](https://english.stackexchange.com/questions/181917/mixing-use-of-k-for-thousands-and-mm-for-millions)

<span style="color:#599FA0;">We do:</span>                    | <span style="color:#d86262;">We don't:</span>
---                                                           | ---
1 <br />10 <br />100 <br />1,000 <br />10,000                 | 1000 <br />10000 <br />10K <br />10M
$100 <br />£100 <br />€100 <br />$10,000 <br />$10,000,000    | $ 100 <br />100$ <br />100 dollars <br />$10K <br />$10M

---

## Writing

* [Sentence case ↗](https://en.wikipedia.org/wiki/Letter_case#Sentence_case) should be used wherever possible, as it's easier to read and friendlier. This applies to all copy, including headers, sub-headers, paragraph copy, captions, form labels & inputs, links and buttons.
* Titles (including feature names in products) and names should use [title case ↗](https://en.wikipedia.org/wiki/Letter_case#Title_case).
* Sentences, paragraphs and bullet pointed lists should always end with a period.
* Titles, headers and sub-headers should never end with a period.
* Form labels/legends should never end with a period.
* Placeholder text in form inputs, textareas and selects should never end with a period.
* Text on buttons should never end with a period.
* Ampersands (&): If it’s in a sentence, spell out the word “and,” but if it’s in a title an “&” is fine, but not compulsory.

<span style="color:#599FA0;">We do:</span>                    | <span style="color:#d86262;">We don't:</span>
---                                                           | ---
A title like this <br />A title like this and this <br />A title like this & this      | A Title Like This <br />A title like this. <br />A TITLE LIKE THIS
A sentence like this. <br />A sentence like this and this.                             | A sentence like this <br />A sentence like this & this.

---

## Date format

* Day of the week can (if needed) be shortened to 3 characters (e.g. Friday becomes Fri).
* Month can (if needed) be shortened to 3 characters (e.g. November becomes Nov).
* If day of the week is included, it should be first in the order, followed by a comma.
* A month should always be accompanied by a year, for clarity.
* A year should never be abbreviated. Use the full 4 digits.
* The day of the month should be a singular number, don’t include “st”, “nd” or “th”.
* The day of the month should always be accompanied by a month. The month followed by the number, and separated by a space. The year should now be separated by a comma and a space, to differentiate from the day number before it.
* Any times, shown inline with a date should follow the [time format ↗](https://digital-foundations.netlify.com/formatting/) rules, and be separated from the date with a bullet — `[date] • [time]`.
* If a time is shown inline with a date, you should specify for the day of the month, month, year (and optionally day of the week), for clarity.

<span style="color:#599FA0;">We do:</span>                    | <span style="color:#d86262;">We don't:</span>
---                                                           | ---
Nov 2016 <br />November 2016                                  | Nov <br />November <br />Nov 16 <br />Nov ‘16
Nov 1, 2016 <br />November 1, 2016                            | 1 <br />1st <br />1 Nov <br />Nov 1st
Tue, Nov 1, 2016 <br />Tuesday, Nov 1, 2016                   | Tue <br />Tuesday <br />Tue Nov 1
Nov 1, 2016 • 9:00 am <br />Tue, Nov 1, 2017 • 9:00 am        | Nov 1 • 9:00 am <br />Nov • 9:00 am <br />Tue • 9:00 am <br />Tue, Nov • 9:00 am

---

## Time format

* Use the 24-hour clock internationally.
* Use the 12-hour clock in the United States.
* A colon should be used between the hour and minutes. Any other punctuation can be confused as decimal or monetary.
* Always specify minutes, as well as the hour.
* Where a 12-hour format is used, the time should always be accompanied by a space, followed by “am” or “pm” (lowercase) so it’s clear what time is being communicated. The 24-hour format has no need for ‘am’ or ‘pm’.
* If displaying a time range, use a hyphen ( - ) to separate the start and end time.
Where a 12-hour clock is used, the “am” and/or “pm” should be included for both the start and end times, not singularly at the end.
* Specify a time zone if the scenario requires it, for clarity. Please see notes on time zones [here ↗](https://digital-foundations.netlify.com/formatting/#international-and-regional-time-zones) and [here ↗](https://digital-foundations.netlify.com/formatting/#time-zones) in the digital foundations documentation for more information.

<span style="color:#599FA0;">We do:</span>                    | <span style="color:#d86262;">We don't:</span>
---                                                           | ---
19:00                                                         | 19:00 pm <br />19.00 <br />19,00
7:00 am <br />7:00 pm                                         | 7:00AM <br />7am <br />7 a.m. <br />7 PM <br />7:00 PM <br />7,00 pm
19:00 - 20:00 <br />7:00 pm - 8:00 pm                         | 7:00 - 8:00 PM <br />7:00 PM - 8:00 PM
19:00 (EDT) <br />7pm (EDT) <br />19:00 - 20:00 (EDT) <br />7:00 pm - 8:00 pm (EDT)             | 7 PM (EDT) <br />19:00 (EDT) - 20:00 (EDT) <br />7:00 pm (EDT) - 8:00 pm (EDT)

---

## Required field

* A required field signifies to the user that a [form element](/form-elements/README.md) must be filled in.
* A [label or legend](/form-specs/README.md#label--legend) should include an asterisk `*` after the label/legend, separated by a space.

<span style="color:#599FA0;">We do:</span>                    | <span style="color:#d86262;">We don't:</span>
---                                                           | ---
Email *                                                       | Email* <br />Email (required)
