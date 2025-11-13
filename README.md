# TSOFA: The Simple, Offline Flashcard App

TSOFA ("tee-sofa") - The Simple, Offline, Flashcard App - is a flash card app that exists entirely in a single HTML file you can view in the browser. [Here is a basic demo.](https://inventwithpython.com/tsofa/tsofa.html)

You can edit the flashcards directly in the file, using just text or HTML tags. It also supports a CSV string for the flashcard content so you can import flashcards from other apps. Otherwise, it's just a simple, free flashcard app: No server, no ads, no registration, no premium features to pay for, no dependencies, no build process, no cloud sync.

## Features

- **Single HTML file** - Everything in one HTML file, easy to share and view on any device
- **Keyboard controls** - Space to flip, arrows to navigate
- **HTML support** - Embed images, format text, add links
- **Shuffle cards** - Randomize order for practice
- **Invert Q/A** - Swap questions with answers
- **Remove flashcards** - Remove cards as you master them, reload the page to bring them back
- **Center toggle** - Uncheck for code with preserved indentation
- **Integrated timer** - If you want to time your run through the flashcard deck
- **CSV import** - Paste data from spreadsheets
- **Printable** - Print a paper copy of the flashcards
- **Zero setup** - Works immediately offline, no programming skills needed
- **Free** - No registration, no paywall

## Creating and Editing Flashcards

Download the tsofa.html file and open it in any text editor. Find the `FLASHCARDS` variable (and optionally the `TOPIC` variable) near the top of the `<script>` section, and edit the text string values.

You can put any HTML tags you want and they will be rendered in the flash card. You can use this to display images in the flash cards.

Alternatively, if you don't know what a text editor is, you can use the form on [the TSOFA main page under the "Create Your Own TSOFA Flashcard Sets" section](https://inventwithpython.com/tsofa/).

### Array/JSON Format for Flashcards

For the array/JSON format, I recommend using backticks (on the keyboard to the left of the 1 key) for the `FLASHCARDS` string values so you can include quote characters and span multiple lines. You can optionally add a `TOPIC` setting as well to display on the page.

```javascript
const TOPIC = "(Put a topic to display on the page here, or leave this empty.)";

let FLASHCARDS = [
[`What is the capital of France?`, `Paris`],
[`What is 2 + 2?`, `4`],
[`What is the largest planet in our solar system?`, `<b>Jupiter</b><br><i>It has a mass of 1.898 × 10²⁷ kg</i>`],
[`What year did World War II end?`, `1945`],
[`Who wrote 'Romeo and Juliet'?`, `William Shakespeare<br><img src="shakespeare.png">`],
[`What is HTML?`, `<b>HyperText Markup Language</b><br>The standard markup language for creating web pages`],
];

```


### CSV String Format for Flashcards

Alternatively, you can also load flashcards from a single string of CSV (comma-separated values) text. This format is often used by spreadsheets or as an export format in other flashcard apps.

```javascript
const TOPIC = "(Put a topic to display on the page here, or leave this empty.)";

let FLASHCARDS = `"Question 1","Answer 1"
"Question 2","Answer 2"
"Question with, comma","Answer with, comma"`;
```


## Example Flashcard Sets

(These flashcards are AI-generated and not thoroughly reviewed for correctness.)

* [Cell Biology](https://inventwithpython.com/tsofa/flashcards-cell-biology.html)
* [Human Organs](https://inventwithpython.com/tsofa/flashcards-human-organs.html)
* [US Constitutional Amendments](https://inventwithpython.com/tsofa/flashcards-constitutional-amendments.html)
* [US Constitutional Law](https://inventwithpython.com/tsofa/flashcards-con-law.html)
* [US State Capitals](https://inventwithpython.com/tsofa/flashcards-state-capitals.html)
* [World History Dates](https://inventwithpython.com/tsofa/flashcards-world-history.html)
* [Country Capitals](https://inventwithpython.com/tsofa/flashcards-country-capitals.html)
* [Country Currencies](https://inventwithpython.com/tsofa/flashcards-country-currencies.html)
* [Economics Terms](https://inventwithpython.com/tsofa/flashcards-economics-terms.html)
* [English Idioms](https://inventwithpython.com/tsofa/flashcards-english-idioms.html)
* [Commonly Confused Words](https://inventwithpython.com/tsofa/flashcards-confused-words.html)
* [French Verbs](https://inventwithpython.com/tsofa/flashcards-french-verbs.html)
* [Spanish Verbs](https://inventwithpython.com/tsofa/flashcards-spanish-verbs.html)
* [Japanese Hiragana Characters](https://inventwithpython.com/tsofa/flashcards-hiragana.html)
* [Japanese Katakana Characters](https://inventwithpython.com/tsofa/flashcards-katakana.html)
* [Logical Fallacies](https://inventwithpython.com/tsofa/flashcards-logical-fallacies.html)
* [SAT GRE Vocabulary](https://inventwithpython.com/tsofa/flashcards-sat-gre-vocabulary.html)
* [MCAT](https://inventwithpython.com/tsofa/flashcards-mcat.html)
* [Medical Terminology](https://inventwithpython.com/tsofa/flashcards-medical-terminology.html)
* [Nursing Mnemonics](https://inventwithpython.com/tsofa/flashcards-nursing-mnemonics.html)
* [Pharmacology Mnemonics](https://inventwithpython.com/tsofa/flashcards-pharmacology-mnemonics.html)
* [Elements of the Periodic Table](https://inventwithpython.com/tsofa/flashcards-periodic-table.html)
* [Chemistry Acids and Bases](https://inventwithpython.com/tsofa/flashcards-acids-bases.html)
* [Metric Conversions](https://inventwithpython.com/tsofa/flashcards-metric-conversions.html)
* [Morse Code](https://inventwithpython.com/tsofa/flashcards-morse-code.html)
* [NATO Phonetic Alphabet](https://inventwithpython.com/tsofa/flashcards-nato-phonetic.html)
* [Multiplication](https://inventwithpython.com/tsofa/flashcards-multiplication.html)
* [Division](https://inventwithpython.com/tsofa/flashcards-division.html)
* [Phobias](https://inventwithpython.com/tsofa/flashcards-phobias.html)
* [Roman Numerals](https://inventwithpython.com/tsofa/flashcards-roman-numerals.html)
* [Typography Terms](https://inventwithpython.com/tsofa/flashcards-typography-terms.html)

