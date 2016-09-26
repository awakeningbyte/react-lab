import React, {Component} from 'react';
import ReactDom,{render} from 'react-dom';
import List from './list';
import Search from './search';
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
		return <div>
			<h1> Compoent</h1>
			<Search searchText={this.state.searchText} onSearch={this.handleSearch.bind(this)}/>
			<List models={this.state.models}/>
		</div>
	}
}

ReactDom.render(<Main />, document.getElementById('content'));
