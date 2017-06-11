import React, {Component} from 'react';

export default class singleAlbum extends Component{
	constructor(){
		super();
		this.state = {};
	}

	render(){
		const playing = this.props.playing;
		return (
			<div className="album">
			  <div>
			    <h3>{this.props.album.name}</h3>
			    <img src={this.props.album.imageUrl} className="img-thumbnail" />
			  </div>
			  <table className='table'>
			    <thead>
			      <tr>
			        <th></th>
			        <th>Name</th>
			        <th>Artists</th>
			        <th>Genre</th>
			      </tr>
			    </thead>
			    <tbody>
	        	{this.props.album.songs.map((song, index) => {
							const currentSong = this.props.currentSong.id === song.id? true : false
							return(	
								<tr key={song.id} className={currentSong ? 'active' : '' }>
										<td>
						          <button onClick={() => {this.props.play(song, index)} } className="btn btn-default btn-xs">
						          	 <span className={currentSong && this.props.playing  ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play" }></span> 
						          	
						          </button>
					         </td> 	
						        <td>{song.name}</td>
						        <td>{song.artists.reduce((acc, artist) => {
						        	 return acc += artist.name + ',';
						        }, '').slice(0,-1)}</td>
						        <td>{song.genre}</td>
					      </tr>
							)
      			}
        	)}								
			    </tbody>
			  </table>
			</div>
		)
	}
}
