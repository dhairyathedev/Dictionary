const input = document.getElementById('data')
const word = document.getElementById('word')
const define = document.getElementById('def')
const phonetic = document.getElementById('phonetic')

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
    setTimeout(getMeaning, 1000)
}

// getMeaning()
input.addEventListener('input', update)




