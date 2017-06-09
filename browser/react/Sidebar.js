import React from 'react';

const Sidebar = (props) => {
	return (
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a onClick={() => props.albums()}>ALBUMS</a>
            </h4>
          </section>
        </sidebar>
	)
}

export default Sidebar;