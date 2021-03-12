let wordsPlace = document.getElementById(`wordsPlace`)

let words = ["Labas", "Krabas", "Lietuvis", "Baisus", "Debesis"]
let word = words[Math.floor(Math.random() * Math.floor(words.length))]
console.log(word)


for (let i = 0; i < word.length; i++) {
    wordsPlace.innerHTML += `
        <div class="symbol"><span class="false" id="${i}">${word[i]}</span></div>
    `
}