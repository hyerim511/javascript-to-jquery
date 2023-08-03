// Variables for Music Player
let musicTitle = document.getElementById('music-title');
let musicArtist = document.getElementById('music-artist');
let musicPlay = document.getElementById('music-play');
let musicPopup = document.getElementById('playUp');
let musicPause = document.getElementById('music-pause');
let musicForward = document.getElementById('music-forward');
let musicBackward = document.getElementById('music-backward');
let musicShuffle = document.getElementById('music-shuffle');

// Audio element to play
let playMusic = document.createElement('audio');
playMusic.volume = 0.05;

// Track List
let trackList = [
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

// Play music
let trackNum = 0;

function setPlay(num){
    playMusic.src = trackList[num].path;
    musicTitle.innerHTML = trackList[num].title;
    musicArtist.innerHTML = trackList[num].artist;
}

musicPlay.addEventListener('click', ()=>{
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
    setPlay(trackNum);
    playMusic.play();
});

musicPopup.addEventListener('click', ()=>{
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
    setPlay(trackNum);
    playMusic.play();
});

// Play next track when it's ended
playMusic.addEventListener('ended', ()=>{
    trackNum++;
    setPlay(trackNum);
    playMusic.play();
});

// Pause music
musicPause.addEventListener('click', ()=>{
    musicPause.style.display = "none";
    musicPlay.style.display = "block";
    playMusic.pause();
});

// Play previous music
musicBackward.addEventListener('click', ()=>{
    trackNum--;
    if(trackNum < 0) {
        trackNum = trackList.length;
    }
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
    setPlay(trackNum);
    playMusic.play();
});

// Play next music
musicForward.addEventListener('click', ()=>{
    trackNum++;
    if(trackNum > trackList.length) {
        trackNum = 0;
    }
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
    setPlay(trackNum);
    playMusic.play();
});

// Function to make shuffled array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Shuffle play list
let shuffleBool = false;
musicShuffle.addEventListener('click', ()=>{
    let shuffArr = [];
    let tempNum = 0;
    for(var i=0; i<trackList.length; i++){
        shuffArr.push(i);
    }
    // Toggle the shuffle button
    shuffleBool = !shuffleBool;
    if(shuffleBool) {
        shuffle(shuffArr);
        musicShuffle.style.backgroundColor = "#77c700";
        musicShuffle.style.color = "black";
    } else {
        musicShuffle.style.backgroundColor = "#242424";
        musicShuffle.style.color = "#77c700";
    }
    // console.log(shuffArr);
    // tempNum = Math.floor(Math.random() * (shuffArr.length + 1));
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
    setPlay(shuffArr[tempNum]);
    playMusic.play();
    playMusic.addEventListener('ended', ()=>{
        tempNum++;
        setPlay(shuffArr[tempNum]);
        playMusic.play();
    })
});

