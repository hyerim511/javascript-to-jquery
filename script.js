$(document).ready(function(){
    $('.filter').show();
    $('#popup').show();
    $(".btn-success").click(function(){
        $(".filter").fadeToggle();
        $("#popup").fadeToggle();
    });
});

const walkButton = document.getElementById('walkButton');
const backButton = document.getElementById('backButton');
backButton.disabled = true;
walkButton.disabled = true;
var moves = 0;
const movesIndicator = document.getElementById('movesIndicator');

//--------------dice-roller--------------

const audio = new Audio();
const sfx = ["audio/dice0.mp3", "audio/dice1.mp3", "audio/dice2.mp3", "audio/dice3.mp3", "audio/dice4.mp3", "audio/dice5.mp3"];
var llor = 0;

function mtplr() {
    var multiplier = document.getElementById('multiplier');
    multiplier.innerHTML++;
}

function reset() {
    multiplier.innerHTML = 1;
}

function print(x) {
    document.getElementById('placeholder').innerHTML = x;
}

function printButton(x) {
    document.getElementById('walkButton').innerHTML = 'Walk ' + x + ' Tiles';
}

const d4 = { roll: function () { let result = Math.floor(Math.random() * 4) + 1; return result; } }
const d6 = { roll: function () { let result = Math.floor(Math.random() * 6) + 1; return result; } }
const d8 = { roll: function () { let result = Math.floor(Math.random() * 8) + 1; return result; } }
const d10 = { roll: function () { let result = Math.floor(Math.random() * 10) + 1; return result; } }
const d12 = { roll: function () { let result = Math.floor(Math.random() * 12) + 1; return result; } }
const d20 = { roll: function () { let result = Math.floor(Math.random() * 20) + 1; return result; } }
const d100 = { roll: function () { let result = Math.floor(Math.random() * 100) + 1; return result; } }

function go(sides) {
    llor = 0;
    console.clear();

    let diceN = Math.floor(Math.random() * sfx.length);
    audio.src = sfx[diceN];
    audio.currentTime = 0;
    audio.play();

    for (let i = 0; i < multiplier.innerHTML; i++) {
        var result = sides.roll();
        console.log(result);
        llor =+ result;
    }

    print(llor);
    printButton(llor);
    walkButton.disabled = false;
    moves ++;
    movesIndicator.innerHTML = 'Moves: '+moves;

}

//--------------tile-types--------------



//--------------minimap-layout--------------
var minimapArray = [new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11)];
let co = 0;
for(let i = 0; i <= 10; i++){
    for(let j = 0; j <= 10; j++){
        minimapArray[i][j] = '#mm' + co;
        $(minimapArray[i][j]).attr('src', map[i][j]);
        co++;
    }
}

console.log(minimapArray);

//--------------tile-positions--------------

var nw

const northw = document.getElementById('tile1');
var nwy = 4;
var nwx = 4;
northw.src = map[nwy][nwx];

const north = document.getElementById('tile2');
var ny = 4;
var nx = 5;
north.src = map[ny][nx];

const northe = document.getElementById('tile3');
var ney = 4;
var nex = 6;
northe.src = map[ney][nex];

const west = document.getElementById('tile4');
var wy = 5;
var wx = 4;
west.src = map[wy][wx];

const mid = document.getElementById('tile5');
var my = 5;
var mx = 5;
mid.src = map[my][mx];

const east = document.getElementById('tile6');
var ey = 5;
var ex = 6;
east.src = map[ey][ex];

const southw = document.getElementById('tile7');
var swy = 6;
var swx = 4;
southw.src = map[swy][swx];

const south = document.getElementById('tile8');
var sy = 6;
var sx = 5;
south.src = map[sy][sx];

const southe = document.getElementById('tile9');
var sey = 6;
var sex = 6;
southe.src = map[sey][sex];

const allTiles = document.getElementsByClassName('tile');

//document.getElementById('tile1').appendChild(grass);
//tilePosition.map[y][x];

//--------------direction-switch-function--------------

const player = document.getElementById('player');
const arrow = document.getElementById('arrow');
const mmInd = $('#mmInd');
var rot = 0;

