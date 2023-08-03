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

