import react, {Component} from "react";
import {Render} from "react-dom";

class AppleStore extends Component {
	render() {
		return <div> "Hello world" </div>
	}

	Render(<AppleStore />, document.findElementById("content"));
}
