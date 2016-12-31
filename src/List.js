import React, {Component} from 'react';
import './List.css';

class List extends Component {
	render() {
		return (
			<div className="list">
            	<h4>Ajouter un nouveau truc</h4>
            	<input type="text" placeholder="truc"/>
            	<button>+</button>
            	<ul>
					<li>Test 1</li>
					<li>Test 2</li>
					<li>Test 3</li>
            	</ul>
          	</div>
		);
	}
}

export default List;