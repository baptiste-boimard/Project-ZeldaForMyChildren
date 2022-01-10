const base = {

    initialValueFromLvl :  {
        boardX : 0,
        boardY : 0,
        playerX : 0,
        playerY : 0,
        targetCellX : 0,
        targetCellY : 0,
        playerDirection : 0,
        stonesArray : [],
        nextLvl : '',
    },

    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        name :'Link',
        nextLvl : '',
    },
    targetCell : {x : 0,y :0,},
    stones : [],
    board : {x :0,y :0},

    boardElm : document.querySelector('#board'),
    inputSelectLvlElm : document.querySelector('#input-selectLvl'),

    gameOver : false,
   
    /**
     * Dessine le board et rapatrie les valeurs du level
     * @property {number} boardX - Taille X du board
     * @property {number} boardY- Taille Y du board
     * @property {number} playerX- Coordonée X du player
     * @property {number} playerY- Coordonée Y du player
     * @property {number} targetCellX- Coordonée X du coffre
     * @property {number} targetCellY- Coordonée Y du coffre
     * @property {string} playerDirection- Orientation de départ du perso
     * @property {array} stonesArray - Liste des coordonées des stones
     * @property {string} nextLvl - nom de la page html du prochain level
     */
    valueReturnfromLvl (boardX , boardY, playerX, playerY, targetCellX, targetCellY, playerDirection, stonesArray,nextLvl) {
        base.board.x = base.initialValueFromLvl.boardX = boardX,
        base.board.y = base.initialValueFromLvl.boardY = boardY,
        base.player.x = base.initialValueFromLvl.playerX = playerX;
        base.player.y = base.initialValueFromLvl.playerY = playerY;
        base.targetCell.x = base.initialValueFromLvl.targetCellX = targetCellX;
        base.targetCell.y = base.initialValueFromLvl.botargetCellY = targetCellY;
        base.player.direction = base.initialValueFromLvl.playerDirection = playerDirection;
        base.stones = base.initialValueFromLvl.stonesArray = stonesArray;
        base.player.nextLvl = base.initialValueFromLvl.nextLvl = nextLvl;
        
    },
    returnInitialeValueFromLvl () {
        base.board.x = base.initialValueFromLvl.boardX;
        base.board.y = base.initialValueFromLvl.boardY;
        base.player.x = base.initialValueFromLvl.playerX;
        base.player.y = base.initialValueFromLvl.playerY;
        base.targetCell.x = base.initialValueFromLvl.targetCellX;
        base.targetCell.y = base.initialValueFromLvl.botargetCellY;
        base.player.direction = base.initialValueFromLvl.playerDirection;
        base.stones = base.initialValueFromLvl.stonesArray;
        base.player.nextLvl = base.initialValueFromLvl.nextLvl;
        base.player.score = 0;
        base.gameOver = false;
    },
    drawBoard (boardX = base.board.x, boardY = base.board.y) {


        for (let indexY=0; indexY < boardY ; indexY++) {
            const boardRowElm = document.createElement('div');
            boardRowElm.classList.add('row');
            for(let indexX=0;indexX<boardX;indexX++ ) {
                const boardCellElm = document.createElement('div');
                boardCellElm.classList.add('cell');
                
                if (indexX === (base.targetCell.x)  && (indexY === base.targetCell.y)) {
                    boardCellElm.classList.add('coffer');
                }
                if (indexX === (base.player.x)  && (indexY === base.player.y)) {               
                    const playerElm = document.createElement('div');
                    playerElm.classList.add('player',`player__direction--${base.player.direction}`);                    
                    boardCellElm.append(playerElm);                 
                }
                
                base.drawStone (indexX,indexY,boardCellElm);

                boardRowElm.append(boardCellElm);
            }
            base.boardElm.append(boardRowElm);
        }
        base.isGameOver();

    },

    drawStone (indexX, indexY, boardCellElm) {
        for (let indexArrayStones=0;indexArrayStones<base.stones.length;indexArrayStones++) {
            if (indexX === (base.stones[indexArrayStones].x)  && (indexY === base.stones[indexArrayStones].y)) {
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
    replay () {
        base.returnInitialeValueFromLvl();
        base.clearBoard();
        base.init();
    },
    goToLeft () {
        
        if (base.gameOver === true)
            return;

        base.player.direction = 'left';
        let valueBeforeMove = base.player.x;
        let XorY = 'x';
        base.player.x -= 1;
        if (base.player.x < 0) {
            base.player.x = 0;
            return base.player.x = valueBeforeMove;
        }
        base.checkStones(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    goToRight () {
        
        if (base.gameOver === true)
            return;

        base.player.direction = 'right';
        let valueBeforeMove = base.player.x;
        let XorY = 'x';
        base.player.x += 1;
        if (base.player.x > base.board.x -1) {
            base.player.x = base.board.x -1;
            return base.player.x = valueBeforeMove;
        }
        base.checkStones(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    goToUp () {
        
        if (base.gameOver === true)
            return;

        base.player.direction = 'up';
        let valueBeforeMove = base.player.y;
        let XorY = 'y';
        base.player.y -= 1;
        if (base.player.y < 0) {
            base.player.y = 0;
            return base.player.y = valueBeforeMove;
        }
        base.checkStones(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    goToDown () {
        
        if (base.gameOver === true)
            return;

        base.player.direction = 'down';
        let valueBeforeMove = base.player.y;
        let XorY = 'y';
        base.player.y += 1;
        if (base.player.y > base.board.y-1) {
            return base.player.y = valueBeforeMove;
        }
        base.checkStones(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    checkStones (XorY, valueBeforeMove) {

        for (let indexArrayStones=0;indexArrayStones<base.stones.length;indexArrayStones++) {
            if (base.player.x === (base.stones[indexArrayStones].x)  && (base.player.y === base.stones[indexArrayStones].y)) {
                base.player.score -= 1;
                return base.player[XorY] = valueBeforeMove;
            }
        }

    },
    isGameOver () {
        if (base.player.x === base.targetCell.x && base.player.y === base.targetCell.y) {
            base.gameOver = true;
            setTimeout(base.isWin(), 200);
            return;
        }
    },
    isWin () {
        
        base.createWinningBox();

        const winDivLeftH1 = document.querySelector('.winDivLeftH1');
        winDivLeftH1.textContent = `Bravo ${base.player.name} tu as gagné !!`;
        const winDivLeftP = document.querySelector('.winDivLeftP'); 
        winDivLeftP.textContent = `Tu as fait ${base.player.score} déplacements`;
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

        winDivLeftButtonReplay.addEventListener('click', base.handleOnClickReplayButton);
        winDivLeftButtonNext.addEventListener('click', base.handleOnClickNextButton);
    },
    listenKeyboardEvents () {
        document.addEventListener ('keyup', base.handleKeyboardEvents);
    },
    listenEventInputNameElm () {
        const buttonInputNameElm = document.querySelector('#button-inputName');
        buttonInputNameElm.addEventListener ('click', base.handleSubmitHeroName);
    },
    handleKeyboardEvents (event) {
        const keyupPressed = event.key;
        switch(keyupPressed) {
        case 'ArrowLeft' : base.goToLeft();
            break;
        case 'ArrowRight' : base.goToRight();
            break;
        case 'ArrowUp' : base.goToUp();
            break;
        case 'ArrowDown' : base.goToDown();
            break;
        }
    },
    handleOnClickReplayButton () {
        base.replay();
    },
    handleOnClickNextButton () {
        document.location = base.player.nextLvl;
    },
    handleSubmitHeroName (event) {
        event.preventDefault();
        const inputNameElm = document.querySelector('#input-name');
        const inputNameElmValue = inputNameElm.value;
        inputNameElm.style.placeholder = inputNameElmValue;
        base.player.name = inputNameElmValue;
    },
    init () {
        base.listenKeyboardEvents();
        base.listenEventInputNameElm();
        base.drawBoard();
    },
};
