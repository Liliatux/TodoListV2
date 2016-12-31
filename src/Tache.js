import React, { Component } from 'react';
import './Tache.css';

class Tache extends Component {
	render() {
		return(
			<div className="tache">
				<div className="tache-header">
	            	<h2>Tâches</h2>
	            	<input type="text" placeholder="tâche 1"/>
	            	<button>+</button>
	            </div>
            	<ul>
					<li>Tache 1</li>
					<li>Tache 2</li>
            	</ul>
          	</div>
		);
	}
}

export default Tache;