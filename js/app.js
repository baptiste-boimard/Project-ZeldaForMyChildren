var app = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        name :'Link',
    },
    //la position de la cible
    targetCell : {
        x : 7,
        y : 4,
    },

    stones : [
        {x : 3,y : 2},
        {x : 2,y : 0},
        {x : 5,y : 2},
        {x : 2,y : 3},
        {x : 1,y : 1},
        {x : 1,y : 2},
        {x : 5,y : 3},
        {x : 5,y : 4},
    ],
    
    board : {
        x : 8,
        y : 5,
    },

    boardElm : document.querySelector('#board'),
    inputSelectLvlElm : document.querySelector('#input-selectLvl'),

    gameOver : false,
   

    drawBoard (boardX = app.board.x, boardY = app.board.y) {
      
        for (let indexY=0; indexY < boardY ; indexY++) {
            const boardRowElm = document.createElement('div');
            boardRowElm.classList.add('row');
            for(let indexX=0;indexX<boardX;indexX++ ) {
                const boardCellElm = document.createElement('div');
                boardCellElm.classList.add('cell');
                
                if (indexX === (app.targetCell.x)  && (indexY === app.targetCell.y)) {
                    boardCellElm.classList.add('coffer');
                }
                if (indexX === (app.player.x)  && (indexY === app.player.y)) {               
                    const playerElm = document.createElement('div');
                    playerElm.classList.add('player',`player__direction--${app.player.direction}`);                    
                    boardCellElm.append(playerElm);                 
                }
                
                app.drawStone (indexX,indexY,boardCellElm);

                boardRowElm.append(boardCellElm);
            }
            app.boardElm.append(boardRowElm);
        }
        app.isGameOver(app.playerElm, app.cofferElm);
    },
    drawStone (indexX, indexY, boardCellElm) {
        for (let indexArrayStones=0;indexArrayStones<app.stones.length;indexArrayStones++) {
            if (indexX === (app.stones[indexArrayStones].x)  && (indexY === app.stones[indexArrayStones].y)) {
                const stoneElm = document.createElement('div');
                stoneElm.classList.add('stone');
                boardCellElm.append(stoneElm);
            }
        }
    },
    clearBoard () {
        app.boardElm.textContent = '';
    },
    redrawBoard () {
        app.clearBoard();
        app.drawBoard();
    },
    
    goToLeft () {
        
        app.player.direction = 'left';
        let valueBeforeMove = app.player.x;
        let XorY = 'x';
        app.player.x -= 1;
        if (app.player.x < 0) {
            app.player.x = 0;
            return app.player.x = valueBeforeMove;
        }
        app.checkStones(XorY,valueBeforeMove);
        app.player.score += 1;
        app.redrawBoard ();

    },
    goToRight () {
        
        app.player.direction = 'right';
        let valueBeforeMove = app.player.x;
        let XorY = 'x';
        app.player.x += 1;
        if (app.player.x > app.board.x -1) {
            app.player.x = app.board.x -1;
            return app.player.x = valueBeforeMove;
        }
        app.checkStones(XorY,valueBeforeMove);
        app.player.score += 1;
        app.redrawBoard ();

    },
    goToUp () {
        
        app.player.direction = 'up';
        let valueBeforeMove = app.player.y;
        let XorY = 'y';
        app.player.y -= 1;
        if (app.player.y < 0) {
            app.player.y = 0;
            return app.player.y = valueBeforeMove;
        }
        app.checkStones(XorY,valueBeforeMove);
        app.player.score += 1;
        app.redrawBoard ();

    },
    goToDown () {
        
        app.player.direction = 'down';
        let valueBeforeMove = app.player.y;
        let XorY = 'y';
        app.player.y += 1;
        if (app.player.y > app.board.y-1) {
            return app.player.y = valueBeforeMove;
        }
        app.checkStones(XorY,valueBeforeMove);
        app.player.score += 1;
        app.redrawBoard ();

    },
    checkStones (XorY, valueBeforeMove) {

        for (let indexArrayStones=0;indexArrayStones<app.stones.length;indexArrayStones++) {
            if (app.player.x === (app.stones[indexArrayStones].x)  && (app.player.y === app.stones[indexArrayStones].y)) {
                app.player.score -= 1;
                return app.player[XorY] = valueBeforeMove;
            }
        }

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

        winText.textContent = `Bravo vous avez gagné !! en ${app.player.score} coups`;
        buttonRejouer.textContent = 'Rejouer';

        app.boardElm.append(winDivElm);

        document.addEventListener('keyup', app.handleOnKeyPress);
        buttonRejouer.addEventListener('click', app.handleOnClickButton);


    },
    listenKeyboardEvents () {
        document.addEventListener ('keyup', app.handleKeyboardEvents);
    },
    listenEventInputNameElm () {
        const buttonInputNameElm = document.querySelector('#button-inputName');
        buttonInputNameElm.addEventListener ('click', app.handleSubmitHeroName);
    },
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
    handleOnKeyPress (event) {
        if (event.key === ' ') {
            location.reload();
        }
    },
    handleOnClickButton () {
        location.reload();
    },
    handleSubmitHeroName (event) {
        event.preventDefault();
        const inputNameElm = document.querySelector('#input-name');
        const inputNameElmValue = inputNameElm.value;
        inputNameElm.style.placeholder = inputNameElmValue;
        app.player.name = inputNameElmValue;
    },
    init () {
        app.listenKeyboardEvents();
        app.listenEventInputNameElm();
        app.drawBoard();
    },
};

document.addEventListener('DOMContentLoaded', app.init);
