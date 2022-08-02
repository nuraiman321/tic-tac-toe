boxs = document.querySelectorAll('.box1')
resetBtn = document.querySelector('.reset-btn')
playerOne = document.querySelector('h3')
playerTwo = document.querySelector('h4')
score1 = document.querySelector('.score1')
score2 = document.querySelector('.score2')
winningMessage = document.querySelector('.winning-message')
message = document.querySelector('.message')
restartBtn = document.querySelector(".restart-btn")



// currentSelect = boxs[1]
count = 0
p1score = 0
p2score = 0
// currentSelect = boxs

let winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// checkForWin = true
function handleClick(event) {
    userClickBox = event.target
    // console.log('clicking')
    count++
    if (count % 1 === 0) {
        userClickBox.classList.add('x')
        playerOne.classList.remove('player-one')
        playerTwo.classList.add('player-one')
    }

    if (count % 2 === 0) {
        userClickBox.classList.remove('x')
        userClickBox.classList.add('circle')
        playerTwo.classList.remove('player-one')
        playerOne.classList.add('player-one')
    }
    if (count === 9) {
        winningMessage.style.display = 'flex'
        message.textContent = 'Draw'
    }

    if (boxs[0].classList.contains('x') &&
        boxs[1].classList.contains('x') &&
        boxs[2].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        // alert('Player One Win')
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }


    if (boxs[0].classList.contains('circle') &&
        boxs[1].classList.contains('circle') &&
        boxs[2].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
        // boxs[0].classList.add('winner') &&
        // boxs[1].classList.add('winner') &&
        // boxs[2].classList.add('winner')
    }

    if (boxs[3].classList.contains('x') &&
        boxs[4].classList.contains('x') &&
        boxs[5].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[3].classList.contains('circle') &&
        boxs[4].classList.contains('circle') &&
        boxs[5].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[6].classList.contains('x') &&
        boxs[7].classList.contains('x') &&
        boxs[8].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[6].classList.contains('circle') &&
        boxs[7].classList.contains('circle') &&
        boxs[8].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[0].classList.contains('x') &&
        boxs[3].classList.contains('x') &&
        boxs[6].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[0].classList.contains('circle') &&
        boxs[3].classList.contains('circle') &&
        boxs[6].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[1].classList.contains('x') &&
        boxs[4].classList.contains('x') &&
        boxs[7].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[1].classList.contains('circle') &&
        boxs[4].classList.contains('circle') &&
        boxs[7].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[2].classList.contains('x') &&
        boxs[5].classList.contains('x') &&
        boxs[8].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[2].classList.contains('circle') &&
        boxs[5].classList.contains('circle') &&
        boxs[8].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[0].classList.contains('x') &&
        boxs[4].classList.contains('x') &&
        boxs[8].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[0].classList.contains('circle') &&
        boxs[4].classList.contains('circle') &&
        boxs[8].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[2].classList.contains('x') &&
        boxs[4].classList.contains('x') &&
        boxs[6].classList.contains('x')) {
        p1score++
        score1.textContent = p1score
        winningMessage.style.display = 'flex'
        message.textContent = 'X Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }

    if (boxs[2].classList.contains('circle') &&
        boxs[4].classList.contains('circle') &&
        boxs[6].classList.contains('circle')) {
        p2score++
        score2.textContent = p2score
        winningMessage.style.display = 'flex'
        message.textContent = 'O Win!'
        boxs.forEach(function (box) {
            box.classList.add('disable')

        })
    }


    // if (boxs[winningCombination[4]].classList.contains('circle')){
    //     console.log('win')
    // }
    // if position user select is winningCombination position


    // if(currentFirstSelect === )
    // for(i=0;i<boxs.length; i++){
    //     if(checkForWin){
    //         console.log('win')
    //     }

    // }
    // for(i = 0; i < boxs.length; i++)
    //     if(boxs[i].classList.contains('x' || 'circle' )){

    //     }   



}

function restart() {
    for (i = 0; i < boxs.length; i++) {
        if (boxs[i].classList.contains('x')) {
            boxs[i].classList.remove('x')
        }
        if (boxs[i].classList.contains('circle')) {
            boxs[i].classList.remove('circle')
        }
        if (boxs[i].classList.contains('disable')) {
            boxs[i].classList.remove('disable')
        }

    }
    winningMessage.style.display = 'none'

    count = 0
}

function reset() {
    for (i = 0; i < boxs.length; i++) {
        if (boxs[i].classList.contains('x')) {
            boxs[i].classList.remove('x')
        }
        if (boxs[i].classList.contains('circle')) {
            boxs[i].classList.remove('circle')
        }
        if (boxs[i].classList.contains('disable')) {
            boxs[i].classList.remove('disable')
        }

    }

    count = 0
    p1score = 0
    p2score = 0

    score1.textContent = p1score
    score2.textContent = p2score

}





boxs.forEach(function (box) {
    box.addEventListener('click', handleClick)
})


// playAgainBtn.addEventListener('click', restart)
restartBtn.addEventListener('click', restart)
resetBtn.addEventListener('click', reset)









// function checkForWin (){
//     for(idx=0;idx<winningCombination.length;idx++){
//     }
// }
// function currentFirstSelect(){
//    for(i=0;i<boxs.length;i++){
//        boxs[i].classList.contains('x')
//    }
// }
// function currentSecindSelect(){
//     for(i=0;i<boxs.length;i++){
//         boxs[i].classList.contains('circle')
//     }
// }





// if (count % 1 === 0 ){
//     // for(i = 0; i < boxs.length; i++){
//         boxs[i].classList.add('x')

//     // }
// }

// }