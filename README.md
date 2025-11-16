# TSOFA: The Simple, Offline Flashcard App

TSOFA ("tee-sofa") - The Simple, Offline, Flashcard App - is a flash card app that exists entirely in a single HTML file you can view in the browser. [Here is a basic demo.](https://inventwithpython.com/tsofa/tsofa.html)

[You can use the editor page to create new flashcard sets](https://inventwithpython.com/tsofa/editor/), or you can edit the flashcards directly in the file, using just text or HTML tags. It also supports a CSV string for the flashcard content so you can import flashcards from other apps. Otherwise, it's just a simple, free flashcard app: No server, no ads, no registration, no premium features to pay for, no dependencies, no build process, no cloud sync.

## Features

- **Single HTML file** - Everything in one HTML file, easy to share and view on any device
- **Multi-lingual Support** - Emoji-based design to reduce language dependence, but also 24 languages supported: English, Español, Français, Deutsch, Nederlands, Italiano, Português, Polski, Русский, Norsk, Svenska, 中文, हिन्दी, বাংলা, 日本語, 한국어, ไทย, العربية, Tiếng Việt, Türkçe, Tagalog, Kiswahili, فارسی, Bahasa Indonesia
- **Keyboard controls** - Space to flip, arrows to navigate
- **HTML support** - Embed images, format text, add links
- **Shuffle cards** - Randomize order for practice
- **Invert Q/A** - Swap questions with answers
- **Remove flashcards** - Remove cards as you master them, reload the page to bring them back
- **Left/Right Justified, Centering** - Change alignment to preserve indentation
- **Integrated timer** - If you want to time your run through the flashcard deck
- **CSV import** - Paste data from spreadsheets
- **Printable** - Print a paper copy of the flashcards
- **Zero setup** - Works immediately offline, no programming skills needed
- **Free** - No registration, no paywall, no ads, no "premium" features; everything is straight-up free.

## Creating and Editing Flashcards

[You can use the editor page to create new flashcard sets.](https://inventwithpython.com/tsofa/editor/)

Alternatively, you can download the tsofa.html file and open it in any text editor. Find the `FLASHCARDS` variable (and optionally the `TOPIC` variable) near the top of the `<script>` section, and edit the text string values. Set the `LANGUAGE` variable to set the default language (this can be changed later in the app itself.)

You can put any HTML tags you want and they will be rendered in the flash card. You can use this to display images in the flash cards.
.

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

* [Chemistry Acids and Bases](flashcards-acids-bases.html)
* [Periodic Table of the Elements](flashcards-periodic-table.html)
* [Cell Biology](flashcards-cell-biology.html)
* [Human Organs and Their Function](flashcards-human-organs.html)
* [Metric Conversions](flashcards-metric-conversions.html)
* [Multiplication Table](flashcards-multiplication.html)
* [Division Table](flashcards-division.html)
* [Roman Numerals](flashcards-roman-numeral.html)
* [MCAT Study Questions](flashcards-mcat.html)
* [Nursing Mnemonics](flashcards-nursing-mnemonics.html)
* [Pharmacology Mnemonics](flashcards-pharmacology-mnemonics.html)
* [Medical Terminology](flashcards-medical-terminology.html)
* [U.S. Constitutional Amendments](flashcards-constitutional-amendments.html)
* [U.S. Constitutional Law](flashcards-constitutional-law.html)
* [U.S. State Capitals](flashcards-state-capitals.html)
* [Year of World History Events](flashcards-world-history.html)
* [Country Currencies](flashcards-countries-currencies.html)
* [Country Capitals](flashcards-country-capitals.html)
* [Economics Terms](flashcards-economics.html)
* [Commonly Confused Words](flashcards-confused-words.html)
* [100 Common French Verbs](flashcards-french-verbs.html)
* [100 Common Spanish Verbs](flashcards-spanish-verbs.html)
* [English Idioms](flashcards-english-idioms.html)
* [Japanese Hiragana Characters](flashcards-hiragana.html)
* [Japanese Katakana Characters](flashcards-katakana.html)
* [Logical Fallacies](flashcards-logical-fallacies.html)
* [Morse Code](flashcards-morse-code.html)
* [NATO Phonetic Alphabet](flashcards-nato-phonetic-alphabet.html)
* [Phobias](flashcards-phobia.html)
* [SAT GRE Vocabulary](flashcards-sat-gre-vocabulary.html)
* [Typography Terms](flashcards-typography-terms.html)

