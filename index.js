/*
# index.js

File for running the ux of the generator
*/

let form = document.querySelector("div.form")
let name = document.querySelector("#nameinput")
let race = document.querySelector("#raceinput")
let humanbns = document.querySelector("#humanbnsinput")
let generateBtn = document.querySelector("#generate")
let character
let characterdiv = document.querySelector("div.character")

function init () {
    // humanbns.classList.add("hide") // can comment this out because the generator defaults to human
    // generateBtn.disabled = true // everything is valid at start
}
function raceCheck () {
    generateBtn.disabled = false
    if(race.value == "human") {
        humanbns.classList.remove("hide")
    } else {
        humanbns.classList.add("hide")
    }
    if(race.value == "halfbreed") {
        alert("Half Breeds are not yet supported.")
        generateBtn.disabled = true
    } else if(race.value == "n/a") {
        generateBtn.disabled = true
    }
}
function generate () {
    character = createCharacter(name.value, race.value, humanbns.value)
    console.log("character.html?character=" + encodeURIComponent(JSON.stringify(character)))
    console.log(character)
    window.open("character.html?character=" + encodeURIComponent(JSON.stringify(character)), "_blank")
}
function showCharacter () {
    let content = ""
    content += `<h1>${character.name}</h1>`
    content += `<p>Body: ${character.body}</b>`

    characterdiv.innerHTML = content
}

race.addEventListener("change", raceCheck)
generateBtn.addEventListener("click", function () {
    generate()
    showCharacter()
})

init()
