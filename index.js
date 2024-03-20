const form = document.getElementById('form')
const mydefinition = document.getElementById('definition')
const myWord = document.getElementById('word')

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    const word = form ['inputbox'].value
    console.log(word)
    myWord.innerHTML = word

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    .then((response) => response.json())
    //.then((data) => console.log(data [0].meanings[0].definitions[0].definition))
    .then(data =>{
       const meaning = data [0].meanings[0].definitions[0].definition
       console.log(meaning)
       mydefinition.innerHTML = meaning
})
.catch((error) => console.log(error))
}
)