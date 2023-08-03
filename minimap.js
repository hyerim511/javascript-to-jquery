const grass = "imgs/grass.png";
const path = "imgs/path.png";
const black = "imgs/black.png";
const tp = 'imgs/tp.png';
const tp2 = 'imgs/tp2.png';
const win = 'imgs/win.png';

const map = [
    [black, black, black, black, black, black, black, black, black, black, black],
    [black, grass, path , path , path , path , path , path , path , tp   , black],
    [black, grass, path , grass, grass, grass, grass, grass, path , grass, black],
    [black, grass, path , path , grass, path , path , path , path , grass, black],
    [black, grass, grass, path , grass, path , grass, grass, grass, grass, black],
    [black, grass, grass, path , grass, path , grass, grass, grass, grass, black],
    [black, grass, path , path , grass, grass, grass, grass, grass, win  , black],
    [black, grass, path , grass, grass, grass, grass, grass, grass, path , black],
    [black, tp2  , path , path , path , path , path , path , path , path , black],
    [black, grass, grass, grass, grass, grass, grass, grass, grass, grass, black],
    [black, black, black, black, black, black, black, black, black, black, black],
]

//--------------minimap-layout--------------
var minimapArray = [new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11), new Array(11)];
let co = 0;
for(let i = 0; i <= 10; i++){
    for(let j = 0; j <= 10; j++){
        minimapArray[i][j] = '#mm' + co;
        co++;
    }
}

console.log(minimapArray);

for(let i = 0; i <= 10; i++){
    for(let j = 0; j <= 10; j++){
        $(minimapArray[i][j]).attr('src', map[i][j]);
    }
}