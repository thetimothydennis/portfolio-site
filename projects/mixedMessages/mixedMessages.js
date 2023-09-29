// parts of speech arrays

const nouns = [
    "bear",
    "cat",
    "fish",
    "box",
    "tank",
    "stairs",
    "rail",
    "office",
    "house",
    "sausage",
    "lake",
    "bicycle",
    "boat",
    "egg",
    "strawberry",
    "game",
    "planet",
    "garden",
    "dish",
    "book",
    "desk",
    "airplane",
    "paper",
    "pen",
    "storm",
    "river",
    "fox",
    "person",
    "brush",
    "hammer",
    "saw",
    "stack",
    "wood",
    "plastic",
    "steel",
    "sword",
    "skillet",
    "tablet",
    "telephone",
    "typewriter",
    "computer",
    "organism",
    "mushroom",
    "lettuce",
    "cannon",
    "brass",
    "guitar",
    "drum",
    "horn",
    "house",
    "snail",
    "tortoise",
    "trap",
    "trick",
    "train"
];

const verbs = [
    "sweeps",
    "weeps",
    "laughs",
    "rides",
    "swims",
    "drives",
    "eats",
    "drinks",
    "cycles",
    "climbs",
    "digs",
    "races",
    "sprints",
    "smokes",
    "explains",
    "prays",
    "sings",
    "reads",
    "examines",
    "thinks",
    "studies",
    "cooks",
    "treads",
    "trudges",
    "toils",
    "abides",
    "builds",
    "persists",
    "perserveres",
    "overcomes",
    "abets",
    "promises",
    "extolls",
    "hunts",
    "hides",
    "hops",
    "coaxes",
    "mops",
    "travels"
];

const adjectives = [
    "big",
    "small",
    "brown",
    "blue",
    "red",
    "green",
    "smelly",
    "fresh",
    "rhythmic",
    "loud",
    "quiet",
    "harsh",
    "coarse",
    "soft",
    "strong",
    "brittle",
    "anemic",
    "immense",
    "miniscule",
    "inperceivable",
    "inconcievable",
    "preposterous",
    "hateful",
    "despondant",
    "independent",
    "relegated",
    "ancient",
    "modern",
    "contemporary"
];

const adverbs = [
    "incredibly",
    "slowly",
    "quickly",
    "loudly",
    "softly",
    "simply",
    "easily",
    "rapidly",
    "eerily",
    "merrily",
    "quizzically",
    "unrepentedly",
    "unexpectedly",
    "truthfully",
    "faithfully",
    "gratefully",
    "hastily",
];

const prepositions = [
    "above",
    "below",
    "through",
    "into",
    "out of",
    "inside",
    "outside",
    "beyond",
    "before",
    "after",
    "from",
    "to",
    "around"
];

const pronouns = [
    "It",
    "He",
    "She"
];

// sentence structures
let sentences = [
    `The ${randomWord(adjectives)} ${randomWord(nouns)} ${randomWord(verbs)} ${randomWord(prepositions)} the ${randomWord(nouns)}.`,
    `The ${randomWord(adjectives)} ${randomWord(nouns)} ${randomWord(verbs)} ${randomWord(prepositions)} the ${randomWord(nouns)} ${randomWord(adverbs)}.`,
    `${randomWord(pronouns)} ${randomWord(verbs)} ${randomWord(adverbs)} ${randomWord(prepositions)} the ${randomWord(adjectives)} ${randomWord(nouns)}.`,
    `Who ${randomWord(verbs)} the ${randomWord(nouns)} so ${randomWord(adverbs)}?`,
    `What ${randomWord(verbs)} the ${randomWord(nouns)} ${randomWord(prepositions)} the ${randomWord(nouns)} so ${randomWord(adjectives)}ly?`,
]

// functional code
function randomWord (array)  {
    let index = Math.floor(Math.random() * array.length);
    return array[index];
};

function getSentence() {
    return randomWord(sentences)
};

console.log(getSentence())