import React from 'react';
import Sidebar from './Sidebar';
import SingleAlbum from './SingleAlbum';
import Albums from './Albums';
import Footer from './Footer';

export default ({ previous, next, play, currentSong, playing, progress, albums, handleClick, returnToHome, selectedAlbum, shuffleToggle, songsOrdered }) => {
	return (
		<div> 
			<div id='main' className='container-fluid'>
	      <div className="col-xs-2">
	        <Sidebar returnToHome={returnToHome}/>
	      </div>
				<div className="col-xs-10">
					{selectedAlbum.id ? <SingleAlbum shuffleToggle={shuffleToggle} selectedAlbum={selectedAlbum} songsOrdered={songsOrdered} play={play} currentSong={currentSong} playing={playing}/> : 
		  			<div className="albums">
					    <h3>Albums</h3>
					    <Albums albums={albums} handleClick={handleClick}/>
				  	</div>
				  }	
  		  </div>
		  </div>
  		  
  		  <Footer 	
  		  	next= {next} 
  		  	previous={previous} 
  		  	play={play} 
  		  	currentSong={currentSong} 
  		  	playing={playing}
  		  	progress={progress}
  		  	/>
			</div>
	)
};
