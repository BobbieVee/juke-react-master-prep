import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Albums from './Albums';
import SingleAlbum from './singleAlbum'
import axios from 'axios';
const audio = document.createElement('audio');


export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			albums: [],
			selectedAlbum: {songs: []},
			currentSong: {},
			currentSongIndex: 0,
			playing: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.returnToHome = this.returnToHome.bind(this);
		this.play = this.play.bind(this);
		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
	}

	componentDidMount() {
		axios.get('/api/albums')
		.then(response => response.data)
		.then(data => this.setState({albums: data}))
		.catch(console.error.bind(console));
		audio.addEventListener('ended', () => {
    	this.next(); 
  	});	
	}

	next() {
		const length = this.state.selectedAlbum.songs.length;
		const index = this.state.currentSongIndex;
		const newIndex = (length - 1 === index) ? 0 : index + 1;
		const song = this.state.selectedAlbum.songs[newIndex]
		this.play(song, index);
		console.log('state = ', this.state)
	}

	previous() {
		const index = this.state.currentSongIndex - 1;
		const song = this.state.selectedAlbum.songs[index]
		this.play(song, index );
	}

	handleClick(album) {
		axios.get(`/api/albums/${album.id}`)
		.then(response => response.data)
		.then(album => this.setState({selectedAlbum: album}))
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
			<div> 
				<div id='main' className='container-fluid'>
		      <div className="col-xs-2">
		        <Sidebar albums={this.returnToHome}/>
		      </div>
					<div className="col-xs-10">
						{this.state.selectedAlbum.id ? <SingleAlbum album={this.state.selectedAlbum} play={this.play} currentSong={this.state.currentSong} playing={this.state.playing}/> : 
			  			<div className="albums">
						    <h3>Albums</h3>
						    <Albums albums={this.state.albums} handleClick={this.handleClick}/>
					  	</div>
					  }	
    		  </div>
  		  </div>
  		  <Footer next= {this.next} previous={this.previous} play={this.play} currentSong={this.state.currentSong} playing={this.state.playing}/>
			</div>
		);

	}

}
