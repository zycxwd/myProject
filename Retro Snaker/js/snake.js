var mapX = 20,mapY = 20;
var snakeData = createArr(mapX,mapY);
var mapData = createArr(mapX,mapY);
var snake = [];
var len = 3; 
var speed = 10; 
var snakeTimer = null;
var skateTimer = [];
var breakTimer = [];
var direction = 39;
var flag = true;
var sore = document.getElementById('score');
var startGame = document.getElementById('start');
createMap(mapX,mapY);
startGame.onclick = start;
function start(){
    this.onclick = null;
    clear();
    initSnake();
    addObj('food');
    addToy();
    walk();
};
function createMap(x,y){
    var map = document.getElementById('map');
    var table = document.createElement('table');
    table.cellPadding = table.cellSpacing = 0;
    var tbody = table.createTBody();
    for(var i=0; i<x; i++){
        var tr = document.createElement('tr');
        for(var j=0; j<y; j++){
            var td = document.createElement('td');
            snakeData[i][j] = tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    map.appendChild(table);
}
function createArr(x,y){
    var arr = new Array(x);
    for(var i=0; i<x; i++){
        arr[i] = new Array(y);
    }
    return arr;
}
function scope(startX,startY,endX,endY){
    startX = startX || 0;
    startY = startY || 0;
    endX = endX || mapX - 1;
    endY = endY || mapY - 1;
    var p = [],
        x = rP([startX,endX]),
        y = rP([startY,endY]);
    p.push(x,y);
    if(mapData[x][y]){
        return scope(startX,startY,endX,endY);
    }
    return p;
}

function rP(arr){
    var max = Math.max.apply(null,arr);
    var min = Math.min.apply(null,arr);
    return Math.round(Math.random() * (max - min) + min);
}
function initSnake(){
   
    var p = scope(0,2,mapX - 1,parseInt(mapY/2));
    for(var i=0; i<len; i++){
        var x = p[0], 
            y = p[1] - i; 
        snake.push([x,y]); 
        snakeData[x][y].className = 'snake'; 
        mapData[x][y] = 'snake'; 
    }
}
function walk(){
    clearInterval(snakeTimer);
    snakeTimer = setInterval(step,5000/speed);
}
function step(){
    var headX = snake[0][0],
        headY = snake[0][1];

    switch(direction){
        case 37:
            headY -= 1;
        break;
        case 38:
            headX -= 1;
        break;
        case 39:
            headY += 1;
            break;
        case 40:
            headX += 1;
    };
    if(headX < 0 || headX > mapX - 1 || headY < 0 || headY > mapY - 1 || mapData[headX][headY] == 'snake' || mapData[headX][headY] == 'block'){
        clearInterval(snakeTimer);
        skateTimer.forEach((item,i)=>{
            clearTimeout(item);
        });
        breakTimer.forEach((item,i)=>{
            clearTimeout(item);
        });
        alert('哈哈，你死了~，好开心呐！');
        startGame.onclick = start;
        return;
    }
   
    if(len%4 == 0 && len < 55 && mapData[headX][headY] == 'food'){
        speed += 5;
        walk();
    }
    if(len%9 == 0 && len < 60 && mapData[headX][headY] == 'food'){
        addObj('block');
    }

    if(mapData[headX][headY] == 'skate'){
        speed += 15;
        walk();
    }
    if(mapData[headX][headY] == 'break'){
        speed = 10;
        walk();
    }

    if(mapData[headX][headY] == 'food'){
        addObj('food');
        mapData[headX][headY] = true;
    }

    if(!mapData[headX][headY]){
        var lastX = snake[snake.length - 1][0];
        var lastY = snake[snake.length - 1][1];
        snakeData[lastX][lastY].className = '';
        snake.pop();
        mapData[lastX][lastY] = false;
    }

    snake.unshift([headX,headY]);
    snakeData[headX][headY].className = 'snake';
    mapData[headX][headY] = 'snake';
    len = snake.length;
    score.innerHTML = (len - 3) * 10;

    flag = true;
}


document.onkeydown = function(e){
    var e = e || window.event;
    if(!flag){
        return;
    }
    if(e.keyCode > 36 && e.keyCode < 41 && Math.abs(e.keyCode - direction) != 2){
        direction = e.keyCode;
    }
    flag = false;
    return false;
};

function addObj(name){
    var p = scope();
    snakeData[p[0]][p[1]].className = name;
    mapData[p[0]][p[1]] = name;
}

function addToy() {
    var skateNum = rP([6,10]);
    var breakNum = rP([4,6]);
    for(var i=0; i<skateNum; i++){
        skateTimer.push(setTimeout(function(){
            addObj('skate');
        }, rP([8000,120000])))
    }
    for(var i=0; i<breakNum; i++){
        breakTimer.push(setTimeout(function(){
            addObj('break');
        }, rP([10000,160000])))
    }
}

function clear(){
    snakeData.forEach((item,i)=>{
        item.forEach((item,i)=>{
            item.className = '';
        });
    });
    mapData = createArr(mapX,mapY);
    direction = 39;
    snake = [];
    len = 3;
    speed = 10;
    score.innerHTML = 0;
}











