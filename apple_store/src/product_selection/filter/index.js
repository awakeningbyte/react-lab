import React, {Component} from "react";
import {render} from "react-dom";
import macbook from "../../../assets/macbook_large.svg"; 
class ProductFilter extends Component {
	render() {
		return		<div>
				<img src={macbook}/>
				<span>MacBook</span>
			</div>
	}
}

export default ProductFilter;
