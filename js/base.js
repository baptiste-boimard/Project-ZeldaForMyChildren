var base = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        name :'Link',
    },
    targetCell : {x : 7,y : 4,},
    stones : [],
    board : {x :0,y :0},

    boardElm : document.querySelector('#board'),
    inputSelectLvlElm : document.querySelector('#input-selectLvl'),

    gameOver : false,
   
    /**
     * Dessine le board
     * @property {number} boardX - Taille X du board
     * @property {number} boardY- Taille Y du board
     * @property {number} playerX- Coordonée X du player
     * @property {number} playerY- Coordonée Y du player
     * @property {number} targetCellX- Coordonée X du coffre
     * @property {number} targetCellY- Coordonée Y du coffre
     * @property {string} playerDirection- Orientation de départ du perso
     */
    drawBoard (boardX , boardY, playerX, playerY, targetCellX, targetCellY, playerDirection, stonesArray) {
      
        base.board.x = boardX;
        base.board.y = boardY;
        base.player.x = playerX;
        base.player.y = playerY;
        base.targetCell.x = targetCellX;
        base.targetCell.y = targetCellY;
        base.player.direction = playerDirection;
        base.stones = stonesArray;

        debugger;

        for (let indexY = 0; indexY < boardY ; indexY++) {
            const boardRowElm = document.createElement('div');
            boardRowElm.classList.add('row');
            for(let indexX = 0;indexX<boardX;indexX++ ) {
                const boardCellElm = document.createElement('div');
                boardCellElm.classList.add('cell');
                
                if (indexX === (targetCellX)  && (indexY === targetCellY)) {
                    boardCellElm.classList.add('coffer');
                }
                if (indexX === (playerX)  && (indexY === playerY)) {               
                    const playerElm = document.createElement('div');
                    playerElm.classList.add('player',`player__direction--${playerDirection}`);                    
                    boardCellElm.append(playerElm);                 
                }
                
                base.drawStone (indexX,indexY,boardCellElm,stonesArray);

                boardRowElm.append(boardCellElm);
            }
            base.boardElm.append(boardRowElm);

        }
        base.isGameOver(playerX, playerY, targetCellX, targetCellY);
    },

    drawStone (indexX, indexY, boardCellElm, stonesArray) {
        for (let indexArrayStones=0;indexArrayStones<stonesArray.length;indexArrayStones++) {
            if (indexX === (stonesArray[indexArrayStones].x)  && (indexY === stonesArray[indexArrayStones].y)) {
                const stoneElm = document.createElement('div');
                stoneElm.classList.add('stone');
                boardCellElm.append(stoneElm);
            }
        }
    },
    clearBoard () {
        base.boardElm.textContent = '';
    },
    redrawBoard () {
        base.clearBoard();
        base.drawBoard();
    },
    goToLeft () {
        
        if (base.gameOver === true)
            return;

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
        
        if (base.gameOver === true)
            return;

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
        
        if (base.gameOver === true)
            return;

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
    goToDown (playerDirection, playerY) {
        
        if (base.gameOver === true)
            return;

        playerDirection = 'down';
        let valueBeforeMove = playerY;
        let XorY = 'y';
        playerY += 1;
        if (playerY > playerY-1) {
            return playerY = valueBeforeMove;
        }
        base.checkStones(XorY,valueBeforeMove);
        playerY.score += 1;
        base.redrawBoard ();

    },
    checkStones (XorY, valueBeforeMove) {

        for (let indexArrayStones=0;indexArrayStones<app.stones.length;indexArrayStones++) {
            if (app.player.x === (app.stones[indexArrayStones].x)  && (app.player.y === app.stones[indexArrayStones].y)) {
                app.player.score -= 1;
                return app.player[XorY] = valueBeforeMove;
            }
        }

    },
    isGameOver (playerX, playerY, targetCellX, targetCellY) {
        if (playerX === targetCellX && playerY === targetCellY) {
            base.gameOver = true;
            debugger;
            setTimeout(base.isWin(), 200);
            return;
        }
    },
    isWin () {
        
        base.createWinningBox();

        const winDivLeftH1 = document.querySelector('.winDivLeftH1');
        winDivLeftH1.textContent = `Bravo ${app.player.name} tu as gagné !!`;
        const winDivLeftP = document.querySelector('.winDivLeftP'); 
        winDivLeftP.textContent = `Tu as fait ${app.player.score} déplacements`;
        const winDivLeftButtonNext = document.querySelector('.winDivLeftButtonNext');
        winDivLeftButtonNext.textContent ='Niveau suivant =>';
        const winDivLeftButtonReplay = document.querySelector ('.winDivLeftButtonReplay');
        winDivLeftButtonReplay.textContent ='Rejouer ?';
        // buttonRejouer.textContent = 'Rejouer';




    },
    createWinningBox () {
        const winDivElm = document.createElement('div');
        winDivElm.classList.add('winDivElm');
        const winDivLeftElm = document.createElement('div');
        winDivLeftElm.classList.add('winDivLeftElm');
        const winDivLeftH1 = document.createElement('h1');
        winDivLeftH1.classList.add('winDivLeftH1');
        const winDivLeftP = document.createElement('p');
        winDivLeftP.classList.add('winDivLeftP');
        const winDivLeftDivButton = document.createElement('div');
        winDivLeftDivButton.classList.add('winDivLeftDivButton');
        const winDivLeftButtonReplay = document.createElement('button');
        winDivLeftButtonReplay.classList.add('winDivLeftButtonReplay');
        const winDivLeftButtonNext = document.createElement('button');
        winDivLeftButtonNext.classList.add('winDivLeftButtonNext');
        const winDivRightElm = document.createElement('div');
        winDivRightElm.classList.add('winDivRightElm');
            
        winDivElm.append(winDivLeftElm, winDivRightElm);
        winDivLeftElm.append(winDivLeftH1,winDivLeftP,winDivLeftDivButton);
        winDivLeftDivButton.append(winDivLeftButtonReplay,winDivLeftButtonNext);

        base.boardElm.append(winDivElm);

        document.addEventListener('keyup', base.handleOnKeyPress);
        winDivLeftButtonReplay.addEventListener('click', base.handleOnClickButton);
    },
    listenKeyboardEvents (playerDirection,playerX, playerY) {
        debugger;
        document.addEventListener ('keyup', base.handleKeyboardEvents, playerDirection,playerX, playerY);
    },
    listenEventInputNameElm () {
        const buttonInputNameElm = document.querySelector('#button-inputName');
        buttonInputNameElm.addEventListener ('click', base.handleSubmitHeroName);
    },
    handleKeyboardEvents (event,playerDirection,playerX, playerY) {
        const keyupPressed = event.key;
        switch(keyupPressed) {
        case 'ArrowLeft' : base.goToLeft(playerDirection,playerX);
            break;
        case 'ArrowRight' : base.goToRight(playerDirection,playerX);
            break;
        case 'ArrowUp' : base.goToUp(playerDirection,playerY);
            break;
        case 'ArrowDown' : base.goToDown(playerDirection,playerY);
        debugger
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


