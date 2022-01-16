/* eslint-disable no-undef */
const lvl1_1 = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        nextLvl : function() { 
            lvl1_2.init();
        }
    },
    //la position de la cible
    targetCell : {
        x : 7,
        y : 4,
    },

    stones : [

    ],

    trees : [
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
        y : 5,
    },

    init () {
        base.valueReturnfromLvl(lvl1_1.board.x,lvl1_1.board.y,lvl1_1.player.x,lvl1_1.player.y, lvl1_1.targetCell.x,
            lvl1_1.targetCell.y,lvl1_1.player.direction,lvl1_1.stones,lvl1_1.trees,lvl1_1.littleCoffer, lvl1_1.player.nextLvl);
        base.init();
    },
};

/* eslint-disable no-undef */
const lvl1_2 = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        nextLvl : function() { 
            lvl1_3.init();
        }
    },
    //la position de la cible
    targetCell : {
        x : 7,
        y : 4,
    },

    stones : [
       
    ],
    trees : [
        {x : 3,y : 2},{x : 9,y : 9},{x : 8,y : 4},
        {x : 7,y : 9},{x : 5,y : 9},{x : 8,y : 5},
        {x : 2,y : 0},{x : 8,y : 9},{x : 1,y : 4},
        {x : 6,y : 9},{x : 4,y : 9},{x : 4,y : 3},
        {x : 5,y : 2},{x : 3,y : 9},{x : 4,y : 2},
        {x : 3,y : 3},{x : 2,y : 9},{x : 4,y : 1},
        {x : 1,y : 1},{x : 1,y : 9},{x : 5,y : 1},
        {x : 1,y : 2},{x : 0,y : 9},{x : 6,y : 1},
        {x : 5,y : 3},{x : 0,y : 8},{x : 7,y : 1},
        {x : 5,y : 4},{x : 0,y : 7},
        {x : 7,y : 3},{x : 0,y : 6},
        {x : 5,y : 5},{x : 0,y : 5},
        {x : 5,y : 6},{x : 5,y : 7},
        {x : 4,y : 7},{x : 1,y : 5},
        {x : 7,y : 5},{x : 3,y : 7},
        {x : 6,y : 3},{x : 2,y : 7},
        {x : 7,y : 7},{x : 2,y : 5},
        {x : 8,y : 7},{x : 3,y : 5},
        {x : 9,y : 7},{x : 8,y : 3},
    ],

    board : {
        x : 10,
        y : 10,
    },

    init () {
        base.valueReturnfromLvl(lvl1_2.board.x,lvl1_2.board.y,lvl1_2.player.x,lvl1_2.player.y, lvl1_2.targetCell.x,
            lvl1_2.targetCell.y,lvl1_2.player.direction,lvl1_2.stones,lvl1_2.trees,lvl1_2.littleCoffer, lvl1_2.player.nextLvl);
        base.init();
    },
};
/* eslint-disable no-undef */
const lvl1_3 = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        nextLvl : function() { 
            lvl1_4.init();
        }
    },
    //la position de la cible
    targetCell : {
        x : 0,
        y : 7,
    },

    littleCoffer : [
        {x : 7,y : 4},
    ],


    stones : [
        {x : 6,y : 6},{x : 3,y : 2},{x : 20,y : 20},
    ],

    trees : [
        {x : 2,y : 0},{x : 3,y : 0},{x : 4,y : 0},{x : 4,y : 0},{x : 5,y : 0},{x : 6,y : 0},
        {x : 6,y : 5},{x : 7,y : 5},{x : 8,y : 5},
        {x : 8,y : 2},{x : 8,y : 3},{x : 8,y : 4},
        {x : 6,y : 7},{x : 6,y : 8},{x : 6,y : 9},
        {x : 2,y : 1},{x : 2,y : 2},{x : 2,y : 3},{x : 2,y : 3},
        {x : 7,y : 2},{x : 6,y : 2},{x : 5,y : 2},{x : 4,y : 2},
    ],
    

    board : {
        x : 16,
        y : 10,
    },

    init () {
        base.valueReturnfromLvl(lvl1_3.board.x,lvl1_3.board.y,lvl1_3.player.x,lvl1_3.player.y, lvl1_3.targetCell.x,
            lvl1_3.targetCell.y,lvl1_3.player.direction,lvl1_3.stones,lvl1_3.trees,lvl1_3.littleCoffer, lvl1_3.player.nextLvl);
        base.init();
    },
};

document.addEventListener('DOMContentLoaded', lvl1_3.init());
