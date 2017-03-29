let character = JSON.parse(decodeURIComponent((window.location.search.replace("?", "").split("&")[0]).split("=")[1]))
console.log(character)

document.querySelector("#name").textContent = character.name
document.querySelector("#race").textContent = character.race.charAt(0).toUpperCase() + character.race.slice(1);
document.querySelector("#bodybase").textContent = character.bodyBase
document.querySelector("#mindbase").textContent = character.mindBase
document.querySelector("#spiritbase").textContent = character.spiritBase
document.querySelector("#racebase").textContent = character.raceBase
document.querySelector("#body").textContent = character.body
document.querySelector("#mind").textContent = character.mind
document.querySelector("#spirit").textContent = character.spirit
document.querySelector("#weaveenergy").textContent = character.weavePoints
document.querySelector("#bodymod").textContent = character.bodyMod
document.querySelector("#mindmod").textContent = character.mindMod
document.querySelector("#spiritmod").textContent = character.spiritMod
document.querySelector("#attack").textContent = character.attack
document.querySelector("#armorbase").textContent = character.armor
document.querySelector("#movespeed").textContent = character.movement
document.querySelector("#initiative").textContent = character.initiative
document.querySelector("#grabdefense").textContent = character.grabDefense
document.querySelector("#climbspeed").textContent = character.climbspeed
document.querySelector("#luckbase").textContent = character.luck
document.querySelector("#sneakbase").textContent = character.sneak
document.querySelector("#climbbase").textContent = character.climb
document.querySelector("#skillsbase").textContent = character.skill
