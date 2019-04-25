

export const isAdult = ((x) => {
    if(x > 18){
        return true
    }
})

export const canDrink = ((x) => {
    if (x > 21){
        return true
    }
})

export{ isAdult, canDrink}