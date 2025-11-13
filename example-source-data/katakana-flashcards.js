// Japanese Katakana Characters flashcards
// Copy and paste this into the FLASHCARDS variable in your TSOFA app

let FLASHCARDS = [
    // Basic Katakana
    // Vowels
    ["<b>ア</b>", "a"],
    ["<b>イ</b>", "i"],
    ["<b>ウ</b>", "u"],
    ["<b>エ</b>", "e"],
    ["<b>オ</b>", "o"],
    
    // K-row
    ["<b>カ</b>", "ka"],
    ["<b>キ</b>", "ki"],
    ["<b>ク</b>", "ku"],
    ["<b>ケ</b>", "ke"],
    ["<b>コ</b>", "ko"],
    
    // S-row
    ["<b>サ</b>", "sa"],
    ["<b>シ</b>", "shi"],
    ["<b>ス</b>", "su"],
    ["<b>セ</b>", "se"],
    ["<b>ソ</b>", "so"],
    
    // T-row
    ["<b>タ</b>", "ta"],
    ["<b>チ</b>", "chi"],
    ["<b>ツ</b>", "tsu"],
    ["<b>テ</b>", "te"],
    ["<b>ト</b>", "to"],
    
    // N-row
    ["<b>ナ</b>", "na"],
    ["<b>ニ</b>", "ni"],
    ["<b>ヌ</b>", "nu"],
    ["<b>ネ</b>", "ne"],
    ["<b>ノ</b>", "no"],
    
    // H-row
    ["<b>ハ</b>", "ha"],
    ["<b>ヒ</b>", "hi"],
    ["<b>フ</b>", "fu"],
    ["<b>ヘ</b>", "he"],
    ["<b>ホ</b>", "ho"],
    
    // M-row
    ["<b>マ</b>", "ma"],
    ["<b>ミ</b>", "mi"],
    ["<b>ム</b>", "mu"],
    ["<b>メ</b>", "me"],
    ["<b>モ</b>", "mo"],
    
    // Y-row
    ["<b>ヤ</b>", "ya"],
    ["<b>ユ</b>", "yu"],
    ["<b>ヨ</b>", "yo"],
    
    // R-row
    ["<b>ラ</b>", "ra"],
    ["<b>リ</b>", "ri"],
    ["<b>ル</b>", "ru"],
    ["<b>レ</b>", "re"],
    ["<b>ロ</b>", "ro"],
    
    // W-row
    ["<b>ワ</b>", "wa"],
    ["<b>ヲ</b>", "wo (particle)"],
    
    // N
    ["<b>ン</b>", "n"],
    
    // Dakuten (Voiced)
    // G-row
    ["<b>ガ</b>", "ga"],
    ["<b>ギ</b>", "gi"],
    ["<b>グ</b>", "gu"],
    ["<b>ゲ</b>", "ge"],
    ["<b>ゴ</b>", "go"],
    
    // Z-row
    ["<b>ザ</b>", "za"],
    ["<b>ジ</b>", "ji"],
    ["<b>ズ</b>", "zu"],
    ["<b>ゼ</b>", "ze"],
    ["<b>ゾ</b>", "zo"],
    
    // D-row
    ["<b>ダ</b>", "da"],
    ["<b>ヂ</b>", "ji (di)"],
    ["<b>ヅ</b>", "zu (du)"],
    ["<b>デ</b>", "de"],
    ["<b>ド</b>", "do"],
    
    // B-row
    ["<b>バ</b>", "ba"],
    ["<b>ビ</b>", "bi"],
    ["<b>ブ</b>", "bu"],
    ["<b>ベ</b>", "be"],
    ["<b>ボ</b>", "bo"],
    
    // Handakuten (P-row)
    ["<b>パ</b>", "pa"],
    ["<b>ピ</b>", "pi"],
    ["<b>プ</b>", "pu"],
    ["<b>ペ</b>", "pe"],
    ["<b>ポ</b>", "po"],
    
    // Combination Katakana (Yōon)
    // K combinations
    ["<b>キャ</b>", "kya"],
    ["<b>キュ</b>", "kyu"],
    ["<b>キョ</b>", "kyo"],
    
    // S combinations
    ["<b>シャ</b>", "sha"],
    ["<b>シュ</b>", "shu"],
    ["<b>ショ</b>", "sho"],
    
    // T combinations
    ["<b>チャ</b>", "cha"],
    ["<b>チュ</b>", "chu"],
    ["<b>チョ</b>", "cho"],
    
    // N combinations
    ["<b>ニャ</b>", "nya"],
    ["<b>ニュ</b>", "nyu"],
    ["<b>ニョ</b>", "nyo"],
    
    // H combinations
    ["<b>ヒャ</b>", "hya"],
    ["<b>ヒュ</b>", "hyu"],
    ["<b>ヒョ</b>", "hyo"],
    
    // M combinations
    ["<b>ミャ</b>", "mya"],
    ["<b>ミュ</b>", "myu"],
    ["<b>ミョ</b>", "myo"],
    
    // R combinations
    ["<b>リャ</b>", "rya"],
    ["<b>リュ</b>", "ryu"],
    ["<b>リョ</b>", "ryo"],
    
    // G combinations
    ["<b>ギャ</b>", "gya"],
    ["<b>ギュ</b>", "gyu"],
    ["<b>ギョ</b>", "gyo"],
    
    // J combinations
    ["<b>ジャ</b>", "ja"],
    ["<b>ジュ</b>", "ju"],
    ["<b>ジョ</b>", "jo"],
    
    // B combinations
    ["<b>ビャ</b>", "bya"],
    ["<b>ビュ</b>", "byu"],
    ["<b>ビョ</b>", "byo"],
    
    // P combinations
    ["<b>ピャ</b>", "pya"],
    ["<b>ピュ</b>", "pyu"],
    ["<b>ピョ</b>", "pyo"],
    
    // Special Katakana for foreign sounds
    ["<b>ヴ</b>", "vu"],
    ["<b>ヴァ</b>", "va"],
    ["<b>ヴィ</b>", "vi"],
    ["<b>ヴェ</b>", "ve"],
    ["<b>ヴォ</b>", "vo"],
    
    ["<b>ファ</b>", "fa"],
    ["<b>フィ</b>", "fi"],
    ["<b>フェ</b>", "fe"],
    ["<b>フォ</b>", "fo"],
    
    ["<b>ウェ</b>", "we"],
    ["<b>ウィ</b>", "wi"],
    ["<b>ウォ</b>", "wo"],
    
    ["<b>ツァ</b>", "tsa"],
    ["<b>ツィ</b>", "tsi"],
    ["<b>ツェ</b>", "tse"],
    ["<b>ツォ</b>", "tso"],
    
    ["<b>チェ</b>", "che"],
    ["<b>シェ</b>", "she"],
    ["<b>ジェ</b>", "je"],
    
    ["<b>ティ</b>", "ti"],
    ["<b>ディ</b>", "di"],
    ["<b>デュ</b>", "du"],
    ["<b>トゥ</b>", "tu"],
    
    // Special marks
    ["<b>ッ</b>", "small tsu (doubles consonant)"],
    ["<b>ー</b>", "long vowel mark"]
];
