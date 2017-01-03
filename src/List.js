import React, {Component} from 'react';
import './List.css';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {items: [], value:''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div className="list">
            	<form onSubmit={this.handleSubmit}>
            		<label>
            			Ajouter un truc à faire
	            		<input type="text" placeholder="truc" value={this.state.value} onChange={this.handleChange}/>
	            	</label>
	            	<button>+</button>
	            </form>
				<ul>
	    	   		{this.state.items.map(item =>(
						<li key={item.id}>{item.value}</li>
					))};
	        	</ul>
          	</div>
		);
	}

	handleChange(e) {
		this.setState({value: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.value);
	}
}


export default List;