const TOPIC = 'Japanese Hiragana Characters';

let FLASHCARDS = [
// Basic Hiragana (Gojūon)
// Vowels
["<b>あ</b>", "a"],
["<b>い</b>", "i"],
["<b>う</b>", "u"],
["<b>え</b>", "e"],
["<b>お</b>", "o"],

// K-row
["<b>か</b>", "ka"],
["<b>き</b>", "ki"],
["<b>く</b>", "ku"],
["<b>け</b>", "ke"],
["<b>こ</b>", "ko"],

// S-row
["<b>さ</b>", "sa"],
["<b>し</b>", "shi"],
["<b>す</b>", "su"],
["<b>せ</b>", "se"],
["<b>そ</b>", "so"],

// T-row
["<b>た</b>", "ta"],
["<b>ち</b>", "chi"],
["<b>つ</b>", "tsu"],
["<b>て</b>", "te"],
["<b>と</b>", "to"],

// N-row
["<b>な</b>", "na"],
["<b>に</b>", "ni"],
["<b>ぬ</b>", "nu"],
["<b>ね</b>", "ne"],
["<b>の</b>", "no"],

// H-row
["<b>は</b>", "ha"],
["<b>ひ</b>", "hi"],
["<b>ふ</b>", "fu"],
["<b>へ</b>", "he"],
["<b>ほ</b>", "ho"],

// M-row
["<b>ま</b>", "ma"],
["<b>み</b>", "mi"],
["<b>む</b>", "mu"],
["<b>め</b>", "me"],
["<b>も</b>", "mo"],

// Y-row
["<b>や</b>", "ya"],
["<b>ゆ</b>", "yu"],
["<b>よ</b>", "yo"],

// R-row
["<b>ら</b>", "ra"],
["<b>り</b>", "ri"],
["<b>る</b>", "ru"],
["<b>れ</b>", "re"],
["<b>ろ</b>", "ro"],

// W-row
["<b>わ</b>", "wa"],
["<b>を</b>", "wo (particle)"],

// N
["<b>ん</b>", "n"],

// Dakuten (Voiced)
// G-row
["<b>が</b>", "ga"],
["<b>ぎ</b>", "gi"],
["<b>ぐ</b>", "gu"],
["<b>げ</b>", "ge"],
["<b>ご</b>", "go"],

// Z-row
["<b>ざ</b>", "za"],
["<b>じ</b>", "ji"],
["<b>ず</b>", "zu"],
["<b>ぜ</b>", "ze"],
["<b>ぞ</b>", "zo"],

// D-row
["<b>だ</b>", "da"],
["<b>ぢ</b>", "ji (di)"],
["<b>づ</b>", "zu (du)"],
["<b>で</b>", "de"],
["<b>ど</b>", "do"],

// B-row
["<b>ば</b>", "ba"],
["<b>び</b>", "bi"],
["<b>ぶ</b>", "bu"],
["<b>べ</b>", "be"],
["<b>ぼ</b>", "bo"],

// Handakuten (P-row)
["<b>ぱ</b>", "pa"],
["<b>ぴ</b>", "pi"],
["<b>ぷ</b>", "pu"],
["<b>ぺ</b>", "pe"],
["<b>ぽ</b>", "po"],

// Combination Hiragana (Yōon)
// K combinations
["<b>きゃ</b>", "kya"],
["<b>きゅ</b>", "kyu"],
["<b>きょ</b>", "kyo"],

// S combinations
["<b>しゃ</b>", "sha"],
["<b>しゅ</b>", "shu"],
["<b>しょ</b>", "sho"],

// T combinations
["<b>ちゃ</b>", "cha"],
["<b>ちゅ</b>", "chu"],
["<b>ちょ</b>", "cho"],

// N combinations
["<b>にゃ</b>", "nya"],
["<b>にゅ</b>", "nyu"],
["<b>にょ</b>", "nyo"],

// H combinations
["<b>ひゃ</b>", "hya"],
["<b>ひゅ</b>", "hyu"],
["<b>ひょ</b>", "hyo"],

// M combinations
["<b>みゃ</b>", "mya"],
["<b>みゅ</b>", "myu"],
["<b>みょ</b>", "myo"],

// R combinations
["<b>りゃ</b>", "rya"],
["<b>りゅ</b>", "ryu"],
["<b>りょ</b>", "ryo"],

// G combinations
["<b>ぎゃ</b>", "gya"],
["<b>ぎゅ</b>", "gyu"],
["<b>ぎょ</b>", "gyo"],

// J combinations
["<b>じゃ</b>", "ja"],
["<b>じゅ</b>", "ju"],
["<b>じょ</b>", "jo"],

// B combinations
["<b>びゃ</b>", "bya"],
["<b>びゅ</b>", "byu"],
["<b>びょ</b>", "byo"],

// P combinations
["<b>ぴゃ</b>", "pya"],
["<b>ぴゅ</b>", "pyu"],
["<b>ぴょ</b>", "pyo"],

// Special character
["<b>っ</b>", "small tsu (doubles consonant)"]
];
