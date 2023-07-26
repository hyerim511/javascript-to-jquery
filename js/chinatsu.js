// jsを適用するidを取得
const imgTarget = document.getElementById("imgTarget");
const imgPop = document.getElementById("imgPop");
const toolTip = document.getElementById("toolTip");

// hover
// ()=>{}　と、 function() {}　は同義
imgTarget.addEventListener('mouseover', () => {
    imgPop.style.display = 'block';
    toolTip.style.display = 'block';
}, false);

// leave
imgTarget.addEventListener('mouseleave', () => {
    imgPop.style.display = 'none';
    toolTip.style.display = 'none';
}, false);