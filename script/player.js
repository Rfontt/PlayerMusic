let author = document.querySelector("#author");
let music = document.querySelector("#music");
let image = document.querySelector("#image");
let play = document.querySelector("#play");
let inputDuration = document.querySelector("#inputDuration");

let index_no = 0;
let time;
let playing_song = false;
let track = document.createElement('audio');

const All_songs = [
	{
		track_music: "nightcall",
		img: "./src/image/Kavinsky.jpg",
		path: "./src/music/nightcall.mp3",
		name_author: "Kavinsky"
	},
	{
		track_music: "Friends",
		img: "./src/image/RexOrange.jpg",
		path: "./src/music/friends.mp3",
		name_author: "RexOrange"
	}
];

function load_track(index_no) {
	track.src = All_songs[index_no].path;
	track.load();
	image.src = All_songs[index_no].img;
	author.innerHTML = All_songs[index_no].name_author;
	music.innerHTML = All_songs[index_no].track_music;
	time = setInterval(RangeSlider, 1000);
}

load_track(index_no);

function JustPlay() {
	if (playing_song == false) {
		PlaySong();
	} else {
		PauseSong();
	}
}

function PlaySong() {
	track.play();
	playing_song = true;
	play.innerHTML = '<i class="fas fa-pause"></i>'
}

function PauseSong() {
	track.pause();
	playing_song = false;
	play.innerHTML = '<i class="fas fa-play"></i>'
}

function Next() {
	if (index_no < All_songs.length - 1) {
		index_no += 1;
		load_track(index_no)
		PlaySong();
	} else {
		index_no = 0;
		load_track(index_no);
		PlaySong();
	}
}

function Return() {
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no)
		PlaySong();
	} else{
		index_no = All_songs.length;
		load_track(index_no);
		PlaySong();
	}
}

function ChangeDuration() {
	sliderPosition = track.duration * (inputDuration.value / 100);
	track.currentTime = sliderPosition;
}

function RangeSlider() {
	let position = 0;

	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		inputDuration.value = position;
	}
}
