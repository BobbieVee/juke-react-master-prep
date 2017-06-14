import React from 'react';

export default (props) => {
	return (
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a onClick={() => props.returnToHome()}>ALBUMS</a>
            </h4>
          </section>
        </sidebar>
	)
}

