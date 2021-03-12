let wordsPlace = document.getElementById(`wordsPlace`)
let checkBtn = document.getElementById(`check`)
const gallows = document.getElementsByClassName(`gallows`)

let words = ["Labas", "Krabas", "Lietuvis", "Baisus", "Debesis"]
let word = words[Math.floor(Math.random() * Math.floor(words.length))]

checkBtn.addEventListener(`click`, checkChar)


gallows[0].innerHTML = `
    <img src="img/gallows.jpg" alt="">
`
for (let i = 0; i < word.length; i++) {
    wordsPlace.innerHTML += `
        <div class="symbol"><span class="false" id="${word[i].toLowerCase()}">${word[i]}</span></div>
    `
}

function checkChar() {
    let choosedChar = symbol.value
    let symbols = document.getElementsByClassName(`false`)
    for (let i = 0; i < word.length; i++) {
        if (choosedChar === symbols[i].id) {
            symbols[i].classList.add("TRUE")
            console.log('true')
        }
    }

}

