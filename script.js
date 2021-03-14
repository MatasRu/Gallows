let wordsPlace = document.getElementById(`wordsPlace`)
let checkBtn = document.getElementById(`check`)
const gallows = document.getElementsByClassName(`gallows`)
let wrongLett = document.getElementById(`wrongLetters`)
let wrongLettArr = ["", " "]
let badAnsw = 0
let goodAnsw = false
let goodAnsw2 = false

let words = ["Labas", "Krabas", "Lietuvis", "Baisus", "Debesis"]
let word = words[Math.floor(Math.random() * Math.floor(words.length))]

checkBtn.addEventListener(`click`, checkChar)


gallows[0].innerHTML = `
    <img src="img/gallows${badAnsw}.jpg" alt="">
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
            goodAnsw = true
            console.log(`good`)
        } else {
            goodAnsw2 = true
            console.log(`bad`)
        }
    }
    console.log(goodAnsw, goodAnsw2)
    console.log(symbol.value)
    if (goodAnsw === false && goodAnsw2 === true) {
        for (let i = 0; i < wrongLettArr.length; i++) {
            if (symbol.value.toLowerCase() === wrongLettArr[i].toLowerCase()) {
                symbol.value = ""
                return
            }
        }
        badAnsw++
        gallows[0].innerHTML = `
    <img src="img/gallows${badAnsw}.jpg" alt="">
  
                                `
        wrongLettArr.push(symbol.value)
        wrongLett.innerHTML += `${symbol.value}, `

    }

    checkWinLose()
    goodAnsw = false
    goodAnsw2 = false
    console.log(goodAnsw, goodAnsw2)
    symbol.value = ""
}

function checkWinLose() {
    if (badAnsw === 5) {
        if (confirm("You JUST LOSE THE GAME PRESS OK TO START A NEW GAME")) {
            window.location.href = "./index.html"
        }
    }
    let xxx = document.getElementsByClassName("TRUE")
    if (xxx.length === word.length) {
        if (confirm("You JUST WON THE GAME PRESS OK TO START A NEW GAME")) {
            window.location.href = "./index.html"
        }
    }
}
