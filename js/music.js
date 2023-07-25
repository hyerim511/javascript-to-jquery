let musicTitle = document.getElementById('music-title');
let musicArtist = document.getElementById('music-artist');
let musicPlay = document.getElementById('music-play');
let musicPause = document.getElementById('music-pause');
let musicForward = document.getElementById('music-forward');
let musicBackward = document.getElementById('music-backward');
let musicShuffle = document.getElementById('music-shuffle');

// Audio element to play
let playMusic = document.createElement('audio');

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


let trackNum = 0;

// Play music
musicPlay.addEventListener('click', ()=>{
    playMusic.src = trackList[trackNum].path;
    playMusic.play();
    musicTitle.innerHTML = trackList[trackNum].title;
    musicArtist.innerHTML = trackList[trackNum].artist;
    playMusic();
    playMusic.addEventListener('ended', ()=>{
        trackNum++;
        playMusic.src = trackList[trackNum].path;
        playMusic.play();
        musicTitle.innerHTML = trackList[trackNum].title;
        musicArtist.innerHTML = trackList[trackNum].artist;
    });
    console.log(trackNum);
});

// Pause music
musicPause.addEventListener('click', ()=>{
    playMusic.pause();
});

// Play privious music
musicBackward.addEventListener('click', ()=>{
    trackNum--;
    if(trackNum < 0) {
        trackNum = trackList.length;
    }
    playMusic.src = trackList[trackNum].path;
    playMusic.play();
    musicTitle.innerHTML = trackList[trackNum].title;
    musicArtist.innerHTML = trackList[trackNum].artist;
});

// Play next music
musicForward.addEventListener('click', ()=>{
    trackNum++;
    if(trackNum > trackList.length) {
        trackNum = 0;
    }
    playMusic.src = trackList[trackNum].path;
    playMusic.play();
    musicTitle.innerHTML = trackList[trackNum].title;
    musicArtist.innerHTML = trackList[trackNum].artist;
});

// Function to make shuffled array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function shuffleList() {
    let testArr = [];
    let tempNum = 0;
    for(var i=1; i<trackList.length+1; i++){
        testArr.push(i);
    }
    shuffle(testArr);
    // tempNum = Math.floor(Math.random() * (testArr.length + 1));
    playMusic.src = trackList[testArr[tempNum]].path;
    playMusic.play();
    musicTitle.innerHTML = trackList[testArr[tempNum]].title;
    playMusic.addEventListener('ended', ()=>{
        tempNum++;
        playMusic.src = trackList[testArr[tempNum]].path;
        playMusic.play();
        musicTitle.innerHTML = trackList[testArr[tempNum]].title;
    })
    // trackNum = Math.floor(Math.random() * (trackList.length + 1));
    // playMusic.src = trackList[trackNum].path;
    // playMusic.play();
}

let shuffleBool = false;

// Shuffle play list
musicShuffle.addEventListener('click', ()=>{

    let testArr = [];
    let tempNum = 0;
    for(var i=1; i<trackList.length+1; i++){
        testArr.push(i);
    }

    shuffleBool = !shuffleBool;

    if(shuffleBool) {
        shuffle(testArr);
        musicShuffle.style.backgroundColor = "#666";
    } 
    // tempNum = Math.floor(Math.random() * (testArr.length + 1));
    playMusic.src = trackList[testArr[tempNum]].path;
    playMusic.play();
    musicTitle.innerHTML = trackList[testArr[tempNum]].title;
    playMusic.addEventListener('ended', ()=>{
        tempNum++;
        playMusic.src = trackList[testArr[tempNum]].path;
        playMusic.play();
        musicTitle.innerHTML = trackList[testArr[tempNum]].title;
    })

    // trackNum = Math.floor(Math.random() * (trackList.length + 1));
    // playMusic.src = trackList[trackNum].path;
    // playMusic.play();
});