function arrowTate() {

    rot++

    if (rot == 1) {
        $('#arrow').css({'transform' : 'rotate('+ 90 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 90 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 90 +'deg)'});
    } else if (rot == 2) {
        $('#arrow').css({'transform' : 'rotate('+ 180 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 180 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 180 +'deg)'});
    } else if (rot == 3) {
        $('#arrow').css({'transform' : 'rotate('+ 270 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 270 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 270 +'deg)'});
    } else {
        rot = 0;
        $('#arrow').css({'transform' : 'rotate('+ 0 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 0 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 0 +'deg)'});
    }

}

//--------------walk--------------

function death(){
    $('.filter').fadeToggle();
    $('#deathMessage').fadeToggle();
    $(".btn-success").click(function(){
        location.reload();
    });
}

function gWin(){
    $('.filter').fadeToggle();
    $('#winMessage').fadeToggle();
    $(".btn-success").click(function(){
        location.reload();
    });
}

const gameSFX = new Audio();
const sfxSrc = ['audio/win.mp3', 'audio/lose.mp3', 'audio/tp.mp3'];
const step = new Audio();
const steps = ['audio/steps/step0.mp3', 'audio/steps/step1.mp3', 'audio/steps/step2.mp3', 'audio/steps/step3.mp3', 'audio/steps/step4.mp3', 'audio/steps/step5.mp3', 'audio/steps/step6.mp3', 'audio/steps/step7.mp3', 'audio/steps/step8.mp3', 'audio/steps/step9.mp3', 'audio/steps/step10.mp3', 'audio/steps/step11.mp3']


