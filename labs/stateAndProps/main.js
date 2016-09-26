import React, {Component} from 'react';
import ReactDom,{render} from 'react-dom';
import List from './list';
import SearchBar from './search';
import models from 'json!./data/models.json';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			searchText: "",
			models: []
		}	
	}

	componentDidMount() {
		this.setState({models: models});
	}

	handleSearch(e) {
		this.setState({searchText: e.target.value});
	}

	render() {
		let filtered_models = this.state.models.filter(({model,year,price}) => `${year}${model}`.indexOf(this.state.searchText) > -1);
		return <div>
			<h1> Compoent</h1>
			<SearchBar searchText={this.state.searchText} onSearch={this.handleSearch.bind(this)}/>
			<List models={filtered_models} />
		</div>
	}
}

ReactDom.render(<Main />, document.getElementById('content'));
