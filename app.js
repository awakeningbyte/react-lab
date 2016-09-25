import React, {Component} from "react";
import {render} from "react-dom";

class AppleStore extends Component {
	render() {
		return <div> "Hello world?" </div>
	}

}


render(<AppleStore />, document.getElementById("content"));
