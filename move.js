
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, _callback){
       console.log("movewithArrowKeys")
        let direction = null;
       let x = left;
       let y = bottom;

       element.style.left = x + 'px'
       element.style.bottom = y + 'px'

    }

           

    function moveCharacter(){ 
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    } 
}
