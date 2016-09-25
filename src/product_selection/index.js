import React, {Component} from "react";
import {render} from "react-dom";
import Filter from "./filter";
import ProductList from "./product_list";

class ProductSelection extends Component {

	render() {
		return	<div> 
				<h2> Buy Macbook Pro</h2>
				<Filter />
				<ProductList/>
			</div>
	}
}

export default ProductSelection;