function walk() {
    let count = 0;

    let stepsN = Math.floor(Math.random() * steps.length);
    step.src = steps[stepsN];
    step.currentTime = 0;
    step.play();

    while(count < llor){ 

            if (rot == 0) {
                if (north.src.includes(black)) { }
                else {
                    nwy --;
                    northw.src = map[nwy][nwx];
                    ny --;
                    north.src = map[ny][nx];
                    ney --;
                    northe.src = map[ney][nex];
                    wy --;
                    west.src = map[wy][wx];
                    my --;
                    mid.src = map[my][mx];
                    ey --;
                    east.src = map[ey][ex];
                    swy --;
                    southw.src = map[swy][swx];
                    sy --;
                    south.src = map[sy][sx];
                    sey --;
                    southe.src = map[sey][sex];
                    $("#mmInd").animate({top: '-=15px'});
                }
            }
            if (rot == 1) {
                if (east.src.includes(black)) { }
                else {
                    nwx ++;
                    northw.src = map[nwy][nwx];
                    nx ++;
                    north.src = map[ny][nx];
                    nex ++;
                    northe.src = map[ney][nex];
                    wx ++;
                    west.src = map[wy][wx];
                    mx ++;
                    mid.src = map[my][mx];
                    ex ++;
                    east.src = map[ey][ex];
                    swx ++;
                    southw.src = map[swy][swx];
                    sx ++;
                    south.src = map[sy][sx];
                    sex ++;
                    southe.src = map[sey][sex];
                    $("#mmInd").animate({left: '+=15px'});
                }
            }
            if (rot == 2) {
                if (south.src.includes(black)) { }
                else {
                    nwy ++;
                    northw.src = map[nwy][nwx];
                    ny ++;
                    north.src = map[ny][nx];
                    ney ++;
                    northe.src = map[ney][nex];
                    wy ++;
                    west.src = map[wy][wx];
                    my ++;
                    mid.src = map[my][mx];
                    ey ++;
                    east.src = map[ey][ex];
                    swy ++;
                    southw.src = map[swy][swx];
                    sy ++;
                    south.src = map[sy][sx];
                    sey ++;
                    southe.src = map[sey][sex];
                    $("#mmInd").animate({top: '+=15px'});
                }
            }
            if (rot == 3) {
                if (west.src.includes(black)) { }
                else {
                    nwx --;
                    northw.src = map[nwy][nwx];
                    nx --;
                    north.src = map[ny][nx];
                    nex --;
                    northe.src = map[ney][nex];
                    wx --;
                    west.src = map[wy][wx];
                    mx --;
                    mid.src = map[my][mx];
                    ex --;
                    east.src = map[ey][ex];
                    swx --;
                    southw.src = map[swy][swx];
                    sx --;
                    south.src = map[sy][sx];
                    sex --;
                    southe.src = map[sey][sex];
                    $("#mmInd").animate({left: '-=15px'});
                }
            }
            if (mid.src.includes(grass)) {
                walkButton.disabled = true;
                backButton.disabled = true;
                playMusic.pause();
                gameSFX.src = sfxSrc[1];
                gameSFX.play();
                setTimeout (death(), 500);
                return;
            }
            if (mid.src.includes(tp)) {
                gameSFX.src = sfxSrc[2];
                gameSFX.play();
                setTimeout(() => {
                    nwy = 7;
                    nwx = 1;
                    northw.src = map[nwy][nwx];
                    ny = 7;
                    nx = 2;
                    north.src = map[ny][nx];
                    ney = 7;
                    nex = 3;
                    northe.src = map[ney][nex];
                    wy = 8;
                    wx = 1;
                    west.src = map[wy][wx];
                    my = 8;
                    mx = 2;
                    mid.src = map[my][mx];
                    ey = 8;
                    ex = 3;
                    east.src = map[ey][ex];
                    swy = 9;
                    swx = 1;
                    southw.src = map[swy][swx];
                    sy = 9;
                    sx = 2;
                    south.src = map[sy][sx];
                    sey = 9;
                    sex = 3;
                    southe.src = map[sey][sex];
                    $("#mmInd").animate({left: '15px', top:'105px'}, 0);
                }, 100);
            }
            if (mid.src.includes(tp2)) {
                gameSFX.src = sfxSrc[2];
                gameSFX.play();
                setTimeout(() => {
                    nwy = 0;
                    nwx = 7;
                    northw.src = map[nwy][nwx];
                    ny = 0;
                    nx = 8;
                    north.src = map[ny][nx];
                    ney = 0;
                    nex = 9;
                    northe.src = map[ney][nex];
                    wy = 1;
                    wx = 7;
                    west.src = map[wy][wx];
                    my = 1;
                    mx = 8;
                    mid.src = map[my][mx];
                    ey = 1;
                    ex = 9;
                    east.src = map[ey][ex];
                    swy = 2;
                    swx = 7;
                    southw.src = map[swy][swx];
                    sy = 2;
                    sx = 8;
                    south.src = map[sy][sx];
                    sey = 2;
                    sex = 9;
                    southe.src = map[sey][sex];
                    $("#mmInd").animate({left: '105px', top:'0'}, 0);
                }, 100);
        
            }
            if (mid.src.includes(win)) {
                gameSFX.src = sfxSrc[0];
                gameSFX.play();
                setTimeout (gWin(), 1500);
            }
            if (my > 9 || my < 1 || mx > 9 || mx < 1){location.reload()}
            backButton.disabled = false;
            walkButton.disabled = true;
            
            count++;
        }
        moves ++;
        movesIndicator.innerHTML = 'Moves: '+moves;
    }


