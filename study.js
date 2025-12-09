
const audio = document.getElementById("player");       
const albumArt = document.getElementById("cover");     
const trackTitle = document.getElementById("song-title");
const trackArtist = document.getElementById("artist-name");

const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;
let isPlaying = false;


const tracks = [
  {
    title: "Outgrown",
    artist: "Ariana Grande",
    src: "04 Outgrown.mp3",
    cover: "ari.jpeg"
  },
  {
    title: "Rush Delivery",
    artist: "Ariana Grande",
    src: "05 Rush Delivery.mp3",
    cover: "doll.jpg"
},
{
title: "Missed Connections",
 artist: "Chase Icon",
 src: "Chase Icon  Missed Connections.mp3",
 cover: "icon baby.jpg"
},



];

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  albumArt.src = track.cover;

  if (trackTitle) trackTitle.textContent = track.title;
  if (trackArtist) trackArtist.textContent = track.artist;
}


function playTrack() {
  audio.play();
  isPlaying = true;
  playPauseBtn.textContent = "⏸"; 
}


function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.textContent = "▶"; 
}


playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});


function nextTrack() {
  currentIndex++;
  if (currentIndex >= tracks.length) currentIndex = 0;
  loadTrack(currentIndex);
  if (isPlaying) playTrack();
}

nextBtn.addEventListener("click", nextTrack);


function prevTrack() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = tracks.length - 1;
  loadTrack(currentIndex);
  if (isPlaying) playTrack();
}

prevBtn.addEventListener("click", prevTrack);


audio.addEventListener("ended", nextTrack);


loadTrack(currentIndex);



const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
}

const sidebar = document.getElementById("mainSidebar");
const menuToggle = document.getElementById("menuToggle");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}
