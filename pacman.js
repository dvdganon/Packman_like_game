'use strict'
var PACMAN = '🐤'
var gPacman



function createPacman(board) {
    // DONE: initialize gPacman...
     PACMAN = '🐤'
    gPacman = {
        location: {
            i: 2,
            j: 2
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}

function onMovePacman(ev) {
    if (!gGame.isOn) return
    // DONE: use getNextLocation(), nextCell
    const nextLocation = getNextLocation(ev.code)
    const nextCell = gBoard[nextLocation.i][nextLocation.j]
    // DONE: return if cannot move
    if (nextCell === WALL) return
    // DONE: hitting a ghost? call gameOver
    if (nextCell === GHOST && gPacman.isSuper === false) {
        PACMAN = '🍖'
        const nextLocation = getNextLocation(ev.code)
        const nextCell = gBoard[nextLocation.i][nextLocation.j]
        gameOver2()
    }
    if (nextCell === GHOST && gPacman.isSuper === true) {
        PACMAN = '🐓'
        const nextLocation = getNextLocation(ev.code)
        const nextCell = gBoard[nextLocation.i][nextLocation.j]
    }
    if (nextCell === FOOD && gGame.score === 39) {
        PACMAN = '🐓'
        const nextLocation = getNextLocation(ev.code)
        const nextCell = gBoard[nextLocation.i][nextLocation.j]
        won()
    }
    if (nextCell === FOOD) updateScore(1)

    if (nextCell === SUPER_FOOD) {
    isSuper(timestamp)
    const nextLocation = getNextLocation(ev.code)
    const nextCell = gBoard[nextLocation.i][nextLocation.j]
    }
    


    // DONE: moving from current location:
    // DONE: update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY
    // DONE: update the DOM
    renderCell(gPacman.location, EMPTY)

    // DONE: Move the pacman to new location:
    // DONE: update the model
    gBoard[nextLocation.i][nextLocation.j] = PACMAN
    gPacman.location = nextLocation
    // DONE: update the DOM
    renderCell(nextLocation, PACMAN)
}

function getNextLocation(eventKeyboard) {

    const nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    // TODO: figure out nextLocation
    switch (eventKeyboard) {
        case 'ArrowUp':
            nextLocation.i--
            break;
        case 'ArrowRight':
            nextLocation.j++
            break;
        case 'ArrowDown':
            nextLocation.i++
            break;
        case 'ArrowLeft':
            nextLocation.j--
            break;
    }

    return nextLocation
}