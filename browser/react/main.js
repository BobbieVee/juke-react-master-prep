import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Albums from './Albums';
import SingleAlbum from './singleAlbum'
import axios from 'axios';
import Home from './home';
const audio = document.createElement('audio');


export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			albums: [],
			selectedAlbum: {id: 0, songs: []},
			currentSong: {},
			currentSongIndex: 0,
			playing: false,
			progress: 0, 
			shuffle: false,
			songsOrdered: [],
			shuffleSongNumber: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.returnToHome = this.returnToHome.bind(this);
		this.play = this.play.bind(this);
		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
		this.shuffleToggle = this.shuffleToggle.bind(this);
	}

	componentDidMount() {
		axios.get('/api/albums')
		.then(response => response.data)
		.then(data => this.setState({albums: data}))
		.catch(console.error.bind(console));
		audio.addEventListener('ended', () => {
    	this.next();})
  	audio.addEventListener('timeupdate', () => {
  		this.setState({progress: 100 * audio.currentTime / audio.duration});	
  	})
	}

	createShuffleArray() {		
		let newArray = [];
		const songs = this.state.selectedAlbum.songs;
		const length= songs.length;

		//make a copy of songs array
		let tempArray = songs.slice();

		// create a new Array randomly ordered from tempArray.
		for(var i=0; i < length; i++ ) {
			const random = Math.floor(Math.random() * (length - i));
			newArray = newArray.concat(tempArray.splice(random));
		}
		return newArray;
}

	shuffleToggle(){
		const shuffle = this.state.shuffle;
		if (shuffle) {
			this.play(this.state.selectedAlbum.songs[0], 0);
			this.setState({songsOrdered: this.state.selectedAlbum.songs, shuffle: false})
		} else {
			const shuffledArray = this.createShuffleArray()
			this.play(shuffledArray[0], 0)
			this.setState({songsOrdered: shuffledArray, shuffle: true})
		}
	}

	next() {
		const length = this.state.songsOrdered.length;
		const index = this.state.currentSongIndex;
		const newIndex = (length - 1 === index) ? 0 : index + 1;
		const song = this.state.songsOrdered[newIndex];
		this.play(song, newIndex);
	}

	previous() {
		const length = this.state.songsOrdered.length;
		const index = this.state.currentSongIndex;
		const newIndex = ( 0 === index) ? length - 1  : index - 1;
		const song = this.state.songsOrdered[newIndex]
		this.play(song, newIndex);
	}

	handleClick(album) {
		axios.get(`/api/albums/${album.id}`)
		.then(response => response.data)
		.then(album => this.setState({selectedAlbum: album, songsOrdered: album.songs}))
		.catch(console.error.bind(console));
	}

	returnToHome(){
		this.setState({ selectedAlbum: {songs: []} })
	}

	togglePlay(){
		this.state.playing ? audio.pause() : audio.play();
		this.setState((prevState) => {
			return {playing: !prevState.playing}
		});
	}

	play(song, index){
		if (song) {
			if (this.state.currentSong.id  !== song.id){
				this.setState({currentSong: song, playing: true, currentSongIndex: index});
				audio.src = song.audioUrl;
				audio.load();
				audio.play();
			} else {
				this.togglePlay();
			}
  } else {
			this.togglePlay();
		}
	}

	render() {
		return (
				<Home 
	  		  	next= {this.next} 
	  		  	previous={this.previous} 
	  		  	play={this.play} 
	  		  	currentSong={this.state.currentSong} 
	  		  	playing={this.state.playing}
	  		  	progress={this.state.progress}
	  		  	play={this.play} 
	  		  	currentSong={this.state.currentSong} 
	  		  	playing={this.state.playing}
	  		  	Albums albums={this.state.albums} 
	  		  	handleClick={this.handleClick}
	  		  	returnToHome={this.returnToHome}
	  		  	selectedAlbum ={this.state.selectedAlbum}
	  		  	shuffleToggle={this.shuffleToggle}
	  		  	songsOrdered={this.state.songsOrdered}
				/>
		);

	}

}
