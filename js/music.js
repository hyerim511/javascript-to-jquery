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



// Play music
let trackNum = 0;
musicPlay.addEventListener('click', ()=>{
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
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
    musicPause.style.display = "none";
    musicPlay.style.display = "block";
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
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
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
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
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
    for(var i=1; i<trackList.length+1; i++){
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
    console.log(shuffArr);
    // tempNum = Math.floor(Math.random() * (shuffArr.length + 1));
    playMusic.src = trackList[shuffArr[tempNum]].path;
    playMusic.play();
    musicTitle.innerHTML = trackList[shuffArr[tempNum]].title;
    musicArtist.innerHTML = trackList[shuffArr[tempNum]].artist;
    musicPause.style.display = "block";
    musicPlay.style.display = "none";
    playMusic.addEventListener('ended', ()=>{
        tempNum++;
        playMusic.src = trackList[shuffArr[tempNum]].path;
        playMusic.play();
        musicTitle.innerHTML = trackList[shuffArr[tempNum]].title;
        musicArtist.innerHTML = trackList[shuffArr[tempNum]].artist;
    })
});

