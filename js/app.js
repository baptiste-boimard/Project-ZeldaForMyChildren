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
        {x : 7,y : 3},
        {x : 6,y : 1},
    ],
    
    board : {
        x : 8,
        y : 5,stonesArray

    boardElm : document.querySelector('#board'),
    inputSelectLvlElm : document.querySelector('#input-selectLvl'),

    gameOver : false,
   

    
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
        
        if (app.gameOver === true)
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
        
        if (app.gameOver === true)
            return;

        app.player.direction = 'right';
        let valueBeforeMove = app.player.stonesArray
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
        
        if (app.gameOver === true)
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
    goToDown () {
        
        if (app.gameOver === true)
            return;

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
        
        app.createWinningBox();

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

        app.boardElm.append(winDivElm);

        document.addEventListener('keyup', app.handleOnKeyPress);
        winDivLeftButtonReplay.addEventListener('click', app.handleOnClickButton);
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
        base.listenKeyboardEvents(app.player.direction,app.board.x,app.board.y);
        debugger;
        app.listenEventInputNameElm();
        base.drawBoard(app.board.x,app.board.y,app.player.x,app.player.y, app.targetCell.x,
            app.targetCell.y,app.player.direction,app.stones);
    },
};

document.addEventListener('DOMContentLoaded', app.init);
