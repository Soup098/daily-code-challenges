const chickens = []

function addChicken(){
    let chickenName = prompt("Enter chickens name")
    chickens.push(chickenName)
}

addChicken()

console.log("Current flock: ", chickens)