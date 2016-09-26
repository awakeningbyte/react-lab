import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';

class SearchBar extends Component {
	render() {
		return <div>
			<input value={this.props.searchText} onChange={this.props.onSearch}  placeholder="search"/>
		</div>
	}
}

SearchBar.propTypes ={
	searchText: PropTypes.string,
	onSearch: PropTypes.func.isRequired
}

export default SearchBar;
