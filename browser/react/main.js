import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default class Main extends React.Component{
	constructor(){
		super();
		this.state = {foo: 'bar'}
	}
	render() {
		return (
			<div> 
				<div id='main' className='container-fluid'>
			      <div className="col-xs-2">
			        <Sidebar />
			      </div>
				</div>
		      <div className="col-xs-10">
		        Why, hello there! My name is Juke!
		        Right now, I am but a static HTML page.
		        But with your help, I can...react to changes!
		      </div>
		      <Footer />
			</div>

		)

	}

}
