// -------------------------------- Variables for Music Player
// let musicTitle = document.getElementById('music-title');
// let musicArtist = document.getElementById('music-artist');
// let musicPlay = document.getElementById('music-play');
// let musicPause = document.getElementById('music-pause');
// let musicForward = document.getElementById('music-forward');
// let musicBackward = document.getElementById('music-backward');
// let musicShuffle = document.getElementById('music-shuffle');

// -------------------------------- Audio element to play
let playMusic = document.createElement('audio');
playMusic.volume = 0.2;

// -------------------------------- Track List
const trackList = [
    {
        title: "Awesome Game Music",
        artist: "HHH",
        path: "mp3/music1_01.mp3"
    },
    {
        title: "Good Game Music",
        artist: "AAA",
        path: "mp3/music2.mp3"
    },
    {
        title: "Great Game Music",
        artist: "SSS",
        path: "mp3/music3.mp3"
    },
    {
        title: "Funny Game Music",
        artist: "DDD",
        path: "mp3/music4.mp3"
    },
    {
        title: "Nice Game Music",
        artist: "GGG",
        path: "mp3/music5.mp3"
    },
];

// -------------------------------- Default track number
let trackNum = 0;

// -------------------------------- Progress bar
function progress() {
    $('#music-progress').click(function(e){
        let currentPosition = e.offsetX / $('#music-progress').width() * 100;
        playMusic.currentTime = currentPosition * playMusic.duration / 100;
        console.log(playMusic.currentTime);
    });
    let progressBar = setInterval(function(){
        let musicTime = Math.round(playMusic.currentTime);
        let musicLength = Math.round(playMusic.duration);
        let barWidth = (musicTime * 100) / musicLength;
        $('#progress-bar').css("width", barWidth + '%');
    }, 10);
    $('#music-pause').click(function(){
        clearInterval(progressBar);
    });
}

// -------------------------------- Setting to play
// function setPlay(num){
//     playMusic.src = trackList[num].path;
//     musicTitle.innerHTML = trackList[num].title.toUpperCase();
//     musicArtist.innerHTML = trackList[num].artist.toLowerCase();
// }
function setPlay(num){
    playMusic.src = trackList[num].path;
    $('#music-title').empty().append(trackList[num].title.toUpperCase());
    $('#music-artist').empty().append(trackList[num].artist.toLowerCase());
    progress();
}

// -------------------------------- Change button style
function btnStyle(pause, play){
    $('#music-pause').css("display", pause);
    $('#music-play').css("display", play);
}

// -------------------------------- Dropdown for the music list
function musicList(){
    for(let i=0; i<trackList.length; i++){
        const musicList = $('<li></li>');
        const musicTitle = $('<a href="#"></a>').text(trackList[i].title);
        musicTitle.addClass("dropdown-item").css("font-size", "1.5rem");
        musicList.append(musicTitle);
        $('#music-item').append(musicList);

        musicTitle.click(function(){
            btnStyle("block", "none");
            setPlay(i);
            playMusic.play();
        });
    }
}
musicList();

// -------------------------------- Play music after click okay button in popup
// musicPopup.addEventListener('click', ()=>{
//     musicPause.style.display = "block";
//     musicPlay.style.display = "none";
//     setPlay(trackNum);
//     playMusic.play();
// });
$('#playUp').click(function(){
    btnStyle("block", "none");
    setPlay(trackNum);
    playMusic.play();
});

// -------------------------------- Play music
// musicPlay.addEventListener('click', ()=>{
//     musicPause.style.display = "block";
//     musicPlay.style.display = "none";
//     setPlay(trackNum);
//     playMusic.play();
// });
$('#music-play').click(function(){
    btnStyle("block", "none");
    setPlay(trackNum);
    playMusic.play();
});


// -------------------------------- Play next track when it's ended
playMusic.addEventListener('ended', ()=>{
    trackNum++;
    setPlay(trackNum);
    playMusic.play();
});

// -------------------------------- Pause music
// musicPause.addEventListener('click', ()=>{
//     musicPause.style.display = "none";
//     musicPlay.style.display = "block";
//     playMusic.pause();
// });
$('#music-pause').click(function(){
    btnStyle("none", "block");
    playMusic.pause();
});

// -------------------------------- Play previous track
// musicBackward.addEventListener('click', ()=>{
//     trackNum--;
//     if(trackNum < 0) {
//         trackNum = trackList.length;
//     }
//     musicPause.style.display = "block";
//     musicPlay.style.display = "none";
//     setPlay(trackNum);
//     playMusic.play();
// });
$('#music-backward').click(function() {
    trackNum--;
    if(trackNum < 0) {
        trackNum = trackList.length;
    }
    btnStyle("block", "none");
    setPlay(trackNum);
    playMusic.play();
});

// -------------------------------- Play next track
// musicForward.addEventListener('click', ()=>{
//     trackNum++;
//     if(trackNum > trackList.length) {
//         trackNum = 0;
//     }
//     musicPause.style.display = "block";
//     musicPlay.style.display = "none";
//     setPlay(trackNum);
//     playMusic.play();
// });
$('#music-forward').click(function() {
    trackNum++;
    if(trackNum > trackList.length) {
        trackNum = 0;
    }
    btnStyle("block", "none");
    setPlay(trackNum);
    playMusic.play();
});

// -------------------------------- Function to make shuffled array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// -------------------------------- Shuffle play list
let shuffleBool = false;
// musicShuffle.addEventListener('click', ()=>{
//     let shuffArr = [];
//     let tempNum = 0;
//     for(var i=0; i<trackList.length; i++){
//         shuffArr.push(i);
//     }
//     // Toggle the shuffle button
//     shuffleBool = !shuffleBool;
//     if(shuffleBool) {
//         shuffle(shuffArr);
//         musicShuffle.style.backgroundColor = "#77c700";
//         musicShuffle.style.color = "black";
//     } else {
//         musicShuffle.style.backgroundColor = "#242424";
//         musicShuffle.style.color = "#77c700";
//     }
//     // console.log(shuffArr);
//     // tempNum = Math.floor(Math.random() * (shuffArr.length + 1));
//     musicPause.style.display = "block";
//     musicPlay.style.display = "none";
//     setPlay(shuffArr[tempNum]);
//     playMusic.play();
//     playMusic.addEventListener('ended', ()=>{
//         tempNum++;
//         setPlay(shuffArr[tempNum]);
//         playMusic.play();
//     })
// });
$('#music-shuffle').click(function() {
    let shuffArr = [];
    let tempNum = 0;
    for(var i=0; i<trackList.length; i++){
        shuffArr.push(i);
    }
    // Toggle the shuffle button
    shuffleBool = !shuffleBool;
    if(shuffleBool) {
        shuffle(shuffArr);
        $('#music-shuffle').addClass('shuffle-on');
    } else {
        $('#music-shuffle').removeClass('shuffle-on');
    }
    btnStyle("block", "none");
    setPlay(shuffArr[tempNum]);
    playMusic.play();

    playMusic.addEventListener('ended', ()=>{
        tempNum++;
        setPlay(shuffArr[tempNum]);
        playMusic.play();
    })
});

