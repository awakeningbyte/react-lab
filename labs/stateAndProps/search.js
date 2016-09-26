import React, {Component} from 'react';
import {render} from 'react-dom';

class Search extends Component {
	
	render() {
		return <div>
			<input value={this.props.searchText} onChange={this.props.onSearch}  placeholder="search"/>
		</div>
	}
}
export default Search;
