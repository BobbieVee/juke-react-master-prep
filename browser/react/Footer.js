import React from 'react';

export default (props) => {
	return (
    <div>  
        {props.currentSong.id?
          <footer>  
            <div className="pull-left">
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-step-backward" onClick={() => {props.previous()}}></span>
              </button>
              <button className="btn btn-default" onClick={() => {props.play()}}>
                <span className={props.playing? "glyphicon glyphicon-pause":"glyphicon glyphicon-play" }></span>
              </button>
              <button className="btn btn-default">
                <span className="glyphicon glyphicon-step-forward" onClick= {() => {props.next()}} ></span>
              </button>
            </div>
            <div className="bar">
              <div className="progress">
                <div className="progress-bar" style={{width: `${props.progress}%`}}></div>
              </div>
            </div> 
          </footer> : <span/>           
        }  
       }
    </div>
        
      
	)
};
