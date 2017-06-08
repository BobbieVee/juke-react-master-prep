import React from 'react';

const Albums = (props) => {
	return (
		<div className="row">
			{props.albums.map(function(album){
				return (
		    		<div key={album.id}className="col-xs-4">
			        <a className="thumbnail" href="#">
			          <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
			          <div className="caption">
			            <h5>
			              <span>{album.name}</span>
			            </h5>
			            <small>{album.songs.length}</small>
			          </div>
			        </a>
			      </div>
				);
			})}
		</div>
	);
};

export default Albums;