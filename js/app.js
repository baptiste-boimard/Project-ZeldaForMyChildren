const app = {

    //je définis mes variables
    //position du joueur
    player : {
        x : 0,
        y : 0,
        direction : 'right',
        score : 0,
        nextLvl : '../html/lvl1-2.html',
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
        y : 5,
    },

    init () {
        base.valueReturnfromLvl(app.board.x,app.board.y,app.player.x,app.player.y, app.targetCell.x,
            app.targetCell.y,app.player.direction,app.stones, app.player.nextLvl);
        base.init();
    },
};

document.addEventListener('DOMContentLoaded', app.init);
