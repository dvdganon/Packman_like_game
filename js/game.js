'use strict'

const WALL = '🌻'
const FOOD = '🫐'
const EMPTY = '💩'
const SUPER_FOOD = "🍄"
var timestamp = Date.now();

const gGame = {
    score: 0,
    isOn: false
}
var gBoard


function onLoad() {
    console.log('Loaded')
    gBoard = buildBoard()
    createPacman(gBoard)
    onLoadGhosts(gBoard)
    renderBoard(gBoard)
}

function onInit() {
    console.log('Re/Started')
    gGame.score = 0
    const gameOver2El = document.querySelector('.game-over2');
    gameOver2El.style.display = 'none';
    document.querySelector('span.score').innerText = gGame.score
    const gameOverEl = document.querySelector('.game-over');
    gameOverEl.style.display = 'none';
    const wonEl = document.querySelector('.won');
    wonEl.style.display = 'none';
    clearInterval(gIntervalGhosts)
    gGame.isOn = false

    gBoard = buildBoard()
    createPacman(gBoard)
    createGhosts(gBoard)
    renderBoard(gBoard)
    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            
            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) board[i][j] = WALL

            if (j === 1 && i === 1 || j === 1 && i === size - 2) board[i][j] = SUPER_FOOD
            if (j === size - 2 && i === 1 || j === size - 2 && i === size - 2) board[i][j] = SUPER_FOOD
        }
    }
    return board
}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {

            const cell = board[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

// location is an object like this - { i: 2, j: 7 }
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}


function updateScore(diff) {
    // update model 
    if (diff) {
        gGame.score += diff
    } else {
        gGame.score = 0
    }

    // and dom
    document.querySelector('span.score').innerText = gGame.score 
    

}

function gameOver() {
    console.log('Game Over')
    clearInterval(gIntervalGhosts)
    const gameOverEl = document.querySelector('.game-over');
    gameOverEl.style.display = 'block';
    gGame.isOn = false
}

function gameOver2() {
    console.log('Game Over2')
    clearInterval(gIntervalGhosts)
    const gameOver2El = document.querySelector('.game-over2');
    gameOver2El.style.display = 'block';
    gGame.isOn = false
}


function won(){
    console.log('Won')
    clearInterval(gIntervalGhosts)
    const wonEl = document.querySelector('.won');
    wonEl.style.display = 'block';
    gGame.isOn = false

}

function isSuper(timestamp) {
gPacman.isSuper = true
setTimeout(() => gPacman.isSuper = false, 5000)
}