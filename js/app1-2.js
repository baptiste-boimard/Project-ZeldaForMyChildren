/* eslint-disable no-undef */
const lvl1_2 = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        nextLvl : 'lvl1_3',
    },
    //la position de la cible
    targetCell : {
        x : 7,
        y : 4,
    },

    stones : [
        {x : 3,y : 2},{x : 9,y : 9},{x : 8,y : 4},
        {x : 7,y : 9},{x : 5,y : 9},{x : 8,y : 5},
        {x : 2,y : 0},{x : 8,y : 9},{x : 1,y : 4},
        {x : 6,y : 9},{x : 4,y : 9},{x : 4,y : 3},
        {x : 5,y : 2},{x : 3,y : 9},{x : 4,y : 2},
        {x : 3,y : 3},{x : 2,y : 9},{x : 4,y : 1},
        {x : 1,y : 1},{x : 1,y : 9},{x : 5,y : 1},
        {x : 1,y : 2},{x : 0,y : 9},{x : 6,y : 1},
        {x : 5,y : 3},{x : 0,y : 8},{x : 7,y : 1},
        {x : 5,y : 4},{x : 0,y : 7},{x : 8,y : 1},
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
            lvl1_2.targetCell.y,lvl1_2.player.direction,lvl1_2.stones, lvl1_2.player.nextLvl);
        base.init();
    },
};

document.addEventListener('DOMContentLoaded', lvl1_2.init);
