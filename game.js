boxs = document.querySelectorAll('.box1')
playAgainBtn = document.querySelector('.play-again')
playerOne = document.querySelector('h3')
playerTwo = document.querySelector('h4')
score1 = document.querySelector('.score1')
score2 = document.querySelector('.score2')


// currentSelect = boxs[1]
count = 0
p1score = 0
p2score = 0
// currentSelect = boxs

let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// checkForWin = true
function handleClick (event){
    userClickBox = event.target
    console.log('clicking')
    count++
    if (count % 1 === 0 ){
        userClickBox.classList.add('firstUser')
        playerOne.classList.remove('player-one')
        playerTwo.classList.add('player-two')
    }
    
    if (count % 2 === 0){
        userClickBox.classList.remove('firstUser')
        userClickBox.classList.add('secondUser')
        playerTwo.classList.remove('player-two')
        playerOne.classList.add('player-one')
    }
    
    if (boxs[0].classList.contains('firstUser') &&
        boxs[1].classList.contains('firstUser') &&
        boxs[2].classList.contains('firstUser') ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')
        }


    if (boxs[0].classList.contains('secondUser') &&
        boxs[1].classList.contains('secondUser') &&
        boxs[2].classList.contains('secondUser')) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')
            // boxs[0].classList.add('winner') &&
            // boxs[1].classList.add('winner') &&
            // boxs[2].classList.add('winner')
        }

    if (boxs[3].classList.contains('firstUser') &&
        boxs[4].classList.contains('firstUser') &&
        boxs[5].classList.contains('firstUser') ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')
        }
        
    if (boxs[3].classList.contains('secondUser') &&
        boxs[4].classList.contains('secondUser') &&
        boxs[5].classList.contains('secondUser') ) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')
        }
        
    if (boxs[6].classList.contains('firstUser') &&
        boxs[7].classList.contains('firstUser') &&
        boxs[8].classList.contains('firstUser') ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')}

    if (boxs[6].classList.contains('secondUser') &&
        boxs[7].classList.contains('secondUser') &&
        boxs[8].classList.contains('secondUser')  ) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')}

    if (boxs[0].classList.contains('firstUser') &&
        boxs[3].classList.contains('firstUser') &&
        boxs[6].classList.contains('firstUser')  ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')
        }

    if (boxs[0].classList.contains('secondUser') &&
        boxs[3].classList.contains('secondUser') &&
        boxs[6].classList.contains('secondUser') ) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')}

    if (boxs[1].classList.contains('firstUser') &&
        boxs[4].classList.contains('firstUser') &&
        boxs[7].classList.contains('firstUser') ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')}
    
    if (boxs[1].classList.contains('secondUser') &&
        boxs[4].classList.contains('secondUser') &&
        boxs[7].classList.contains('secondUser') ) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')}

    if (boxs[2].classList.contains('firstUser') &&
        boxs[5].classList.contains('firstUser') &&
        boxs[8].classList.contains('firstUser') ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')}

    if (boxs[2].classList.contains('secondUser') &&
        boxs[5].classList.contains('secondUser') &&
        boxs[8].classList.contains('secondUser') ) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')}

    if (boxs[0].classList.contains('firstUser') &&
        boxs[4].classList.contains('firstUser') &&
        boxs[8].classList.contains('firstUser') ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')}

    if (boxs[0].classList.contains('secondUser') &&
        boxs[4].classList.contains('secondUser') &&
        boxs[8].classList.contains('secondUser') ) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')}

    if (boxs[2].classList.contains('firstUser') &&
        boxs[4].classList.contains('firstUser') &&
        boxs[6].classList.contains('firstUser') ) {
            p1score++
            score1.textContent = p1score
            alert('Player One Win')}

    if (boxs[2].classList.contains('secondUser') &&
        boxs[4].classList.contains('secondUser') &&
        boxs[6].classList.contains('secondUser') ) {
            p2score++ 
            score2.textContent = p2score
            alert('Player Two Win')}
    
    
    // if (boxs[winningCombination[4]].classList.contains('secondUser')){
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
            //     if(boxs[i].classList.contains('firstUser' || 'secondUser' )){
                
    //     }   
    
    
    
}

function playAgain (){
    for (i=0;i<boxs.length;i++){
        if (boxs[i].classList.contains('firstUser')){
            boxs[i].classList.remove('firstUser')
        }
        if (boxs[i].classList.contains('secondUser')){
            boxs[i].classList.remove('secondUser')
        }

    }
    count = 0
}





boxs.forEach(function(box){
    box.addEventListener('click', handleClick)
})


playAgainBtn.addEventListener('click', playAgain)









// function checkForWin (){
//     for(idx=0;idx<winningCombination.length;idx++){
//     }
// }
// function currentFirstSelect(){
//    for(i=0;i<boxs.length;i++){
//        boxs[i].classList.contains('firstUser')
//    }
// }
// function currentSecindSelect(){
//     for(i=0;i<boxs.length;i++){
//         boxs[i].classList.contains('secondUser')
//     }
// }





// if (count % 1 === 0 ){
//     // for(i = 0; i < boxs.length; i++){
//         boxs[i].classList.add('firstUser')

//     // }
// }

// }