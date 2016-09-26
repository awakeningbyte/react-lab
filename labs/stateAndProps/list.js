import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class ModelList extends Component {
	render() {
		let content;
		if (this.props.models.length > 0) {
			content = <ul>
			{this.props.models.map( ({model,year,price},i) => <li key={i}>{year} {model}: ${price} </li>)}
			</ul>
		} else {
			content =			<div> No model was found</div>
		}

		return <div>
		{content}
		</div>
	}
}

ModelList.propTypes = {
	models: PropTypes.arrayOf(PropTypes.shape({
		model: PropTypes.string,
		year: PropTypes.number,
		price: PropTypes.price
	}))
}

export default ModelList;
