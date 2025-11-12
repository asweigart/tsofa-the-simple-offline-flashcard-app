# TSOFA: The Simple, Offline Flashcard App

A single-file HTML flashcard app that runs entirely offline. No server, no dependencies, no build process, no cloud sync. Just save and open in a browser.

## Features

- **Single HTML file** - Everything in one file
- **Keyboard controls** - Space to flip, arrows to navigate  
- **Symbol buttons** - ⇤ ← ⤾ → ⇥ with hover tooltips
- **HTML support** - Embed images, format text, add links
- **Shuffle cards** - Randomize order for practice
- **Invert Q/A** - Swap questions with answers
- **Center toggle** - Uncheck for code with preserved indentation
- **CSV import** - Paste data from spreadsheets
- **Zero setup** - Works immediately offline

## Editing Flashcards

You can copy the tsofa.html file in this repo to start with.

Open the HTML file in any text editor. Find the `FLASHCARDS` variable near the top of the `<script>` section.

You can put any HTML tags you want and they will be rendered in the flash card. You can use this to display images in the flash cards.

### Array Format

For the array format, I recommend using backticks (on the keyboard to the left of the 1 key) for the `FLASHCARDS` string values so you can include quote characters and span multiple lines.

```javascript
let FLASHCARDS = [
    [`What is the capital of France?`, `Paris`],
    [`What is 2 + 2?`, `4`],
    [`What is the largest planet in our solar system?`, `<b>Jupiter</b><br><i>It has a mass of 1.898 × 10²⁷ kg</i>`],
    [`What year did World War II end?`, `1945`],
    [`Who wrote 'Romeo and Juliet'?`, `William Shakespeare<br><img src="shakespeare.png">`],
    [`What is HTML?`, `<b>HyperText Markup Language</b><br>The standard markup language for creating web pages`],
];

```


### CSV String Format
```javascript
let FLASHCARDS = `"Question 1","Answer 1"
"Question 2","Answer 2"
"Question with, comma","Answer with, comma"`;
```

The app automatically detects which format you're using. CSV is useful for importing from spreadsheet applications.


## Tips

- Test after each edit by refreshing the browser
- Use a JavaScript code editor with syntax highlighting to avoid making syntax typos
- Keep backups before major edits
- Browser console (F12) shows syntax errors
- HTML tags work: `<b>`, `<i>`, `<img src='...'>`
- Export from Excel/Sheets as CSV, then paste into FLASHCARDS string
- In CSV format, use double quotes (`""`) to escape quotes within fields
- Uncheck "Center" for code snippets to preserve indentation
