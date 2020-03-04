window.addEventListener('load', init);

let time = 10;
let score = 0;
let isPlaying;
//let words;



const inputWord = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const resultMessage = document.querySelector('#result-message');
const seconds = document.querySelector('#seconds');

const words = [
    "absolute",
    "temperature",
    "absorption",
    "accuracy",
    "acid",
    "activation",
    "energy",
    "addition", 
    "reaction", 
    "alcohol", 
    "alkali", 
    "metal", 
    "alkaline", 
    "allotrope", 
    "alloy", 
    "amorphous", 
    "anhydrous", 
    "anion",  
    "atom", 
    "balance", 
    "base", 
    "beaker",  
    "boil", 
    "brittle",
    "buffer", 
    "buoyancy", 
    "calorimetry", 
    "catalyst", 
    "cation", 
    "charge",
    'ampere',
    'amplification',
    'amplitude',
    'acceleration',
    'bioelectricity',
    'bioluminescence',
    'biomass',
    'reactor',
    'brightness', 
    'calorie',
    'capacitor',
    'cell',
    'centripetal',
    'force',
    'circuit',
    'closed',
    'collision',
    'compass',
    'compression',
    'conduction',
    'conductivity',
    'conductor',
    'aerobic',
    'anabolic',
    'anabolism', 
    'anaerobic', 
    'anaphase', 
    'apoptosis',
    'ATP',
    'catabolic', 
    'catabolism', 
    'cell', 
    'membrane', 
    'cellulose',
    'centriole', 
    'centromere',
    'chloroplast',
    'cholesterol',
    'chromatid', 
    'chromatin', 
    'chromoplast', 
    'chromosome',
    'cilium',
    'concentration', 
    'gradient', 
    'cytokinesis', 
    'cytoplasm',
    'cytoskeleton', 
    'cytosol',
    'diffusion',
    'diploid', 
    'DNA', 
    'enzyme', 
    'eukaryote', 
    'fermentation', 
    'fertilization', 
    'filtration' 
]

//load when window opens
function init() {
    showWord(words);

    //match word input with spelling list

    inputWord.addEventListener('input', matchSpelling);

    // Timer
    setInterval(countdown, 1000);
     //check game status
    setInterval(checkStatus, 50);
}


function matchSpelling(){
    if(matchWords()) {
       isPlaying = true;
       time = 11;
       showWord(words);
       inputWord.value = '';
       score++;
    }

    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords(){
    if(inputWord.value === currentWord.innerHTML) {
        resultMessage.innerHTML = 'Correct!!!';
        return true;
     } else {
        resultMessage.innerHTML = '';
        return false;
     }
}

function showWord(words){
    const randIndex = Math.floor(Math.random() *words.length);
    currentWord.innerHTML = words[randIndex];
}

//countdown timer
function countdown() {
    //confirm if time is not up yet
    if(time > 0) {
        time--;
    } else if (time === 0) {
        //game over
        isPlaying = false;
    }
    // display timer
    timeDisplay.innerHTML = time;
}

//check game status

function checkStatus(){
    if(!isPlaying && time===0) {
        resultMessage.innerHTML = 'Game Over!!!';
        score = -1;
    }
}