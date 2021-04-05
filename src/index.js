const init = (position, direction, move) => {
    
    const path = move.replace(/\s/g, "")
    
    let count = 0
    let currentPosition = position
    let currentDirection = direction

    Array.from(path).forEach(x => {
        
        
        if (count === 0) {
            if (x ==='M') {
                currentPosition = walk(position, direction)
            }
            if (x === 'L' || x === 'R'){
                currentDirection = verifyPosition(x, direction)
            }
        } else {
            if (x ==='M') {
                currentPosition = walk(currentPosition, currentDirection)
            }
            if (x === 'L' || x === 'R'){
                currentDirection = verifyPosition(x, currentDirection)
            }
        }

        
        count++
    })
    
    console.log(currentPosition, currentDirection)
}

const verifyPosition = (direction, currentDirection) => {
    if (direction === 'R') {
        switch (currentDirection) {
            case 'N':
                return 'E'
            case 'E':
                return 'S'
            case 'S':
                return 'W'
            case 'W':
                return 'N'
        }
    } else if (direction === 'L') {
        switch (currentDirection) {
            case 'N':
                return 'W'
            case 'W':
                return 'S'
            case 'S':
                return 'E'
            case 'E':
                return 'N'
        }
    }
}

const walk = (currentPosition, direction) => {
    switch (direction) {
        case 'N':
            currentPosition[1] = currentPosition[1] + 1
            return currentPosition
        case 'E':
            currentPosition[0] = currentPosition[0] + 1
            return currentPosition
        case 'S':
            currentPosition[1] = currentPosition[1] - 1
            return currentPosition
        case 'W':
            currentPosition[0] = currentPosition[0] - 1
            return currentPosition
    }
}



init([1,2],'N','LMLMLMLMM')

init([3,3],'E','MMRMMRMRRM')