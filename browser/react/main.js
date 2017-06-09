import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Albums from './Albums';
import SingleAlbum from './singleAlbum'
import axios from 'axios';

export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {
			albums: [],
			selectedAlbum: {songs: []}
		};
		this.handleClick = this.handleClick.bind(this);
		this.returnToHome = this.returnToHome.bind(this);
	}

	componentDidMount() {
		axios.get('/api/albums')
		.then(response => response.data)
		.then(data => this.setState({albums: data}))
		.catch(console.error.bind(console));	
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

	render() {
		return (
			<div> 
				<div id='main' className='container-fluid'>
		      <div className="col-xs-2">
		        <Sidebar albums={this.returnToHome}/>
		      </div>
					<div className="col-xs-10">
						{this.state.selectedAlbum.id ? <SingleAlbum album={this.state.selectedAlbum}/> : 
			  			<div className="albums">
						    <h3>Albums</h3>
						    <Albums albums={this.state.albums} handleClick={this.handleClick}/>
					  	</div>
					  }	
    		  </div>
  		  </div>
	      <Footer/>
			</div>
		);

	}

}
