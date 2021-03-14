let wordsPlace = document.getElementById(`wordsPlace`)
let checkBtn = document.getElementById(`check`)
const gallows = document.getElementsByClassName(`gallows`)
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

    if (goodAnsw === false && goodAnsw2 === true) {
        badAnsw ++
        gallows[0].innerHTML = `
    <img src="img/gallows${badAnsw}.jpg" alt="">
    
`
    }
    checkWinLose()
    goodAnsw = false
    goodAnsw2 = false
    console.log(goodAnsw, goodAnsw2)
}

function checkWinLose () {
    if (badAnsw === 5) {
        console.log("You LOSE")
    }
    let xxx = document.getElementsByClassName("TRUE")
    if (xxx.length === word.length){
        console.log("YOU WIN")
    }
}
