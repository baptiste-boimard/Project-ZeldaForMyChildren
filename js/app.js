/* eslint-disable no-undef */
const lvl1_1 = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        nextLvl : () => {lvl1_2.init();},
        currentLvl : () => {lvl1_1.init();},
    },
    //la position de la cible
    targetCell : {
        x : 7,
        y : 4,
    },

    littleCoffer : [],

    stones : [],

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
        base.welcomeHero();
        base.valueFromLvl(lvl1_1.board.x,lvl1_1.board.y,lvl1_1.player.x,lvl1_1.player.y, lvl1_1.targetCell.x,
            lvl1_1.targetCell.y,lvl1_1.player.direction,lvl1_1.stones,lvl1_1.trees,lvl1_1.littleCoffer, lvl1_1.player.nextLvl,lvl1_1.player.currentLvl);
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
        nextLvl : () => {lvl1_3.init();},
        currentLvl : () => {lvl1_2.init();},
    },
    //la position de la cible
    targetCell : {
        x : 7,
        y : 4,
    },
    littleCoffer : [],

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
        base.valueFromLvl(lvl1_2.board.x,lvl1_2.board.y,lvl1_2.player.x,lvl1_2.player.y, lvl1_2.targetCell.x,
            lvl1_2.targetCell.y,lvl1_2.player.direction,lvl1_2.stones,lvl1_2.trees,lvl1_2.littleCoffer, lvl1_2.player.nextLvl,lvl1_2.player.currentLvl);
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
        nextLvl : () => {lvl1_4.init();},
        currentLvl : () => {lvl1_3.init();},
    },
    //la position de la cible
    targetCell : {
        x : 15,
        y : 9,
    },

    littleCoffer : [
        {x : 7,y : 4},
    ],


    stones : [
        {x : 6,y : 6},{x : 3,y : 2},{x : 8,y : 1},{x : 10,y : 1},{x : 9,y : 7},
        {x : 12,y : 4},{x : 12,y : 2},{x : 9,y : 4},{x : 15,y : 7},
    ],

    trees : [
        {x : 2,y : 0},{x : 3,y : 0},{x : 4,y : 0},{x : 4,y : 0},{x : 5,y : 0},
        {x : 6,y : 0},{x : 14,y : 2},{x : 14,y : 9},{x : 14,y : 8},{x : 14,y : 7},
        {x : 6,y : 5},{x : 7,y : 5},{x : 8,y : 5},{x : 7,y : 9},{x : 8,y : 9},
        {x : 8,y : 2},{x : 8,y : 3},{x : 8,y : 4},{x : 9,y : 9},{x : 10,y : 9},
        {x : 6,y : 7},{x : 6,y : 8},{x : 6,y : 9},{x : 11,y : 9},{x : 12,y : 9},
        {x : 2,y : 1},{x : 2,y : 2},{x : 2,y : 3},{x : 2,y : 3},{x : 13,y : 9},
        {x : 7,y : 2},{x : 6,y : 2},{x : 5,y : 2},{x : 4,y : 2},
        {x : 4,y : 5},{x : 4,y : 6},{x : 4,y : 7},{x : 4,y : 8},
        {x : 2,y : 4},{x : 3,y : 4},{x : 4,y : 4},
        {x : 0,y : 5},{x : 0,y : 6},{x : 0,y : 7},{x : 0,y : 8},{x : 0,y : 9},
        {x : 1,y : 9},{x : 2,y : 9},
        {x : 7,y : 0},{x : 8,y : 0},{x : 9,y : 0},{x : 10,y : 0},
        {x : 11,y : 0},{x : 12,y : 0},{x : 13,y : 0},{x : 14,y : 0},{x : 15,y : 0},
        {x : 10,y : 2},{x : 10,y : 3},{x : 10,y : 4},{x : 10,y : 5},
        {x : 12,y : 1},{x : 12,y : 3},{x : 12,y : 5},{x : 12,y : 6},
        {x : 12,y : 7},{x : 10,y : 7},{x : 11,y : 7},{x : 7,y : 7},{x : 8,y : 7},
        {x : 13,y : 5},{x : 14,y : 5},{x : 15,y : 5},{x : 13,y : 3},{x : 14,y : 3},
    ],
    

    board : {
        x : 16,
        y : 10,
    },

    init () {

        base.valueFromLvl(lvl1_3.board.x,lvl1_3.board.y,lvl1_3.player.x,lvl1_3.player.y, lvl1_3.targetCell.x,
            lvl1_3.targetCell.y,lvl1_3.player.direction, lvl1_3.stones,lvl1_3.trees,lvl1_3.littleCoffer, lvl1_3.player.nextLvl, lvl1_3.player.currentLvl);
            
        base.init();
    },
};

document.addEventListener('DOMContentLoaded', lvl1_1.init());

