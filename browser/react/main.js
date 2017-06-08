import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Albums from './Albums';
import axios from 'axios';

export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			foo: 'bar',
			albums: [
			  {
			    name: 'Abbey Road',
			    id: 1,
			    imageUrl: 'http://fillmurray.com/300/300',
			    songs: [
			      {
			        id: 1,
			        name: 'Romeo & Juliette',
			        artists: [ 
			          { name: 'Bill' } 
			        ],
			        genre: 'Funk',
			        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			      }, 
			      {
			        id: 2,
			        name: 'White Rabbit',
			        artists: [
			          { name: 'Bill' }, 
			          { name: 'Alice' }
			        ],
			        genre: 'Fantasy',
			        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			      }, 
			      {
			        id: 3,
			        name: 'Lucy in the Sky with Diamonds',
			        artists: [ 
			          { name: 'Bob' } 
			        ],
			        genre: 'Space',
			        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			      }
			    ]
			  },
			  {
			    name: 'Yellow Submarine',
			    id: 2,
			    imageUrl: 'http://fillmurray.com/300/300',
			    songs: [
			      {
			        id: 4,
			        name: 'London Calling',
			        artists: [ 
			          { name: 'Bill' } 
			        ],
			        genre: 'Punk',
			        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
			      }
			    ]
			  }
			]
		};
	}

	render() {
		axios.get('/api/albums')
		.then(response => response.data)
		.then(console.log.bind(console))
		.catch(console.error.bind(console));
		return (
			<div> 
				<div id='main' className='container-fluid'>
		      <div className="col-xs-2">
		        <Sidebar />
		      </div>
					<div className="col-xs-10">
			  		<div className="albums">
					    <h3>Albums</h3>
					    <Albums albums={this.state.albums}/>

					  </div>
    		  </div>
  		  </div>
	      <Footer />
			</div>
		);

	}

}
