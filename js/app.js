var app = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
    },
    //la position de la cible
    targetCell : {
        x : 5,
        y : 3,
    },

    stones : [
        {
            x : 3,
            y : 2,
        },
        {
            x : 2,
            y : 0,
        },
        {
            x : 5,
            y : 2,
        },
        {
            x : 2,
            y : 3,
        }
    ],
    

    board : {
        x : 6,
        y : 4,
    },

    boardElm : document.querySelector('#board'),

    gameOver : false,

    score : 0,

    drawBoard (boardX = 6, boardY = 4) {
      
      
        for (let indexY=0; indexY < boardY ; indexY++) {
            const boardRowElm = document.createElement('div');
            boardRowElm.classList.add('row');
            for(let indexX=0;indexX<boardX;indexX++ ) {
                const boardCellElm = document.createElement('div');
                boardCellElm.classList.add('cell');
                
                if (indexX === (app.targetCell.x)  && (indexY === app.targetCell.y)) 
                    boardCellElm.classList.add('targetCell');
                if (indexX === (app.player.x)  && (indexY === app.player.y)) {               
                    const playerElm = document.createElement('div');
                    playerElm.classList.add('player',`player__direction--${app.player.direction}`);                    
                    boardCellElm.append(playerElm);                 
                }
                // if (indexX === (app.stones.stone1.x)  && (indexY === app.stones.stone1.y)) 
                //     boardCellElm.classList.add('stone');
                // if (indexX === (app.stones.stone2.x)  && (indexY === app.stones.stone2.y)) 
                //     boardCellElm.classList.add('stone');
                // if (indexX === (app.stones.stone3.x)  && (indexY === app.stones.stone3.y)) 
                //     boardCellElm.classList.add('stone');
                // if (indexX === (app.stones.stone4.x)  && (indexY === app.stones.stone4.y)) 
                //     boardCellElm.classList.add('stone');

                boardRowElm.append(boardCellElm);
            }
            app.boardElm.append(boardRowElm);
        }
        app.isGameOver();
    },

    clearBoard () {
        app.boardElm.textContent = '';
    },

    redrawBoard () {
        app.clearBoard();
        app.drawBoard();
    },

    

    turnRight () {

        if (app.gameOver === true) {
            return;
        }

        switch(app.player.direction) {
        case 'right' :
            app.player.direction = 'down';
            break;
        case 'down' :
            app.player.direction = 'left';
            break;
        case 'left' :
            app.player.direction = 'up';
            break;
        case 'up' :
            app.player.direction = 'right';
            break;
        default : 
            console.log('Impossible de tourner');        
        }
        app.score += +1;
        app.redrawBoard ();
    },

    moveForward () {

        if (app.gameOver === true) {
            return;
        }


        switch(app.player.direction) {
        case 'right' :
            app.player.x += 1 ;
            if (app.player.x > 5) {
                app.player.x = 5;
            }
            break;
        case 'down' :
            app.player.y += 1 ;
            if (app.player.y > 3) {
                app.player.y = 3;
            }
            break;
        case 'left' :
            app.player.x -= 1;
            if (app.player.x < 0) {
                app.player.x = 0;
            }
            break;
        case 'up' :
            app.player.y -= 1 ;
            if (app.player.y < 0) {
                app.player.y = 0;
            }
            break;
        default : 
            console.log('Impossible de tourner');        
        }
        app.score += +1;
        app.redrawBoard ();
    },

    listenKeyboardEvents () {
        document.addEventListener ('keyup', app.handleKeyboardEvents);
    },


    // ===================================================================
    handleKeyboardEvents (event) {
        const keyupPressed = event.key;
        switch(keyupPressed) {
        case 'ArrowLeft' : app.goToLeft();
            break;
        case 'ArrowRight' : app.goToRight();
            break;
        case 'ArrowUp' : app.goToUp();
            break;
        case 'ArrowDown' : app.goToDown();
            break;
        }
    },
    
    goToLeft () {
        
        app.player.direction = 'left';
        app.player.x -= 1;
        if (app.player.x < 0) {
            app.player.x = 0;
        }
        app.redrawBoard ();

    },

    goToRight () {
        
        app.player.direction = 'right';
        app.player.x += 1;
        if (app.player.x > app.board.x -1) {
            app.player.x = app.board.x -1;
        }
        app.redrawBoard ();

    },

    goToUp () {
        
        app.player.direction = 'up';
        app.player.y -= 1;
        if (app.player.y < 0) {
            app.player.y = 0;
        }
        app.redrawBoard ();

    },

    goToDown () {
        
        app.player.direction = 'down';
        app.player.y += 1;
        if (app.player.y > app.board.y-1) {
            app.player.y = app.board.y-1;
        }
        app.redrawBoard ();

    },



    
    isGameOver () {
        if (app.player.x === app.targetCell.x && app.player.y === app.targetCell.y) {
            app.gameOver = true;
            setTimeout(app.isWin(), 200);
            return;
        }
    },
    isWin () {
        const winDivElm = document.createElement('div');
        winDivElm.classList.add('winDiv');
        const buttonRejouer = document.createElement('button'); 
        buttonRejouer.classList.add('buttonRejouer');
        const winText = document.createElement('p');

        winDivElm.append(winText);
        winDivElm.append(buttonRejouer);

        winText.textContent = `Bravo vous avez gagné !! en ${app.score} coups`;
        buttonRejouer.textContent = 'Rejouer';

        app.boardElm.append(winDivElm);

        document.addEventListener('keyup', app.handleOnKeyPress);
        buttonRejouer.addEventListener('click', app.handleOnClickButton);


    },
    handleOnKeyPress (event) {
        if (event.key === ' ') {
            location.reload();
        }
    },
    handleOnClickButton () {
        location.reload();
    },
    init () {
        app.listenKeyboardEvents();
        app.drawBoard();
    },
};

document.addEventListener('DOMContentLoaded', app.init);
