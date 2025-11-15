import os

ORIGINAL_FLASHCARDS = '''const TOPIC = "";

// Option 1: Array of arrays format
let FLASHCARDS = [
["What is the capital of France?", "Paris"],
["What is 2 + 2?", "4"],
["What is the largest planet in our solar system?", "<b>Jupiter</b><br><i>It has a mass of 1.898 × 10²⁷ kg</i>"],
["What year did World War II end?", "1945"],
["Who wrote 'Romeo and Juliet'?", "William Shakespeare"],
["What is HTML?", "<b>HyperText Markup Language</b><br>The standard markup language for creating web pages"],
];
'''

with open('tsofa.html') as file_obj:
    template = file_obj.read()

for filename in os.listdir('example-source-data'):
    if not filename.endswith('.js'): continue

    flashcard_filename = 'flashcards-' + filename[:filename.rfind('-')] + '.html'

    print(flashcard_filename)

    with open('example-source-data/' + filename) as file_obj:
        content = file_obj.read()

    with open(flashcard_filename, 'w') as file_obj:
        file_obj.write(template.replace(ORIGINAL_FLASHCARDS, content))

print('Done.')
