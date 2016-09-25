import React, {Component} from "react";
import {render} from "react-dom";
import ProductSelection from "./product_selection"

class AppleStore extends Component {
	render() {
		return <ProductSelection />
	}
}

render(<AppleStore />, document.getElementById("content"));
