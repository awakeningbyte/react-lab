import React, {Component} from 'react';
import {render} from 'react-dom';

class List extends Component {
	render() {
		let content;
		if (this.props.models.length > 0) {
			content = <ul>
			{this.props.models.map( ({model,year,price},i) => <li key={i}>{year} {model}: ${price} </li>)}
			</ul>
		} else {
			<div> No model found</div>
		}

		return <div>
		{content}
		</div>
	}
}
export default List;
