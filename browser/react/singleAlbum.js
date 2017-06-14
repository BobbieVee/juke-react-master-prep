import React from 'react';

export default ({selectedAlbum, play, currentSong, playing, shuffleToggle, songsOrdered}) => {
	return (
		<div className="album">
		  <div>
		    <h3>{selectedAlbum.name}</h3>
		    <img src={selectedAlbum.imageUrl} className="img-thumbnail" />
		    <button onClick={() => {shuffleToggle()}} className='btn btn-default-xs'>
		    	<i className='fa fa-random' >Shuffle
		    	</i>
		    </button>
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
        	{songsOrdered.map((song, index) => {
						const songMatch = currentSong.id === song.id? true : false
						return(	
							<tr key={song.id} className={songMatch ? 'active' : '' }>
									<td>
					          <button onClick={() => {play(song, index)} } className="btn btn-default btn-xs">
					          	 <span className={songMatch && playing  ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play" }></span> 
					          	
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
};


