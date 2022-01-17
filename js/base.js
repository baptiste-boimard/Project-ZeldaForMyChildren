const base = {

    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        name :'Link',
        nextLvl : '',
        currentLvl : '',
        gantlet : false,
    },
    targetCell : {x : 0,y :0,},
    littleCoffer : [],
    stones : [],
    stonesDestroyed : [],
    trees : [],
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
     * @property {array} treesArray - Liste des coordonées des trees
     * @property {array} littleCoffer - Liste des coordonées des LittleCoffer
     * @property {function} nextLvl - nom de la fonction du prochain level
     * @property {function} currentLvl - nom de la fonction du curent level
     */
    valueReturnfromLvl (boardX , boardY, playerX, playerY, targetCellX, targetCellY, playerDirection, stonesArray,treesArray,littleCofferArray, nextLvl, currentLvl) {
        base.board.x = boardX,
        base.board.y = boardY,
        base.player.x = playerX;
        base.player.y = playerY;
        base.targetCell.x = targetCellX;
        base.targetCell.y = targetCellY;
        base.player.direction = playerDirection;
        base.stones = stonesArray;
        base.trees = treesArray;
        base.littleCoffer = littleCofferArray;
        base.player.nextLvl = nextLvl;
        base.player.currentLvl = currentLvl;
        base.player.score = 0;
        base.gameOver = false;
        base.player.gantlet = false;
    },
    drawBoard (boardX = base.board.x, boardY = base.board.y) {


        for (let indexY=0; indexY < boardY ; indexY++) {
            const boardRowElm = document.createElement('div');
            boardRowElm.classList.add('row');
            for(let indexX=0;indexX<boardX;indexX++ ) {
                const boardCellElm = document.createElement('div');
                boardCellElm.classList.add('cell');

                base.drawlittleCoffer (indexX,indexY,boardCellElm);
  
                if (indexX === (base.targetCell.x)  && (indexY === base.targetCell.y)) {
                    boardCellElm.classList.add('coffer');
                }
                
                if (indexX === (base.player.x)  && (indexY === base.player.y)) {               
                    const playerElm = document.createElement('div');
                    playerElm.classList.add('player',`player__direction--${base.player.direction}`);                    
                    boardCellElm.append(playerElm);                 
                }
                
                //Ajout des coordonées des cases
                
                // boardCellElm.classList.add('coord');
                // boardCellElm.textContent = `${indexX} , ${indexY}`;
                
                base.drawStone (indexX,indexY,boardCellElm);
                base.drawTree (indexX,indexY,boardCellElm);
                boardRowElm.append(boardCellElm);   
            }
            base.boardElm.append(boardRowElm);
        }
        base.checkLittleCoffer();
        base.isGameOver();

    },

    drawStone (indexX, indexY, boardCellElm) {
        for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
            if (indexX === (base.stones[indexArray].x)  && (indexY === base.stones[indexArray].y)) {
                const stoneElm = document.createElement('div');
                stoneElm.classList.add('stone');
                boardCellElm.append(stoneElm);
            }
        }
    },
    drawTree (indexX, indexY, boardCellElm) {
        for (let indexArray=0;indexArray<base.trees.length;indexArray++) {
            if (indexX === (base.trees[indexArray].x)  && (indexY === base.trees[indexArray].y)) {
                const treeElm = document.createElement('div');
                treeElm.classList.add('tree');
                boardCellElm.append(treeElm);
            }
        }
    },
    drawlittleCoffer (indexX, indexY, boardCellElm) {
        if (base.player.gantlet === false) {
            for (let indexArray=0;indexArray<base.littleCoffer.length;indexArray++) {
                if (indexX === (base.littleCoffer[indexArray].x)  && (indexY === base.littleCoffer[indexArray].y)) {
                    const treeElm = document.createElement('div');
                    treeElm.classList.add('littleCoffer');
                    boardCellElm.append(treeElm);
                }
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
        //Clear de la fenetre        
        const winDivElm = document.querySelector('.winDivElm');
        winDivElm.textContent = '';
        base.clearBoard();
        //retour des valeurs des stones avec celles détruites
        base.stones = base.stones.concat(base.stonesDestroyed);
        base.init();
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
    },
    isLittleCoffer () {

        base.createBox();

        const winDivLeftH1 = document.querySelector('.winDivLeftH1');
        winDivLeftH1.textContent = `Bravo ${base.player.name} tu as trouvé le gant briseur de rocher !!`;
        const winDivLeftP = document.querySelector('.winDivLeftP'); 
        winDivLeftP.textContent = 'Appuis sur \'ESPACE\' pour pouvoir l\'utiliser devant un rocher';
        const winDivLeftButtonNext = document.querySelector('.winDivLeftButtonOK');
        winDivLeftButtonNext.textContent ='Continuer';

    },

    createBox () {
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
        const winDivLeftButtonOK= document.createElement('button');
        winDivLeftButtonOK.classList.add('winDivLeftButtonOK');
        const winDivRightElm = document.createElement('div');
        winDivRightElm.classList.add('winDivRightElm');
            
        winDivElm.append(winDivLeftElm, winDivRightElm);
        winDivLeftElm.append(winDivLeftH1,winDivLeftP,winDivLeftDivButton);
        winDivLeftDivButton.append(winDivLeftButtonOK);

        base.boardElm.append(winDivElm);

        winDivLeftButtonOK.addEventListener('click', base.handleOnClickOKButton);

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
        base.checkTrees(XorY,valueBeforeMove);
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
        base.checkTrees(XorY,valueBeforeMove);
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
        base.checkTrees(XorY,valueBeforeMove);
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
        base.checkTrees(XorY,valueBeforeMove);
        base.player.score += 1;
        base.redrawBoard ();

    },
    spaceKey () {
        if (base.player.gantlet === true) {
            switch (base.player.direction) {
            case 'right' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x+1) === (base.stones[indexArray].x)  && ((base.player.y) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);
                        
                        base.redrawBoard ();
                
                    }
                }
            }
                break;
            case 'left' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x-1) === (base.stones[indexArray].x)  && ((base.player.y) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);
                        
                        base.redrawBoard ();
                
                    }
                }
            }
                break;
            case 'up' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x) === (base.stones[indexArray].x)  && ((base.player.y-1) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);

                        base.redrawBoard ();

                    }
                }
            }
                break;
            case 'down' : {
                for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
                    if ((base.player.x +1) === (base.stones[indexArray].x)  && ((base.player.y+1) === base.stones[indexArray].y)) {
                        
                        const stoneDestroyed = base.stones.splice(indexArray,1);  
                        
                        base.stonesDestroyed = base.stonesDestroyed.concat(stoneDestroyed);
                        
                        base.redrawBoard ();
                
                    }
                }
            }
                break;
            }
        }
    },
    checkStones (XorY, valueBeforeMove) {

        for (let indexArray=0;indexArray<base.stones.length;indexArray++) {
            if (base.player.x === (base.stones[indexArray].x)  && (base.player.y === base.stones[indexArray].y)) {
                base.player.score -= 1;
               
        
                return base.player[XorY] = valueBeforeMove;
        
            }
        }

    },
    checkTrees (XorY, valueBeforeMove) {

        for (let indexArray=0;indexArray<base.trees.length;indexArray++) {
            if (base.player.x === (base.trees[indexArray].x)  && (base.player.y === base.trees[indexArray].y)) {
                base.player.score -= 1;
                        
                return base.player[XorY] = valueBeforeMove;
        
            }
        }
    },
    checkLittleCoffer () {
        if (base.player.gantlet === false) {
            for (let indexArray=0;indexArray<base.littleCoffer.length;indexArray++) {
                if (base.player.x === (base.littleCoffer[indexArray].x) && (base.player.y === base.littleCoffer[indexArray].y)) {
                    base.player.gantlet = true;
                    setTimeout(base.isLittleCoffer(), 200);
                    return;
                }
            }
        }
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
        case ' ' : base.spaceKey();
            break;
        }
    },
    handleOnClickReplayButton () {
        base.replay();
    },
    handleOnClickNextButton () {
        base.player.score = 0;
        base.gameOver = false;
        base.gantlet = false;
        base.clearBoard();
        base.player.nextLvl();
    },
    handleOnClickOKButton () {
        
        const winDivElm = document.querySelector('.winDivElm');
        winDivElm.textContent = '';
        base.redrawBoard();

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
