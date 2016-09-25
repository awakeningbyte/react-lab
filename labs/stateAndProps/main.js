import React, {Component} from 'react';
import ReactDom,{render} from 'react-dom';
import List from './list';
import Search from './search';

class Main extends Component {
	render() {
		return <div>
			<Search/>
			<List/>
		</div>
	}
}

ReactDom.render(<Main />, document.getElementById('content'));