function back() {

    if (rot == 0) {
            if (sy > 9) { }
            else {
                nwy++;
                northw.src = map[nwy][nwx];
                ny++
                north.src = map[ny][nx];
                ney++
                northe.src = map[ney][nex];
                wy++
                west.src = map[wy][wx];
                my++
                mid.src = map[my][mx];
                ey++
                east.src = map[ey][ex];
                swy++
                southw.src = map[swy][swx];
                sy++
                south.src = map[sy][sx];
                sey++
                southe.src = map[sey][sex];
                $("#mmInd").animate({top: '+=15px'});
            }
    }
    if (rot == 1) {
            if (wx < 1) { }
            else {
                nwx--;
                northw.src = map[nwy][nwx];
                nx--;
                north.src = map[ny][nx];
                nex--;
                northe.src = map[ney][nex];
                wx--;
                west.src = map[wy][wx];
                mx--;
                mid.src = map[my][mx];
                ex--;
                east.src = map[ey][ex];
                swx--;
                southw.src = map[swy][swx];
                sx--;
                south.src = map[sy][sx];
                sex--;
                southe.src = map[sey][sex];
                $("#mmInd").animate({left: '-=15px'});
            }
    }
    if (rot == 2) {
            if (ny < 1 || north.src.includes(win)) { }
            else {
                nwy--;
                northw.src = map[nwy][nwx];
                ny--;
                north.src = map[ny][nx];
                ney--;
                northe.src = map[ney][nex];
                wy--;
                west.src = map[wy][wx];
                my--;
                mid.src = map[my][mx];
                ey--;
                east.src = map[ey][ex];
                swy--;
                southw.src = map[swy][swx];
                sy--;
                south.src = map[sy][sx];
                sey--;
                southe.src = map[sey][sex];
                $("#mmInd").animate({top: '-=15px'});
            }
    }
    if (rot == 3) {
            if (ex > 9) { }
            else {
                nwx++;
                northw.src = map[nwy][nwx];
                nx++;
                north.src = map[ny][nx];
                nex++;
                northe.src = map[ney][nex];
                wx++;
                west.src = map[wy][wx];
                mx++;
                mid.src = map[my][mx];
                ex++;
                east.src = map[ey][ex];
                swx++;
                southw.src = map[swy][swx];
                sx++;
                south.src = map[sy][sx];
                sex++;
                southe.src = map[sey][sex];
                $("#mmInd").animate({left: '+=15px'});
            }
    }
    if (mid.src.includes(grass)) {
            walkButton.disabled = true;
            backButton.disabled = true;
            playMusic.pause();
            gameSFX.src = sfxSrc[1];
            gameSFX.play();
            setTimeout ( death(), 500);
    }
    if (mid.src.includes(tp)) {
            gameSFX.src = sfxSrc[2];
            gameSFX.play();
            setTimeout(() => {
                nwy = 7;
                nwx = 1;
                northw.src = map[nwy][nwx];
                ny = 7;
                nx = 2;
                north.src = map[ny][nx];
                ney = 7;
                nex = 3;
                northe.src = map[ney][nex];
                wy = 8;
                wx = 1;
                west.src = map[wy][wx];
                my = 8;
                mx = 2;
                mid.src = map[my][mx];
                ey = 8;
                ex = 3;
                east.src = map[ey][ex];
                swy = 9;
                swx = 1;
                southw.src = map[swy][swx];
                sy = 9;
                sx = 2;
                south.src = map[sy][sx];
                sey = 9;
                sex = 3;
                southe.src = map[sey][sex];
            }, 100);
    }
    if (mid.src.includes(tp2)) {
            gameSFX.src = sfxSrc[2];
            gameSFX.play();
            setTimeout(() => {
                nwy = 0;
                nwx = 7;
                northw.src = map[nwy][nwx];
                ny = 0;
                nx = 8;
                north.src = map[ny][nx];
                ney = 0;
                nex = 9;
                northe.src = map[ney][nex];
                wy = 1;
                wx = 7;
                west.src = map[wy][wx];
                my = 1;
                mx = 8;
                mid.src = map[my][mx];
                ey = 1;
                ex = 9;
                east.src = map[ey][ex];
                swy = 2;
                swx = 7;
                southw.src = map[swy][swx];
                sy = 2;
                sx = 8;
                south.src = map[sy][sx];
                sey = 2;
                sex = 9;
                southe.src = map[sey][sex];
            }, 100);

        }
        backButton.disabled = true;
        moves ++;
        movesIndicator.innerHTML = 'Moves: '+moves;
    }


document.addEventListener('keydown', function (event) {
    if (event.key == 'ArrowLeft') {
        rot = 3;
        $('#arrow').css({'transform' : 'rotate('+ 270 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 270 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 270 +'deg)'});
    } else if (event.key == 'ArrowUp') {
        rot = 0;
        $('#arrow').css({'transform' : 'rotate('+ 0 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 0 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 0 +'deg)'});
    } else if (event.key == 'ArrowRight') {
        rot = 1;
        $('#arrow').css({'transform' : 'rotate('+ 90 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 90 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 90 +'deg)'});
    } else if (event.key == 'ArrowDown') {
        rot = 2;
        $('#arrow').css({'transform' : 'rotate('+ 180 +'deg)'});
        $('#player').css({'transform' : 'rotate('+ 180 +'deg)'});
        $('#mmInd').css({'transform' : 'rotate('+ 180 +'deg)'});
    } else if (event.key == '0') {
        walk();
    }
}
)

