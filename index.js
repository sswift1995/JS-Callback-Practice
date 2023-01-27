const character = document.getElementById("/assets/green-character.gif");
let direction = null;
let x = 0;
let y = 0;

document.addEventListener("keydown", function(e) {
    if (e.repeat) return;

    if (e.key === "ArrowLeft") {
        direction = "west";
        character.style.transform = "scaleX(-1)";
    } else if (e.key === "ArrowUp") {
        direction = "north";
    } else if (e.key === "ArrowRight") {
        direction = "east";
        character.style.transform = "scaleX(1)";
    } else if (e.key === "ArrowDown") {
        direction = "south";
    }

    character.classList.add("walk");
});

document.addEventListener("keyup", function(e) {
    direction = null;
    character.classList.remove("walk");
});

setInterval(function() {
    if (!direction) return;

    if (direction === "west") {
        x -= 5;
    } else if (direction === "north") {
        y -= 5;
    } else if (direction === "east") {
        x += 5;
    } else if (direction === "south") {
        y += 5;
    }

    character.style.left = x + "px";
    character.style.bottom = y + "px";
}, 10);

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}
function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}
function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)