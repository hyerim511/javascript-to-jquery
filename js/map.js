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
    [black, grass, path , path , grass, grass, grass, grass, grass, grass, black],
    [black, grass, path , grass, grass, black, path , path , path , grass, black],
    [black, tp2  , path , path , path , black, path , grass, path , win  , black],
    [black, grass, grass, grass, path , path , path , grass, grass, grass, black],
    [black, black, black, black, black, black, black, black, black, black, black],
]