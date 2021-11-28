const input = document.getElementById('data')
const word = document.getElementById('word')
const define = document.getElementById('def')
const phonetic = document.getElementById('phonetic')
const audioBtn = document.getElementById('audioBtn')
let visible = false
function getMeaning(){
    try{
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    .then(res => res.json())
    .then(data => {
        const wordShow = data[0].word
        const def = data[0].meanings[0].definitions[0].definition
        const phone = data[0].phonetic
        speech = data[0].phonetics[0].audio
        word.innerText = wordShow
        phonetic.innerText = phone
        define.innerText = def
        // console.log(data[0].phonetics[0].audio);
    })
}catch(err) {
    console.log(err);
}
}
// console.log(speech);
function playSpeech(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    .then(res => res.json())
    .then(data => {
        const speech = data[0].phonetics[0].audio
        // console.log(data[0].phonetics[0].audio);
        var audio = new Audio(speech);
        audio.play();
    })
}

function update(){
    visible = true
    audioBtn.style.display = visible ? 'block' : 'none'
    setTimeout(getMeaning, 1000)
}

// getMeaning()
input.addEventListener('input', update)


// Word of the day
async function wordOfTheDay(){
    //Get Word
        const words = ['Bugbear', 'Elixir', 'Flimflam', 'Guru', 'Haboob', 'Haphazard', 'Jitney', 'Oxymoron', 'Scofflaw']
        const randomWord = words[Math.floor(Math.random() * words.length)];
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
        .then(res => res.json())
        .then(data => {
            const wordShow = data[0].word
            const def = data[0].meanings[0].definitions[0].definition
            const phone = data[0].phonetic
            // speech = data[0].phonetics[0].audio
            document.getElementById('word_wod').innerText = wordShow
            document.getElementById('phonetic_wod').innerText = phone
            document.getElementById('def_wod').innerText = def
            console.log(data[0].word);
        })
    // Get Meaning
}

document.body.addEventListener('load', wordOfTheDay)



